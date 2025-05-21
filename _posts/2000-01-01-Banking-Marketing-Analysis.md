---
title: ' Banking Marketing  '
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
  - marketing
  - baking
  - SQL
  - MySQL
  - training

  # - tamplate-tag-2
  # - template-tag-3

image: 
   path: /assets/sample/coming-soon.png
   image: /assets/sample/coming-soon.png
   alt: Expected publishing date unknown 

# image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.

---



Citation Request:
  This dataset is public available for research. The details are described in [Moro et al., 2011]. 
  Please include this citation if you plan to use this database:

  [Moro et al., 2011] S. Moro, R. Laureano and P. Cortez. Using Data Mining for Bank Direct Marketing: An Application of the CRISP-DM Methodology. 
  In P. Novais et al. (Eds.), Proceedings of the European Simulation and Modelling Conference - ESM'2011, pp. 117-121, Guimarães, Portugal, October, 2011. EUROSIS.

  Available at: [pdf] http://hdl.handle.net/1822/14838
                [bib] http://www3.dsi.uminho.pt/pcortez/bib/2011-esm-1.txt

1. Title: Bank Marketing

2. Sources
   Created by: Paulo Cortez (Univ. Minho) and Sérgio Moro (ISCTE-IUL) @ 2012
   
3. Past Usage:

  The full dataset was described and analyzed in:

  S. Moro, R. Laureano and P. Cortez. Using Data Mining for Bank Direct Marketing: An Application of the CRISP-DM Methodology. 
  In P. Novais et al. (Eds.), Proceedings of the European Simulation and Modelling Conference - ESM'2011, pp. 117-121, Guimarães, 
  Portugal, October, 2011. EUROSIS.

4. Relevant Information:

   The data is related with direct marketing campaigns of a Portuguese banking institution. 
   The marketing campaigns were based on phone calls. Often, more than one contact to the same client was required, 
   in order to access if the product (bank term deposit) would be (or not) subscribed. 

   There are two datasets: 
      1) bank-full.csv with all examples, ordered by date (from May 2008 to November 2010).
      2) bank.csv with 10% of the examples (4521), randomly selected from bank-full.csv.
   The smallest dataset is provided to test more computationally demanding machine learning algorithms (e.g. SVM).

   The classification goal is to predict if the client will subscribe a term deposit (variable y).

5. Number of Instances: 45211 for bank-full.csv (4521 for bank.csv)

6. Number of Attributes: 16 + output attribute.

7. Attribute information:

   For more information, read [Moro et al., 2011].

   Input variables:
   # bank client data:
   1 - age (numeric)
   2 - job : type of job (categorical: "admin.","unknown","unemployed","management","housemaid","entrepreneur","student",
                                       "blue-collar","self-employed","retired","technician","services") 
   3 - marital : marital status (categorical: "married","divorced","single"; note: "divorced" means divorced or widowed)
   4 - education (categorical: "unknown","secondary","primary","tertiary")
   5 - default: has credit in default? (binary: "yes","no")
   6 - balance: average yearly balance, in euros (numeric) 
   7 - housing: has housing loan? (binary: "yes","no")
   8 - loan: has personal loan? (binary: "yes","no")
   # related with the last contact of the current campaign:
   9 - contact: contact communication type (categorical: "unknown","telephone","cellular") 
  10 - day: last contact day of the month (numeric)
  11 - month: last contact month of year (categorical: "jan", "feb", "mar", ..., "nov", "dec")
  12 - duration: last contact duration, in seconds (numeric)
   # other attributes:
  13 - campaign: number of contacts performed during this campaign and for this client (numeric, includes last contact)
  14 - pdays: number of days that passed by after the client was last contacted from a previous campaign (numeric, -1 means client was not previously contacted)
  15 - previous: number of contacts performed before this campaign and for this client (numeric)
  16 - poutcome: outcome of the previous marketing campaign (categorical: "unknown","other","failure","success")

  Output variable (desired target):
  17 - y - has the client subscribed a term deposit? (binary: "yes","no")

8. Missing Attribute Values: None











### Summary


This is a sample blog post. Lorem ipsum I can't remember the rest[^1] of lorem ipsum and don't have an internet connection right now. 


# Introduction 
  Business task
  Problem statement


# Data Source
   Describe where the datasets were downloaded from.
    Link the sites for the datasets if possible.
    Indicate if the data is from a public or a private license and if it is trusted.
    Describe the datasets, the columns, and what each dataset summarizes if there are more than one.




# Data Dictionnary






## Table: orders
**Description:** Stores all completed customer transactions.

