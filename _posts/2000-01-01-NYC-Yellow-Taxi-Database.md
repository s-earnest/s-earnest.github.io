---
title: ' NYC Yellow Taxi Database  '
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
  - database
  - nyc-taxi
  - case-study
  - showcase
  

image: 
   path: /assets/sample/coming-soon.png
   image: /assets/sample/coming-soon.png
   alt: Expected publishing date in progress

# image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.

---


Objective
Business problem
Approach
Key findings
Recommendations





### Summary

In progress





### Data description

Trip data is published monthly on this website, typically with a two-month delay to allow time for full vendor submissions. Due to the size of the datasets, the trip record files have been stored in the PARQUET format. I had to work and transform dataset into csv format to be able to work with SQL. Be advised that there may be minor changes in the future standardize the parquet schema across all years and datasets. 

Taxi zones: Bronx, Brooklyn, Manhattan, Queens and Staten Island.




## Data Dictionnary



| Column       | Type     | Description                       |
|--------------|----------|-----------------------------------|
| VendorID     | INT      | Primary key                       |
| customer_id  | INT      | FK to customers                   |
| order_date   | DATE     | Date of transaction               |
| amount       | DECIMAL  | Total order value                 |
| amount       | DECIMAL  | Total order value                 |
| amount       | DECIMAL  | Total order value                 |
| amount       | DECIMAL  | Total order value                 |
| amount       | DECIMAL  | Total order value                 |
| amount       | DECIMAL  | Total order value                 |
| amount       | DECIMAL  | Total order value                 |
| amount       | DECIMAL  | Total order value                 |
| amount       | DECIMAL  | Total order value                 |
| amount       | DECIMAL  | Total order value                 |
| amount       | DECIMAL  | Total order value                 |
| amount       | DECIMAL  | Total order value                 |
| amount       | DECIMAL  | Total order value                 |
| amount       | DECIMAL  | Total order value                 |

VendorID
A code indicating the TPEP provider that provided the record. <br>
1 = Creative Mobile Technologies, LLC <br>
2 = Curb Mobility, LLC <br>
6 = Myle Technologies Inc <br> 
7 = Helix <br> 


tpep_pickup_datetime   The date and time when the meter was engaged.
tpep_dropoff_datetime   The date and time when the meter was disengaged.
passenger_count     The number of passengers in the vehicle
trip_distance       The elapsed trip distance in miles reported by the taximeter
RatecodeID
  The final rate code in effect at the end of the trip.
1 = Standard rate <br>
2 = JFK <br> 
3 = Newark <br> 
4 = Nassau or Westchester <br> 
5 = Negotiated fare <br> 
6 = Group ride <br> 
99 = Null/unknown <br>


payment_type  
  A numeric code signifying how the passenger paid for the trip.
0 = Flex Fare trip
1 = Credit card
2 = Cash
3 = No charge
4 = Dispute
5 = Unknown
6 = Voided trip


fare_amount 
  The time-and-distance fare calculated by the meter. For additional <br> 
  information on the following columns, see <br> 
  https://www.nyc.gov/site/tlc/passengers/taxi-fare.page <br> 


  extra     Miscellaneous extras and surcharges.
  mta_tax Tax that is automatically triggered based on the metered rate in use
  tip_amount        Tip amount – This field is automatically populated for credit card tips. <br> 
      Cash tips are not included.

tolls_amount      Total amount of all tolls paid in trip

improvement_surcharge       Improvement surcharge assessed trips at the flag drop. The improvement
surcharge began being levied in 2015

total_amount        The total amount charged to passengers. Does not include cash tips.
congestion_surcharge    Total amount collected in trip for NYS congestion surcharge.
airport_fee       For pick up only at LaGuardia and John F. Kennedy Airports.
cbd_congestion_fee    Per-trip charge for MTA's Congestion Relief Zone starting Jan. 5, 2025




VendorID, date pick up time, drop date time, passenger count, trip distance, rate code, payment type, fare amount, extra, tax, tip amount, improvement surcharge, total amount, congestion surcharge, airport fee, congestions fee






### **Trip Patterns & Volume**

1. **How many total trips were recorded in the database?**
2. **What is the average trip distance overall?**
3. **What is the average trip duration (drop datetime - pickup datetime)?**
4. **How many trips occurred each day/week/month?**
5. **Which hour of the day has the highest number of pickups?**

---

### **Vendor & Passenger Insights**

6. **Which `VendorID` handled the most trips?**
7. **What is the average number of passengers per trip?**
8. **What is the most common passenger count per trip?**

---

### **Fare & Tip Analysis**

