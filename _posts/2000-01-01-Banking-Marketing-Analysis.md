---
title: ' Banking Marketing Campaigns Database '
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
  - banking
  - SQL
  - MySQL
  - training
  - database
  

  # - tamplate-tag-2
  # - template-tag-3

image: 
   path: /assets/sample/coming-soon.png
   image: /assets/sample/coming-soon.png
   alt: Expected publishing date in-progress 

# image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.

---






### Purpose

The goal of this showcase is to provide actionable insights to help optimize marketing strategies and improve conversion rates for term deposits. The project consists on: (1) I analyzed data from a bank’s marketing campaigns to reveal factors that drive customer engagement, (2) By exploring patterns in demographics, financial status, and previous campaign outcomes, (3) I aimed to uncover what influences customers to make a deposit. This analysis provides insights that can guide future strategies, helping the bank target the right audiences with the most effective messages. This dataset was more used for Machine Learning but I decided to use it as first data analysis hands-on. 


1. Understanding the Dataset:

- The dataset comes from UV Urvine repository and the information is from a Portuguese bank’s direct marketing campaigns, where customers were contacted to subscribe to term deposits. The goal of my analysis was to determine which customers were more likely to subscribe and how to improve campaign efficiency.






### Data dictionnary

| Column Attributes  | Type     | Description        |
|--------------|----------|----------------------------|
| age           | numeric |                  | 
| job       | categorical |  "admin.","unknown","unemployed","management","housemaid","entrepreneur", <br> "student", "blue-collar","self-employed","retired","technician","services")  |
| marital | categorical  |  "married","divorced","single"; <br> note: "divorced" means divorced or widowed) | 
| education | categoricla | "unknown","secondary","primary","tertiary") | 
| default | binary  | has credit in default? |
| balance | numeric | average yearly balance, in euros | 
| housing | binary | has housing loan?  | 
| loan | binary | has personal loan? | 
| contact | categorical | contact communication type: "unknown","telephone","cellular")  | 
| day | numeric | last contact day of the month | 
| month | categorical | last contact month of year  | 
| duration | numeric | last contact duration, in seconds | 
| campaign | item | number of contacts performed during this <br> campaign and for this client (numeric, includes last contact) |
| pdays | item | number of days that passed by after the client was last contacted <br> from a previous campaign (numeric, -1 means client was not previously contacted) | 
| previous | item | number of contacts performed before this campaign and for this client (numeric) |
| poutcome | item | outcome of the previous marketing campaign <br> (categorical: "unknown","other","failure","success") | 

No missing values






### 1. **Demographic Insights:**


- What is the average age of individuals in the dataset?

- How does the distribution of age groups look like across different job categories?

- What is the percentage of individuals with different education levels (e.g., high school, undergraduate, graduate)?

- How does marital status correlate with age and education level?

- What is the relationship between job type and marital status?


## Key insights:

- (1)
- (2)



### 2. Loan Defaults and Financial Behavior:

- What percentage of individuals have defaulted on a loan?

- Is there any correlation between age and loan default rates?

- How do loan defaults differ by job category?

- Is there any relationship between education level and likelihood of defaulting on a loan?

- What percentage of individuals with a housing loan also have a personal loan?




### 3. Housing and Personal Loans Insights:

- How many individuals have both a housing loan and a personal loan?

- What is the correlation between marital status and having a housing or personal loan?

- How do housing and personal loans correlate with education level?


### 4. Contact and Campaign Insights:


- What is the distribution of contact types (e.g., telephone, email, etc.) used for last contact?

- Which contact types are most successful in converting leads to customers (if conversion data is available)?

- How does the last contact date impact the likelihood of loan default or acceptance?

- What percentage of individuals were contacted during each campaign, and what was the outcome?


### 5. Customer Segmentation and Targeting:


- Which job categories are most likely to have a loan default or a housing loan?

- How does the campaign outcome vary across different education levels and marital statuses?

- What is the impact of marital status on the decision to take a housing loan or personal loan?







<!--


In this project, I analyzed data from a bank’s marketing campaigns to reveal factors that drive customer engagement. By exploring patterns in demographics, financial status, and previous campaign outcomes, I aimed to uncover what influences customers to make a deposit.

Link project
https://github.com/DanieltheAnalyst1/Bank_Marketing_Campaign_Analysis-SQL


Bank Marketing Campaign Analysis: Uncovering What Works
In this project, I analyzed data from a bank’s marketing campaigns to reveal factors that drive customer engagement. By exploring patterns in demographics, financial status, and previous campaign outcomes, I aimed to uncover what influences customers to make a deposit. This analysis provides insights that can guide future strategies, helping the bank target the right audiences with the most effective messages.

