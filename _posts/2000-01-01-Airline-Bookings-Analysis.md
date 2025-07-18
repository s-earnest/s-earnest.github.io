---
title: ' Airline Bookings Analysis '
author: ernest
date: 2025-01-10 16:20:02 -05:00
last_modified_at: 2023-11-30
categories: [ Work ]
pin:     # true
math: true
mermaid: true
published: false
tags:   # or [typography, tag-01, tag-02, etc.]
  - work
  # - tamplate-tag-2
  # - template-tag-3
  - airport
  - insights
  - MySQL
  - SQL
  - training
  - database


image: 
   path: /assets/sample/coming-soon.png
   image: /assets/sample/coming-soon.png
   alt: Expected publishing date unknown

# image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.
  # reference 

---










# Description 


This dataset contains information about airline bookings, including the number of passengers, sales channel, trip type, purchase lead time, length of stay, flight hour, flight day, route, booking origin, and various flags indicating if the customer wanted extra baggage, preferred seat, or in-flight meals. The dataset also includes the total flight duration and a flag indicating if the booking was completed. This information can be used for various analyses, such as predicting demand, identifying popular routes, and understanding customer preferences.

Column Description:
num_passengers = number of passengers travelling
sales_channel = sales channel booking was made on
trip_type = trip Type (Round Trip, One Way, Circle Trip)
purchase_lead = number of days between travel date and booking date
length_of_stay = number of days spent at destination
flight_hour = hour of flight departure
flight_day = day of week of flight departure
route = origin -> destination flight route
booking_origin = country from where booking was made
wants_extra_baggage = if the customer wanted extra baggage in the booking
wants_preferred_seat = if the customer wanted a preferred seat in the booking
wants_in_flight_meals = if the customer wanted in-flight meals in the booking
flight_duration = total duration of flight (in hours)
booking_complete = flag indicating if the customer completed the booking



# Data dictionary 



| Description Table      | Small DB    |  Large DB |  Reduced Percentage |
| --------------- | --------------------- | -------------------- | --------- |
| booking        | 3446513 | 50831531      | 6 %       |
| flight        | 302700 | 416429          | 8 %        |
| flight_log     | 0 | 0               | 0 %        |
| airport        | 9939 | 9939             | 0 %       |
| airport_reachable    | 0 | 0         | 0 %         |
| airport_geo      | 9854 | 9854        | 8         |
| airline        | 113 | 113               | 8         |
| flightschedule   | 9851 | 9851      | 8         |
| airplane        | 5583 | 5583           | 8         |
| airplane_type    | 342 | 342          | 8         |
| employee        | 1000 | 1000             | 8         |
| passenger        | 35386 | 36346          | 8         |
| passengerdetails  | 36194 | 35785      | 8         |
| weatherdata      | 4626432 | 4626432         | 8         |



# Objective