9. **What is the average fare amount?**
10. **What is the average tip amount per payment type?**
11. **Which payment type generates the highest tips on average?**
12. **What percentage of trips include a tip?**
13. **How does fare amount vary by rate code?**

---

### **Charges Breakdown**

14. **What is the average total amount broken down by surcharge types (e.g., congestion surcharge, improvement surcharge)?**
15. **How many trips included an airport fee, and what was the total amount collected?**
16. **Are there trips with unusually high or low total amounts (possible outliers)?**

---

### **Temporal Trends**

17. **How does the number of trips vary by day of the week?**
18. **What are the busiest hours for pickups vs. drop-offs?**
19. **Are trips during rush hour (e.g., 7–9 AM, 4–7 PM) more expensive or longer in duration?**

---

### **Operational or Anomaly Insights**

20. **Are there trips with 0 distance or 0 fare — possibly indicating data quality issues or canceled trips?**

---




## Reference 


- https://data.cityofnewyork.us/Transportation/2018-Yellow-Taxi-Trip-Data/t29m-gskq/data_preview

- https://www.nyc.gov/site/tlc/index.page

- https://www.nyc.gov/assets/tlc/downloads/pdf/data_dictionary_trip_records_yellow.pdf





## Footnote

[^1]: The footnote source




<!-- 

# Introduction 
  Business task
  Problem statement


# Data Source
   Describe where the datasets were downloaded from.
    Link the sites for the datasets if possible.
    Indicate if the data is from a public or a private license and if it is trusted.
    Describe the datasets, the columns, and what each dataset summarizes if there are more than one.




# Data Dictionnary

Variable Name | Description | Type (In Data File) | Measure (Actual) | Value labels | 
--- | --- | --- | --- | --- | --- | ---
`ids` | ID number | Numeric | Numeric |  | 
`bday` | Date of birth (mm/dd/yyyy)| Date, mm/dd/yyyy | Scale |  | 
`enrolldate` | Date of college enrollment (mm/dd/yyyy) | String| Scale |  | 
`expgradate` | Expected date of college graduation (mm/dd/yyyy) | String | Scale |  |
`Rank` | Class rank | Numeric | Ordinal | 1=Freshman <br> 2=Sophomore <br> 3=Junior <br> 4=Senior |
`Major` | Major | String | Nominal |  |
`Gender` | Gender | Numeric | Nominal | 0=Male / 1=Female |
`Athlete` | Is student an athlete? | Numeric | Nominal | 0 = Non-athlete <br> 1 = Athlete |
`Height` | Height (inches) | Numeric | Scale |  |
`Weight` | Weight (pounds) | Numeric | Scale |  |
`Smoking` | Does student smoke? | Numeric | Nominal | 0 = Nonsmoker <br> 1 = Past smoke <br> 2 = Current smoker |
`print` | 35-meter sprint time (seconds) | Numeric | Scale |  |
`MileMinDur` | Mile run time (hh:mm:ss) | Datetime | Scale |  |
`English` | Score on English placement test (out of 100 points) | Numeric | Scale |  |
`Reading` | Score on Reading placement test (out of 100 points) | Numeric | Scale |  |
`Math` | Score on Math placement test (out of 100 points) | Numeric | Scale |  |
`Writing` | Score on Writing placement test (out of 100 points) | Numeric | Scale |  |
`State` | Is student in-state or out-of-state resident? | String | Nominal |  |
`LiveOnCampus` | Does student live on campus? | Numeric | Nominal | 0 = Off-campus <br> 1 = On-campus |
`LiveOnCampus` | Does student live on campus? | Numeric | Nominal | 0 = Off-campus <br> 1 = On-campus |
`HowCommute` | How does student commute to campus? | Numeric| Nominal | 1 = Walk  <br> 2  = Bike  <br> 3 = Car <br> 4 = Public transit <br> 5 = Other |
`CommuteTime` | How long does it take you to commute to campus? (minutes) | Numeric | Scale |  |
`SleepTime` | About how many hours of sleep do you get per night? | Numeric | textScale |  |
`StudyTime` | About how many hours per week do you study? | Numeric | Scale |  |





# Outline
  Every project seeks to answer a question effectively. 
    introduction
    related work
    methods
    experimental setup




```python
print("Hello, world!")
for i in range(10):
    print(i)
```
## Images

<div style="text-align: center;">

![alt text]( /assets/sample/coming-soon.png "Our logo")

</div>


![example {caption=Caption - changeme.}]( /assets/sample/coming-soon.png )





## Resources

  - [ Notebook ]( /assets/projects/wheat_seeds.html ){:target="_blank"}
  - [ nbviewer ]( https://nbviewer.org/ ){:target="_blank"}
      - A simple way to share Jupyter Notebooks

  - [ item ]





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


-->


