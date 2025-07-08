---
title: ' Spirit Airline Database Analysis  '
author: ernest
date: 2025-01-10 16:20:02 -05:00
last_modified_at: 2023-11-30
categories: [ Work ]
pin:     # true
math: true
mermaid: true
published: true
tags:   # or [typography, tag-01, tag-02, etc.]
  - work
  # - tamplate-tag-2
  # - template-tag-3
  - marketing
  - MySQL
  - SQL
  - traning
  - showcase
  - case-study


image: 
   path: /assets/sample/coming-soon.png
   image: /assets/sample/coming-soon.png
   alt: Expected publishing date 2025 05


# image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.

---






### Summary


- The dataset contains information about sample airline bookings, including the number of passengers, sales channel, trip type, purchase lead time, length of stay, flight hour, flight day, route, booking origin, and various flags indicating if the customer wanted extra baggage, preferred seat, or in-flight meals. The dataset also includes the total flight duration and a flag indicating if the booking was completed. This information can be used for various analyses, such as predicting demand, identifying popular routes, and understanding customer preferences.


### Purpose


- This report provides a comprehensive analysis of airline booking data using various customer and flight-related metrics. Key insights include the performance of different sales channels based on booking completion rates, popular routes and trip types, and customer preferences for add-on services like extra baggage, preferred seating, and in-flight meals. The analysis also explores how factors such as purchase lead time, flight duration, and travel day impact booking behavior. Geographic trends reveal which countries have the highest conversion rates and demand for premium services. Temporal patterns, such as flight hour and day-of-week trends, help identify peak booking periods. Correlations between trip types, number of passengers, and service requests provide further segmentation opportunities. Overall, the queries aim to support data-driven decisions in route planning, marketing, and customer experience enhancement by identifying areas of high demand, customer behavior trends, and potential operational optimizations across different segments of the airline’s booking ecosystem.





### Data dictionnary 


| Column       | Type     | Description                       |
|--------------|----------|-----------------------------------|
| num_passengers    | INT      | number of passengers travelling    |
| sales_channel     | INT      | sales channel booking was made on    |
| trip_type         | DATE     | trip Type (Round Trip, One Way, Circle Trip)    |
| purchase_lead     | DECIMAL  | number of days between travel date and booking date   |
| length_of_stay    | DECIMAL  | number of days spent at destination  |
| flight_hour       | DECIMAL  | hour of flight departure    |
| route             | DECIMAL  | origin -> destination flight route    |
| wants_extra_baggage | DECIMAL  | if the customer wanted extra baggage in the booking    |
| wants_preferred_seat  | DECIMAL  | if the customer wanted a preferred seat in the booking    |
| wants_in_flight_meals   | DECIMAL  | if the customer wanted in-flight meals in the booking    |
| flight_duration  | DECIMAL  | total duration of flight (in hours)    |
| booking_complete | DECIMAL  | flag indicating if the customer completed the booking    |
| flight_day | DECIMAL  | day of week of flight departure    |
| booking_origin | INT |  country from where booking was made | 





### (1) **Booking Behavior Analysis**

1. **What is the average number of passengers per booking across all routes?**


2. **Which sales channel has the highest booking completion rate?**


3. **What are the top 5 trip types by volume of completed bookings?**


4. **How does the number of days between booking and travel (purchase\_lead) impact booking completion?**


### (2) **Flight and Route Analysis**


5. **What are the top 10 most popular routes by booking volume?**


6. **What is the average flight duration per route?**


7. **Which days of the week have the highest booking completions?**

### (3)  **Add-On Services Demand**

8. **What percentage of customers opt for extra baggage?**


9. **What is the overlap between customers who want all 3 services (baggage, meals, preferred seat)?**


10. **How does add-on preference vary by booking origin (country)?**


### (4) **Temporal Patterns**

11. **What is the distribution of flights by hour of the day?**


12. **Is there a correlation between length of stay and trip type?**