📌 Analysis Highlights:
Who is more likely to respond positively to the campaign?
Which demographics and financial factors show higher engagement rates?
How does contact frequency and previous campaign outcome impact deposit success?


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



## Table: orders
age, job, mariatal status, education, defaulted the loan, housing loan, personal loan, conctact type durant last contact date, campaing, 

| Customer Attributes       | Type     | Description        |
|--------------|----------|-----------------------------------|
| age    | INT      | Age of the customer  |
| Job  | INT      | Type of job (e.g., admin., blue-collar, technician)    |
| Marital Status   | DATE     | Marital status of the customer (single, married, divorced)  |
| Education | DECIMAL  | Level of education (e.g., primary, secondary, tertiary)  |
| Default |item | Has the customer credit in default? (Yes/No) |
| Housing Loan | item | Does the customer have a housing loan? (Yes/No) |
| Personal Loan | item | Does the customer have a personal loan? (Yes/No) |
| Contact | item | Type during last contact date |
| Campaing | item | item |


===



### 1. **Demographic Insights:**

1. What is the average age of individuals in the dataset?
2. How does the distribution of age groups look like across different job categories?
3. What is the percentage of individuals with different education levels (e.g., high school, undergraduate, graduate)?
4. How does marital status correlate with age and education level?
5. What is the relationship between job type and marital status?

### 2. **Loan Defaults and Financial Behavior:**

6. What percentage of individuals have defaulted on a loan?
7. Is there any correlation between age and loan default rates?
8. How do loan defaults differ by job category?
9. Is there any relationship between education level and likelihood of defaulting on a loan?
10. What percentage of individuals with a housing loan also have a personal loan?

### 3. **Housing and Personal Loans Insights:**

11. How many individuals have both a housing loan and a personal loan?
12. What is the correlation between marital status and having a housing or personal loan?
13. How do housing and personal loans correlate with education level?

### 4. **Contact and Campaign Insights:**

14. What is the distribution of contact types (e.g., telephone, email, etc.) used for last contact?
15. Which contact types are most successful in converting leads to customers (if conversion data is available)?
16. How does the last contact date impact the likelihood of loan default or acceptance?
17. What percentage of individuals were contacted during each campaign, and what was the outcome?

### 5. **Customer Segmentation and Targeting:**

18. Which job categories are most likely to have a loan default or a housing loan?
19. How does the campaign outcome vary across different education levels and marital statuses?
20. What is the impact of marital status on the decision to take a housing loan or personal loan?

### Bonus Considerations:

You can also try analyzing seasonal trends if there’s any date/time data that can be correlated with loan behavior (e.g., Does loan default increase in certain months?)




I'll divide the questions into specific topics to help you focus on different aspects of SQL: **Basic Queries**, **Aggregations and Joins**, **Subqueries**, **Date Functions**, **Grouping and Filtering**, **Advanced Analysis**, and **Advanced Joins**.

### Tables (Assumed Schema):

1. **customers**: Contains customer data (e.g., age, job, marital status, education).
2. **loans**: Contains loan-related data (e.g., housing loan, personal loan, defaulted loans).
3. **campaign**: Contains information about marketing campaigns (e.g., contact date, campaign type).
4. **contact\_history**: Stores contact information related to the campaign, including contact types and dates.

---

## **Basic Queries**

### 1. Retrieve All Customer Information

* Write an SQL query to retrieve all details from the `customers` table, including age, job, marital status, and education.

### 2. List All Active Campaigns

* Write an SQL query to list all campaigns that are currently active in the `campaign` table (assuming there’s a status or date field that indicates active campaigns).

### 3. Retrieve Loan Information for Specific Customer

* Write a query to fetch the loan information (housing loan, personal loan) for a customer with a given `customer_id` from the `loans` table.

---

## **Aggregations and Joins**

### 4. Count of Customers Who Defaulted on Loans

* Write an SQL query to count how many customers have defaulted on loans from the `loans` table.

### 5. Number of Customers by Job Type

* Write an SQL query to group customers by their job type (from the `customers` table) and count how many customers are in each job category.

### 6. Average Age of Customers with Housing Loans

* Write an SQL query to calculate the average age of customers who have a housing loan from the `loans` table.

### 7. Sum of Defaulted Loan Amounts

* Write a query to calculate the total amount of loans defaulted by customers (assuming the loan amount is in the `loans` table).

---

## **Subqueries**

### 8. Customers Who Have Not Been Contacted in the Last Month

* Write an SQL query to find customers who have not been contacted in the last month from the `contact_history` table. Use a subquery to find the customers who don't have recent contacts.

