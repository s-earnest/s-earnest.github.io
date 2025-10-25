---
title: ' Washington DC Capital Bikeshare Database  '
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
  - case-study
  - MySQL
  - database
  - business-intelligence
  - bikeshare


image: 
   # path: /assets/sample/coming-soon.png
   path: /assets/sample/coming-soon.png
   # path: /assets/articles/mika-baumeister-web.png
   # path: /assets/articles/jeffrey-eisen-web.png
   alt: Expected publishing date in-progress


# image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.
  # reference V1PHC9LZXS7J
  
---



Objective
Business problem
Approach
Key findings
Recommendations






### Summary


The goal is to perform KYC ( know your customer) and derive customer and usage insights from the data.




### Data dictionnary


| Column name    | Type     | Description     |
|--------------|----------|----------------------|
| Duration        | INT      | Duration of trip    |
| Start Date      | INT      | Includes start date and time    |
| End Date        | DATE     | Date of transaction    |
| Start Station   | DECIMAL  | Includes starting station name and number     |
| End Station     | DECIMAL  | Includes ending station name and number    |
| Bike Number     | DECIMAL  | Includes ID number of bike used for the trip    |
| Member Type     | DECIMAL  | Indicates whether user was a "registered" member <br> (Annual Member, 30-Day Member or Day Key Member) or a "casual" rider <br> (Single Trip, 24-Hour Pass, 3-Day Pass or 5-Day Pass)    |





## Exploratory Data Analysis EDA


### 1. Customer Segmentation & Profiles (KYC)

- What is the average trip duration by member type (Subscriber vs Customer)?
- Which start stations are most popular among Subscribers vs Customers?
- What is the average number of trips per unique user by member type?
- What time of day do Subscribers vs Customers typically ride (e.g., hour of start time)?
- Which bike numbers are used most frequently by each member type?
- What percentage of trips are by Subscribers vs Customers?
- What is the distribution of trip durations (short, medium, long) for each member type?
- What are the top 10 most used routes by Subscribers and by Customers?



### 2. Temporal Analysis (Time Trends)
- How has the number of trips changed month over month?
- What days of the week have the highest and lowest ridership?
- What is the average duration of trips per month — does it vary seasonally?
- What are the peak hours for trip starts on weekdays vs weekends?
- Are there seasonal trends in usage (e.g., higher trips in summer)?
- How do Subscribers and Customers differ in trip volume over the course of the year?


### 4. Operational Metrics & Anomalies
- Are there any bikes that were used an unusually high or low number of times (potential theft or disuse)?
- What is the average turnaround time for bikes (time between end of one trip and start of the next)?


### 3. Geographic Insights (Station Usage)
- Which stations are most frequently used as starting vs ending stations?
- Which station pairs (start → end) are most commonly traveled?
- Are there stations with high one-way traffic (used mostly as start or end only)?
- What are the most common inbound and outbound stations for commuters?







![example {caption=Caption - changeme.}]( /assets/img/articles/cover-shlomo-shalev-web.png )


![example {caption=Caption - changeme.}]( /assets/articles/diagram-classicmodels.png )

(/assets/img/articles)


### Reference 

- [ CapitalBikeshare ]( https://capitalbikeshare.com/system-data )

 


## Footnote

[^1]: The footnote source










<!-- 




```sql

print("Hello, world!")
for i in range(10):
    print(i)

```



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