### (5) **Geographic Trends**

13. **Which booking origins have the highest completion rate?**


14. **Top 5 countries with customers requesting preferred seats the most?**



### (6) **Conversion & Optimization**

15. **What is the average purchase lead for completed bookings vs. incomplete?**


16. **Which flight routes have the lowest booking completion rate?**


18. **Is there a difference in add-on requests between One Way and Round Trips?**


19. **What is the relationship between number of passengers and add-on service requests?**


20. **Which combinations of trip\_type and flight\_day are most successful (by completion rate)?**








<!-- 


flughafendb


### 🎯 **Booking Behavior Analysis**

1. **What is the average number of passengers per booking across all routes?**

   ```sql
   SELECT AVG(num_passengers) AS avg_passengers FROM bookings;
   ```

   *Gives an idea of group vs. solo travelers.*

2. **Which sales channel has the highest booking completion rate?**

   ```sql
   SELECT sales_channel, 
          ROUND(SUM(booking_complete) / COUNT(*) * 100, 2) AS completion_rate
   FROM bookings
   GROUP BY sales_channel
   ORDER BY completion_rate DESC;
   ```

   *Helps determine the most effective sales platform.*

3. **What are the top 5 trip types by volume of completed bookings?**

   ```sql
   SELECT trip_type, COUNT(*) AS total
   FROM bookings
   WHERE booking_complete = 1
   GROUP BY trip_type
   ORDER BY total DESC
   LIMIT 5;
   ```

   *Identifies most common travel preferences.*

4. **How does the number of days between booking and travel (purchase\_lead) impact booking completion?**

   ```sql
   SELECT purchase_lead, 
          COUNT(*) AS total_bookings,
          SUM(booking_complete) AS completed_bookings
   FROM bookings
   GROUP BY purchase_lead
   ORDER BY purchase_lead;
   ```

   *Looks for patterns in advance booking behavior.*

---

### 🛫 **Flight and Route Analysis**

5. **What are the top 10 most popular routes by booking volume?**

   ```sql
   SELECT route, COUNT(*) AS total_bookings
   FROM bookings
   GROUP BY route
   ORDER BY total_bookings DESC
   LIMIT 10;
   ```

   *Gives insight into high-demand routes.*

6. **What is the average flight duration per route?**

   ```sql
   SELECT route, ROUND(AVG(flight_duration), 2) AS avg_duration
   FROM bookings
   GROUP BY route
   ORDER BY avg_duration DESC;
   ```

   *Highlights routes with potentially longer travel times.*

7. **Which days of the week have the highest booking completions?**

   ```sql
   SELECT flight_day, COUNT(*) AS total_bookings, 
          SUM(booking_complete) AS completed_bookings
   FROM bookings
   GROUP BY flight_day
   ORDER BY completed_bookings DESC;
   ```

   *Useful for scheduling and promotions.*

---

### 🧳 **Add-On Services Demand**

8. **What percentage of customers opt for extra baggage?**

   ```sql
   SELECT ROUND(SUM(wants_extra_baggage) / COUNT(*) * 100, 2) AS extra_baggage_pct
   FROM bookings;
   ```

   *Determines interest in baggage add-ons.*

9. **What is the overlap between customers who want all 3 services (baggage, meals, preferred seat)?**

   ```sql
   SELECT COUNT(*) AS all_services_requested
   FROM bookings
   WHERE wants_extra_baggage = 1 
     AND wants_preferred_seat = 1 
     AND wants_in_flight_meals = 1;
   ```

   *Useful for bundled service offering analysis.*

10. **How does add-on preference vary by booking origin (country)?**

```sql
SELECT booking_origin, 
       AVG(wants_extra_baggage) AS baggage_rate, 
       AVG(wants_preferred_seat) AS seat_rate,
       AVG(wants_in_flight_meals) AS meals_rate
FROM bookings
GROUP BY booking_origin
ORDER BY baggage_rate DESC;
```