Based on the [airportdb schema](https://dev.mysql.com/doc/airportdb/en/airportdb-structure.html), here are **20 detailed analytical questions** I want to explore using SQL queries. These questions are designed to help me extract valuable insights from the relational structure (db original size 50831531 rows and I worked with 3446513 rows ).

























<!-- 



old one I can not used importing issues 


need to do 
(0) booking  my score = 
(1) flight  my score = 
(2) airport my score = 
(3) airport_geo my score = 
(4) airline my score = 
(5) airplay_type my score = 
(6) employee = my score = 
(7) passengerdetaions my score = 
(8) weatherdata my score = 












---

### 🛫 Flight & Airport Operations

1. **Which airports have the highest number of incoming flights?**

   * **Tables**: `airport`, `flight`
   * **Why**: Identifies major hubs and busiest airports.

2. **What is the average flight duration per airline?**

   * **Tables**: `flight`, `flight_schedule`
   * **Why**: Assesses operational efficiency and service levels.

3. **Which airports have the most outbound flights?**

   * **Tables**: `airport`, `flight_schedule`
   * **Why**: Highlights key departure points and potential congestion.

4. **What is the average number of passengers per flight?**

   * **Tables**: `flight_schedule`, `passenger`
   * **Why**: Gauges flight capacity utilization.

5. **Which airlines operate the most flights?**

   * **Tables**: `airline`, `flight`
   * **Why**: Indicates market share and operational scale.

---

### 👨‍✈️ Crew & Personnel Analysis

6. **Which pilots have the highest number of flight assignments?**

   * **Tables**: `pilot`, `flight_schedule`
   * **Why**: Identifies experienced and frequently assigned pilots.

7. **What is the average tenure of pilots at the airline?**

   * **Tables**: `pilot`, `airline`
   * **Why**: Assesses pilot retention and experience levels.

8. **Which airports have the most ground crew assigned?**

   * **Tables**: `airport`, `ground_crew`
   * **Why**: Evaluates staffing needs and operational support.

---

### 🧳 Passenger & Booking Insights

9. **Which passengers have the highest total miles traveled?**

   * **Tables**: `passenger`, `booking`
   * **Why**: Identifies frequent flyers and loyalty program candidates.

10. **What is the average booking lead time (days between booking and flight)?**

    * **Tables**: `booking`, `flight_schedule`
    * **Why**: Helps in forecasting and planning.

11. **Which destinations have the highest booking volume?**

    * **Tables**: `destination`, `booking`
    * **Why**: Indicates popular travel routes.

12. **What is the cancellation rate per airline?**

    * **Tables**: `airline`, `booking`
    * **Why**: Assesses service reliability and customer satisfaction.

---

### ✈️ Flight Leg & Schedule Analysis

13. **Which flight legs have the longest average duration?**

    * **Tables**: `flight_leg`, `flight_schedule`
    * **Why**: Identifies long-haul routes and potential operational challenges.

14. **What is the on-time performance rate per airline?**

    * **Tables**: `airline`, `flight_schedule`
    * **Why**: Measures punctuality and service quality.

15. **Which flight legs have the highest passenger load factor?**

    * **Tables**: `flight_leg`, `booking`
    * **Why**: Assesses route profitability and demand.

---

### 🏢 Airport & Airline Performance

16. **Which airports have the highest passenger throughput?**

    * **Tables**: `airport`, `passenger`
    * **Why**: Identifies major transit points and infrastructure needs.

17. **What is the average turnaround time per aircraft at each airport?**

    * **Tables**: `airport`, `aircraft`
    * **Why**: Assesses operational efficiency and ground handling performance.

18. **Which airlines have the highest number of international flights?**

    * **Tables**: `airline`, `flight_schedule`
    * **Why**: Indicates global reach and market expansion.

---

### 📊 Operational & Strategic Insights

19. **What is the average delay time per flight leg?**

    * **Tables**: `flight_leg`, `flight_schedule`
    * **Why**: Helps in identifying and mitigating delays.

20. **Which airports have the highest number of weather-related delays?**

    * **Tables**: `airport`, `weather_data`
    * **Why**: Assesses environmental impact on operations.

---

Would you like assistance in formulating SQL queries for any of these questions?





Certainly! Here are **15 detailed analytical questions** focused on the `booking` and `passenger` tables from the **MySQL AirportDB**, tailored specifically for **marketing strategies**. These insights can help target customer segments, improve retention, and drive promotions.

---

### 📊 **Marketing Strategy-Focused Questions (Booking & Passenger Tables)**

---

#### 🎯 **Customer Segmentation & Behavior**

1. **Which passengers have booked flights most frequently in the last 12 months?**

   * **Why**: Identify loyal customers for VIP or frequent flyer programs.
   * **Tables**: `booking`, `passenger`

2. **What is the average number of bookings per passenger per year?**

   * **Why**: Understand general customer engagement over time.
   * **Tables**: `booking`, `passenger`

3. **Which age groups have the highest booking rates?**

   * **Why**: Target age-specific marketing campaigns.
   * **Tables**: `passenger`, `booking` (assuming age/birthdate is stored)

4. **Which passengers consistently book premium cabin classes?**

   * **Why**: Identify high-value customers for luxury service promotions.
   * **Tables**: `booking`, `passenger` (assumes booking includes cabin/class info)

5. **What is the average lead time between booking date and flight date per passenger?**

   * **Why**: Optimize timing for promotional email campaigns.
   * **Tables**: `booking`

---

#### 📅 **Time-Based Patterns**

6. **Which months have the highest number of bookings?**

   * **Why**: Discover seasonal demand trends to time campaigns effectively.
   * **Tables**: `booking`

7. **What days of the week are most bookings made?**

   * **Why**: Identify best days for launching marketing emails and ads.
   * **Tables**: `booking`

8. **Do returning passengers book more during specific times of year (e.g., holidays)?**

   * **Why**: Plan loyalty reward campaigns around personal travel habits.
   * **Tables**: `booking`, `passenger`

---

#### 🌍 **Demographic and Geographic Targeting**

9. **Which cities or countries do most frequent flyers come from?**

   * **Why**: Geotarget promotions based on origin of passengers.
   * **Tables**: `passenger`

10. **What is the distribution of passengers by nationality or region?**

    * **Why**: Tailor multi-language ads and culturally relevant offers.
    * **Tables**: `passenger`

---

#### 💳 **Revenue & Upselling Opportunities**

11. **What is the average booking value per passenger?**

    * **Why**: Segment high-value customers for exclusive offers.
    * **Tables**: `booking`, `passenger` (assumes booking amount exists)

12. **Which passengers have not booked in the last 6 months but had prior activity?**

    * **Why**: Launch win-back email campaigns.
    * **Tables**: `booking`, `passenger`

13. **How many passengers book multiple tickets per booking (e.g., group travel)?**

    * **Why**: Target group and family travel promotions.
    * **Tables**: `booking` (assumes group size or multiple passengers per booking is tracked)

---

#### 📬 **Communication & Loyalty**

14. **Which passengers have booked but never rebooked?**

    * **Why**: Investigate drop-off reasons and send feedback forms or re-engagement offers.
    * **Tables**: `booking`, `passenger`

15. **Which passengers consistently travel on similar routes?**

    * **Why**: Offer route-specific loyalty deals or commuter discounts.
    * **Tables**: `booking`, `passenger` (requires route or destination details)

---

Would you like sample SQL queries for any of these questions or help creating a dashboard/report to visualize them?






---

### ✅ **SQL Queries for Marketing Insights**

---

#### 1. **Frequent Flyers in the Last 12 Months**

```sql
SELECT p.passenger_id, p.first_name, p.last_name, COUNT(b.booking_id) AS total_bookings
FROM booking b
JOIN passenger p ON b.passenger_id = p.passenger_id
WHERE b.booking_date >= CURDATE() - INTERVAL 12 MONTH
GROUP BY p.passenger_id
ORDER BY total_bookings DESC
LIMIT 20;
```

---

#### 2. **Average Number of Bookings Per Passenger Per Year**

```sql
SELECT AVG(booking_count) AS avg_bookings_per_passenger
FROM (
    SELECT passenger_id, COUNT(*) AS booking_count
    FROM booking
    WHERE booking_date >= CURDATE() - INTERVAL 1 YEAR
    GROUP BY passenger_id
) AS yearly_counts;
```

---

#### 3. **Top Booking Months**

```sql
SELECT MONTHNAME(booking_date) AS booking_month, COUNT(*) AS total_bookings
FROM booking
GROUP BY MONTH(booking_date)
ORDER BY total_bookings DESC;
```

---

#### 4. **Passengers with No Bookings in Last 6 Months**

```sql
SELECT p.passenger_id, p.first_name, p.last_name
FROM passenger p
LEFT JOIN booking b ON p.passenger_id = b.passenger_id AND b.booking_date >= CURDATE() - INTERVAL 6 MONTH
WHERE b.booking_id IS NULL;
```

---

#### 5. **Average Lead Time Between Booking and Flight**

*(Assuming you have `flight_date` in the booking or related table)*

```sql
SELECT AVG(DATEDIFF(b.flight_date, b.booking_date)) AS avg_lead_days
FROM booking b
WHERE b.flight_date IS NOT NULL;
```

---

#### 6. **Top Routes Flown by Returning Passengers**

*(Assuming a `route_id`, or use origin/destination airport IDs)*

```sql
SELECT p.passenger_id, COUNT(DISTINCT b.route_id) AS routes_flown
FROM booking b
JOIN passenger p ON b.passenger_id = p.passenger_id
GROUP BY p.passenger_id
HAVING routes_flown > 1
ORDER BY routes_flown DESC;
```

---

#### 7. **High-Value Customers by Booking Amount**

*(Assumes a `total_amount` or `price` field in `booking`)*

```sql
SELECT p.passenger_id, p.first_name, p.last_name, SUM(b.total_amount) AS total_spent
FROM booking b
JOIN passenger p ON b.passenger_id = p.passenger_id
GROUP BY p.passenger_id
ORDER BY total_spent DESC
LIMIT 10;
```

---

#### 8. **Passengers by Region or Country**

```sql
SELECT p.country, COUNT(*) AS total_passengers
FROM passenger p
GROUP BY p.country
ORDER BY total_passengers DESC;
```

---

#### 9. **Average Group Size per Booking**

*(If there's a `num_passengers` or similar field in `booking`)*

```sql
SELECT AVG(b.num_passengers) AS avg_group_size
FROM booking b;
```

---

#### 10. **Passengers Who Only Booked Once**

```sql
SELECT p.passenger_id, p.first_name, p.last_name
FROM passenger p
JOIN booking b ON p.passenger_id = b.passenger_id
GROUP BY p.passenger_id
HAVING COUNT(b.booking_id) = 1;
```






---

### ⚙️ **1. Frequent Flyers in the Last 12 Months**

```sql
DELIMITER //

CREATE PROCEDURE GetFrequentFlyersLast12Months()
BEGIN
    SELECT p.passenger_id, p.first_name, p.last_name, COUNT(b.booking_id) AS total_bookings
    FROM booking b
    JOIN passenger p ON b.passenger_id = p.passenger_id
    WHERE b.booking_date >= CURDATE() - INTERVAL 12 MONTH
    GROUP BY p.passenger_id
    ORDER BY total_bookings DESC
    LIMIT 20;
END //

DELIMITER ;
```

---

### ⚙️ **2. Average Bookings per Passenger per Year**

```sql
DELIMITER //

CREATE PROCEDURE GetAvgBookingsPerPassenger()
BEGIN
    SELECT AVG(booking_count) AS avg_bookings_per_passenger
    FROM (
        SELECT passenger_id, COUNT(*) AS booking_count
        FROM booking
        WHERE booking_date >= CURDATE() - INTERVAL 1 YEAR
        GROUP BY passenger_id
    ) AS yearly_counts;
END //

DELIMITER ;
```

---

### ⚙️ **3. Monthly Booking Trends**

```sql
DELIMITER //

CREATE PROCEDURE GetMonthlyBookingTrends()
BEGIN
    SELECT MONTHNAME(booking_date) AS booking_month, COUNT(*) AS total_bookings
    FROM booking
    GROUP BY MONTH(booking_date)
    ORDER BY total_bookings DESC;
END //

DELIMITER ;
```

---

### ⚙️ **4. Passengers With No Bookings in Last 6 Months**

```sql
DELIMITER //

CREATE PROCEDURE GetInactivePassengers6Months()
BEGIN
    SELECT p.passenger_id, p.first_name, p.last_name
    FROM passenger p
    LEFT JOIN booking b ON p.passenger_id = b.passenger_id AND b.booking_date >= CURDATE() - INTERVAL 6 MONTH
    WHERE b.booking_id IS NULL;
END //

DELIMITER ;
```

---

### ⚙️ **5. Average Lead Time Between Booking and Flight**

```sql
DELIMITER //

CREATE PROCEDURE GetAverageLeadTime()
BEGIN
    SELECT AVG(DATEDIFF(b.flight_date, b.booking_date)) AS avg_lead_days
    FROM booking b
    WHERE b.flight_date IS NOT NULL;
END //

DELIMITER ;
```

---

### ⚙️ **6. Most Flown Routes by Returning Passengers**

```sql
DELIMITER //

CREATE PROCEDURE GetReturningPassengerRoutes()
BEGIN
    SELECT p.passenger_id, COUNT(DISTINCT b.route_id) AS routes_flown
    FROM booking b
    JOIN passenger p ON b.passenger_id = p.passenger_id
    GROUP BY p.passenger_id
    HAVING routes_flown > 1
    ORDER BY routes_flown DESC;
END //

DELIMITER ;
```

---

### ⚙️ **7. High-Value Customers by Total Booking Amount**

```sql
DELIMITER //

CREATE PROCEDURE GetTopSpendingPassengers()
BEGIN
    SELECT p.passenger_id, p.first_name, p.last_name, SUM(b.total_amount) AS total_spent
    FROM booking b
    JOIN passenger p ON b.passenger_id = p.passenger_id
    GROUP BY p.passenger_id
    ORDER BY total_spent DESC
    LIMIT 10;
END //

DELIMITER ;
```

---

### ⚙️ **8. Passenger Count by Country**

```sql
DELIMITER //

CREATE PROCEDURE GetPassengerCountByCountry()
BEGIN
    SELECT p.country, COUNT(*) AS total_passengers
    FROM passenger p
    GROUP BY p.country
    ORDER BY total_passengers DESC;
END //

DELIMITER ;
```

---

### ⚙️ **9. Average Group Size per Booking**

```sql
DELIMITER //

CREATE PROCEDURE GetAverageGroupSize()
BEGIN
    SELECT AVG(b.num_passengers) AS avg_group_size
    FROM booking b;
END //

DELIMITER ;
```

---

### ⚙️ **10. Passengers Who Only Booked Once**

```sql
DELIMITER //

CREATE PROCEDURE GetOneTimePassengers()
BEGIN
    SELECT p.passenger_id, p.first_name, p.last_name
    FROM passenger p
    JOIN booking b ON p.passenger_id = b.passenger_id
    GROUP BY p.passenger_id
    HAVING COUNT(b.booking_id) = 1;
END //

DELIMITER ;
```

---

### ✅ How to Use

Once created, you can call any procedure with:

```sql
CALL GetFrequentFlyersLast12Months();
```

---

Would you like me to generate the remaining five procedures, or bundle these into a `.sql` script for you?

















### Analyzing Aiport Traffic



```sql
/* Question 1



*/








/* Question 6




*/


```



## Insights







### Section 



```sql
/* Question 1



*/








/* Question 6




*/


```



## Insights





### Section 


```sql
/* Question 1



*/








/* Question 6




*/


```



## Insights







### Section 


```sql
/* Question 1



*/








/* Question 6




*/


```



## Insights








```sql
/* Question 1



*/








/* Question 6




*/


```



## Insights





-->











<!-- 

> All content provided is for informational purposes only and shown case studies examples for open source data resources. The articles, notes and case study on this website are my own the way on seen opportunities and problem-solving but don’t necessarily represent the positions, strategies, or opinions of my past or current employer or its subsidiaries. I make no representations as to the accuracy or completeness of any information found here or by following any links. I will not be liable for any errors or omissions in this information nor for the availability of this information. I will not be liable for any losses, injuries, or damages from the display or use of this information.
{: .prompt-info }

> All statements are my own, and do not necessarily reflect the opinion(s) of the past or current employer, or previous or current educational institution. The information contained in this report/article/note is meant for the purposes of information only and is not intended to be investment, legal, tax or other advice, nor is it intended to be relied upon in making an investment or other decision. This information provided with my own understanding which the authors and publishers are not providing advice on legal, economic, investment or other professional issues and services. 
{: .prompt-info }




<!-- 

> DISCLAIMER
- The information contained in this report/article/note is meant for the purposes of information only and is not intended to be investment, legal, tax or other advice, nor is it intended to be relied upon in making an investment or other decision. This report is provided with the understanding that the authors and publishers are not providing advice on legal, economic, investment or other professional issues and services. 
- I am not responsible for the content of websites and information resources that may be referenced in the report. The access provided to these sites or the provision of such information resources does not constitute an endorsement by myself. of the information contained therein. However, unless expressly stated otherwise, the opinions, recommendations, findings, interpretations and conclusions expressed in this report represent the views of myself. 
- The inclusion of company examples does not in any way constitute an endorsement of these organisations by myself or the signatories to the Principles for Responsible Investment. While I have endeavoured to ensure that the information contained in this report has been obtained from reliable and up-to-date sources, the changing nature of statistics, laws, rules and regulations may result in delays, omissions or inaccuracies in information contained in this report. I am not responsible for any errors or omissions, or for any decision made or action taken based on information contained in this report, or for any loss or damage arising from or caused by such decision or action. All information in this report is provided “as-is”, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, expressed or implied.
{: .prompt-info }


   -->





# Refernece
- https://github.com/stefanproell/flughafendb







# Contact. 

Have a question? Feel free to send an [email](mailto:s.ernest@gmx.us) or if you prefer a virtual [meeting]( https://calendly.com/s-earnest/30min ){:target="_blank"}






# Footnote

[^1]: Testing Conversion Funnels is about understanding and optimizing each step of the user's experience on their journey toward purchasing our products. 

