| Column       | Type     | Description                       |
|--------------|----------|-----------------------------------|
| order_id     | INT      | Primary key                       |
| customer_id  | INT      | FK to customers                   |
| order_date   | DATE     | Date of transaction               |
| amount       | DECIMAL  | Total order value                 |

**Notes:**
- Orders only include completed purchases (not abandoned carts).
- Use `order_date` for time-based reporting.



# Outline
  Every project seeks to answer a question effectively. 
    introduction
    related work
    methods
    experimental setup








<!-- 

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





# Methodology

  This is 1

# Results

  This is 2

# Visualization data
  
  This is 4


# Working with time series

  This is a section

# Creating new metrics

  This is a section






In this project, I analyzed data from a bank’s marketing campaigns to reveal factors that drive customer engagement. By exploring patterns in demographics, financial status, and previous campaign outcomes, I aimed to uncover what influences customers to make a deposit. This analysis provides insights that can guide future strategies, helping the bank target the right audiences with the most effective messages.





My goal was to provide actionable insights to help optimize marketing strategies and improve conversion rates for term deposits.

1. Understanding the Dataset:

The dataset comes from a Portuguese bank’s direct marketing campaigns, where customers were contacted to subscribe to term deposits. The goal of my analysis was to determine which customers were more likely to subscribe and how to improve campaign efficiency.

Customer Attributes:

Age: Age of the customer.

Job: Type of job (e.g., admin., blue-collar, technician).

Marital Status: Marital status of the customer (single, married, divorced).

Education: Level of education (e.g., primary, secondary, tertiary).

Default: Has the customer credit in default? (Yes/No).

Housing Loan: Does the customer have a housing loan? (Yes/No).

Personal Loan: Does the customer have a personal loan? (Yes/No).

Campaign Attributes:

Contact Type: Communication method used to contact the customer (cellular, telephone).

Last Contact Date: Date of the last contact made to the customer.

Duration: Duration of the last contact (in seconds).

Campaign: Variable representing the current direct marketing campaign

Previous: Variable representing the number of contacts made with the customer during previous marketing campaigns before the current campaign.

Economic Context:

EmpVarRate: Employment variation rate — a measure of employment growth or decline.

Euribor3m: Three-month Euro Interbank Offered Rate, a benchmark interest rate.

ConsPriceIdx: Consumer Price Index, an indicator of inflation.

ConsConfIdx: Consumer Confidence Index — an economic sentiment indicator.

Target Outcome:

Target Outcome (y): Whether the customer subscribed to the term deposit after being contacted (Yes/No).





Customer Segmentation: Who’s More Likely to Subscribe?

To help the bank target its marketing efforts more effectively, I segmented customers based on their job types and whether they had housing or personal loans. This allowed me to see which customer groups were more likely to subscribe to a term deposit and which were less responsive



```sql
SELECT p.passenger_id, p.first_name, p.last_name
FROM passenger p
JOIN booking b ON p.passenger_id = b.passenger_id
GROUP BY p.passenger_id
HAVING COUNT(b.booking_id) = 1;
```





```sql
/* Question 1
movenmoviesmini schema. 
What do we notice about it? How many table are there? What does the data represent? What do we think about the current schema?



*/











/* Question 2
If we wanted to break out the data from the inventory_non_normalized table into multiple tables, how many table do we think would be ideal? What would we name thise tables?



*/







/* Question 3
Based on our answer from question 2, create a new schema with the tables we think will best serve this data set. We cna use SQL code or workbench UI tools (whichever we feel more comfortable with).



*/




/* Question 4

- Next, use the data from the original schema to populate the tables is newly optimized schema

*/


/* Question 5

Make sure our new table have the proper primary keys defined and that applicable foreign keys are added. Add any contratints we thing should apply to the data as well (unique, non-NULL, etc>)





*/





/* Question 6

Finally, after doing all of this technical work, write a brief summary of what we have done, in a way that your non-technical client can understand. Communicate what we did, and why our new schem design is better.



*/










## Resources

  - [ Notebook ]( /assets/projects/wheat_seeds.html ){:target="_blank"}
  - [ nbviewer ]( https://nbviewer.org/ ){:target="_blank"}
      - A simple way to share Jupyter Notebooks

  - [ item ]








### Contact. 

Have a question? Feel free to send an [email](mailto:s.ernest@gmx.us) or if you prefer a virtual [meeting]( https://calendly.com/s-earnest/30min ){:target="_blank"}






## Footnote

[^1]: The footnote source







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


   -->