*Shows regional preferences for add-ons.*

---

### 📅 **Temporal Patterns**

11. **What is the distribution of flights by hour of the day?**

```sql
SELECT flight_hour, COUNT(*) AS num_flights
FROM bookings
GROUP BY flight_hour
ORDER BY flight_hour;
```

*Can inform demand for flights at certain times.*

12. **Is there a correlation between length of stay and trip type?**

```sql
SELECT trip_type, ROUND(AVG(length_of_stay), 2) AS avg_stay
FROM bookings
GROUP BY trip_type;
```

*Reveals how long people stay for different types of trips.*

---

### 🌐 **Geographic Trends**

13. **Which booking origins have the highest completion rate?**

```sql
SELECT booking_origin, 
       ROUND(SUM(booking_complete) / COUNT(*) * 100, 2) AS completion_rate
FROM bookings
GROUP BY booking_origin
ORDER BY completion_rate DESC;
```

*Helpful in understanding customer engagement by region.*

14. **Top 5 countries with customers requesting preferred seats the most?**

```sql
SELECT booking_origin, 
       COUNT(*) AS total_requests
FROM bookings
WHERE wants_preferred_seat = 1
GROUP BY booking_origin
ORDER BY total_requests DESC
LIMIT 5;
```

*Useful for targeting premium seat offers.*

---

### 📊 **Conversion & Optimization**

15. **What is the average purchase lead for completed bookings vs. incomplete?**

```sql
SELECT booking_complete, ROUND(AVG(purchase_lead), 2) AS avg_lead
FROM bookings
GROUP BY booking_complete;
```

*Shows whether booking earlier impacts completion.*

16. **Which flight routes have the lowest booking completion rate?**

```sql
SELECT route, 
       ROUND(SUM(booking_complete) / COUNT(*) * 100, 2) AS completion_rate
FROM bookings
GROUP BY route
ORDER BY completion_rate ASC
LIMIT 10;
```

*Highlights problematic or low-interest routes.*

---

### 📈 **Advanced Patterns & Segments**

17. **Are customers on longer flights more likely to request in-flight meals?**

```sql
SELECT 
    CASE 
        WHEN flight_duration < 2 THEN 'Short'
        WHEN flight_duration BETWEEN 2 AND 5 THEN 'Medium'
        ELSE 'Long'
    END AS flight_category,
    ROUND(AVG(wants_in_flight_meals) * 100, 2) AS meal_request_pct
FROM bookings
GROUP BY flight_category;
```

*Correlates flight length with meal preferences.*

18. **Is there a difference in add-on requests between One Way and Round Trips?**

```sql
SELECT trip_type, 
       AVG(wants_extra_baggage) AS baggage_rate,
       AVG(wants_preferred_seat) AS seat_rate,
       AVG(wants_in_flight_meals) AS meals_rate
FROM bookings
GROUP BY trip_type;
```

*Can refine offerings per trip type.*

19. **What is the relationship between number of passengers and add-on service requests?**

```sql
SELECT num_passengers, 
       AVG(wants_extra_baggage) AS baggage_rate,
       AVG(wants_in_flight_meals) AS meals_rate
FROM bookings
GROUP BY num_passengers
ORDER BY num_passengers;
```

*Checks if larger groups want more services.*

20. **Which combinations of trip\_type and flight\_day are most successful (by completion rate)?**

```sql
SELECT trip_type, flight_day,
       ROUND(SUM(booking_complete) / COUNT(*) * 100, 2) AS completion_rate
FROM bookings
GROUP BY trip_type, flight_day
ORDER BY completion_rate DESC;
```

*Uncovers optimal travel days per trip type.*

---

Let me know if you’d like to turn any of these into a full MySQL script or dashboard!




```sql

print("Hello, world!")
for i in range(10):
    print(i)

```


<!-- 