### 9. Customers with Personal Loans Who Have Not Defaulted

* Write a query to find customers who have a personal loan but have not defaulted on it (use the `loans` table with a subquery or `JOIN`).

### 10. Customers in Specific Campaign with Age Greater Than 30

* Write a query to find customers who participated in a specific campaign and are over the age of 30. Use a subquery to identify those in the campaign.

---

## **Date Functions**

### 11. Number of Contacts Made in the Last 30 Days

* Write a query to count how many contacts were made in the last 30 days from the `contact_history` table, using the current date.

### 12. Customers Contacted in Specific Month

* Write a query to list all customers who were contacted in March 2023 (from the `contact_history` table).

### 13. Most Recent Contact for Each Customer

* Write an SQL query to find the most recent contact date for each customer from the `contact_history` table.

---

## **Grouping and Filtering**

### 14. Average Loan Amount for Defaulted vs. Non-Defaulted Loans

* Write an SQL query to calculate the average loan amount for customers who have defaulted on their loan versus those who have not from the `loans` table.

### 15. Number of Customers by Marital Status

* Write an SQL query to count the number of customers for each marital status category (e.g., single, married, divorced) from the `customers` table.

### 16. Customers Who Have Both Housing and Personal Loans

* Write a query to find customers who have both a housing loan and a personal loan from the `loans` table.

---

## **Advanced Analysis**

### 17. Loan Default Rate by Education Level

* Write a query to calculate the loan default rate for each education level (from the `customers` table and the `loans` table). Show the number of defaults vs. total customers for each education level.

### 18. Percentage of Customers Who Have Been Contacted and Subscribed to Campaigns

* Write an SQL query to calculate the percentage of customers who have been contacted (from the `contact_history` table) and have subscribed to any campaign (from the `campaign` table).

### 19. Predictive Analysis: Loan Default Based on Age, Job, and Housing Loan

* Write an SQL query that combines `customers` and `loans` tables to find patterns in loan defaults based on customer attributes like age, job, and whether they have a housing loan (e.g., calculate default rates for each group).

---

## **Advanced Joins**

### 20. Customers Who Were Contacted and Have a Loan Default

* Write an SQL query to find customers who have both been contacted (from the `contact_history` table) and have defaulted on their loan (from the `loans` table). Use an appropriate `JOIN`.

---

### **Summary of Topics:**

* **Basic Queries**: Simple SELECT, retrieving all customer data.
* **Aggregations and Joins**: Counting, summing, averaging, using JOINs.
* **Subqueries**: Handling nested queries and filtering based on conditions.
* **Date Functions**: Working with time-related data, such as filtering or calculating based on dates.
* **Grouping and Filtering**: Using GROUP BY and HAVING for categorized and conditional aggregations.
* **Advanced Analysis**: Applying business logic, analyzing default rates, and percentages.
* **Advanced Joins**: Combining data from multiple tables, including those with complex conditions.



===

| Campaign Attributes       | Type     | Description        |
|--------------|----------|-----------------------------------|
| Contact Type    | INT  | Communication method used to contact the customer (cellular, telephone).  |
| Last Contact Date | item | Date of the last contact made to the customer. |
| Duration | item | Duration of the last contact (in seconds). |
| Campaign | item | Variable representing the current direct marketing campaign |
| Previous   | iteme | Variable representing the number of contacts made with the <br> customer during previous marketing campaigns before the current campaign. | 


Target Outcome (y): Whether the customer subscribed to the term deposit after being contacted (Yes/No).


| Economic Attributes       | Type     | Description        |
|--------------|----------|-----------------------------------|
| EmpVarRate | item  | Employment variation rate — a measure of employment growth or decline. |
| Euribor3m | item | Three-month Euro Interbank Offered Rate, a benchmark interest rate.
| ConsPriceIdx | item | Consumer Price Index, an indicator of inflation. | 
| ConsConfIdx | item | Consumer Confidence Index — an economic sentiment indicator. | 











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

### Reference

- Moro, R. Laureano and P. Cortez. Using Data Mining for Bank Direct Marketing: An Application of the CRISP-DM Methodology. 
  In P. Novais et al. (Eds.), Proceedings of the European Simulation and Modelling Conference - ESM'2011, pp. 117-121, Guimarães, 
  Portugal, October, 2011. EUROSIS.

- https://archive.ics.uci.edu/dataset/222/bank+marketing



### License

- This dataset is licensed under a Creative Commons Attribution 4.0 International (CC BY 4.0) license. This allows for the sharing and adaptation of the datasets for any purpose, provided that the appropriate credit is given.