> All content provided is for informational purposes only and shown case studies examples for open source data resources. The articles, notes and case study on this website are my own the way on seen opportunities and problem-solving but don’t necessarily represent the positions, strategies, or opinions of my past or current employer or its subsidiaries. I make no representations as to the accuracy or completeness of any information found here or by following any links. I will not be liable for any errors or omissions in this information nor for the availability of this information. I will not be liable for any losses, injuries, or damages from the display or use of this information.
{: .prompt-info }

> All statements are my own, and do not necessarily reflect the opinion(s) of the past or current employer, or previous or current educational institution. The information contained in this report/article/note is meant for the purposes of information only and is not intended to be investment, legal, tax or other advice, nor is it intended to be relied upon in making an investment or other decision. This information provided with my own understanding which the authors and publishers are not providing advice on legal, economic, investment or other professional issues and services. 
{: .prompt-info }


## Explain the why I worked in this problem.


1. Introduction
  Business task
  Probleme statement

2. Data sources
  In this section, you will describe all the datasets you are using. Use the following format:
    Describe where the datasets were downloaded from.
    Link the sites for the datasets if possible.
    Indicate if the data is from a public or a private license and if it is trusted.
    Describe the datasets, the columns, and what each dataset summarizes if there are more than one.

3. Documentation of cleaning and manipulation

4. Summary of data analysis
5. Key visualization and findings
  Make sure to list the key findings from the analysis that we did in the step earlier, list them out in layman's terms, and remember that the people you are presenting to will not be data analysts so make it as plain as day.
6. Recommendations
  Here, you will provide high-level recommendations from the key findings, make sure they align with the goal and business task you were given, and also answer the problem statement of the project.

STATISTICAL Problem
PLAN
  What specific statistical operations does this problem call for?
SOLVE
  Make the graphs and carry out the calculation needed for this problem
CONCLUDE
  Give the practical conclusion in the setting of the real-world problem


CONFIDENCE intervals
STATE

PLAN

SOLVE

CONCLUDE



TEST OF SIGNIFICANCE
STATE
  What is the practical question that requires a statistical test?

PLAN
  Identify the parameter, state null and alternative hypotheses, and choose the type of test that fits the situation.

SOLVE
  Carry out the test in three phases:
      1. Check the conditions for the test you plan to use
      2. Calculate the test statistic
      3. Find the p-value

CONCLUDE
  Return to the practical question to describe the results in this settings




<!-- 

> DISCLAIMER
- The information contained in this report/article/note is meant for the purposes of information only and is not intended to be investment, legal, tax or other advice, nor is it intended to be relied upon in making an investment or other decision. This report is provided with the understanding that the authors and publishers are not providing advice on legal, economic, investment or other professional issues and services. 
- I am not responsible for the content of websites and information resources that may be referenced in the report. The access provided to these sites or the provision of such information resources does not constitute an endorsement by myself. of the information contained therein. However, unless expressly stated otherwise, the opinions, recommendations, findings, interpretations and conclusions expressed in this report represent the views of myself. 
- The inclusion of company examples does not in any way constitute an endorsement of these organisations by myself or the signatories to the Principles for Responsible Investment. While I have endeavoured to ensure that the information contained in this report has been obtained from reliable and up-to-date sources, the changing nature of statistics, laws, rules and regulations may result in delays, omissions or inaccuracies in information contained in this report. I am not responsible for any errors or omissions, or for any decision made or action taken based on information contained in this report, or for any loss or damage arising from or caused by such decision or action. All information in this report is provided “as-is”, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, expressed or implied.
{: .prompt-info }







# Footnote

[^1]: Testing Conversion Funnels is about understanding and optimizing each step of the user's experience on their journey toward purchasing our products. 




### Refernece
- https://github.com/stefanproell/flughafendb



-->







### Contact. 

Have a question? Feel free to send an [email](mailto:s.ernest@gmx.us) or if you prefer a virtual [meeting]( https://calendly.com/s-earnest/30min ){:target="_blank"}




