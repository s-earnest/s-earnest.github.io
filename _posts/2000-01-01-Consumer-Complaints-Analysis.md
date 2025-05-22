---
title: ' Consumer Complaints Database Analysis '
author: ernest
date: 2024-02-16 16:20:02 -05:00
last_modified_at: 2024-11-30
categories: [ Work ]
pin:     # true
math: true
mermaid: true
published: true
tags:   # or [typography, tag-01, tag-02, etc.]
  
  - database
  # - tamplate-tag-2
  # - template-tag-3
  - SQL
  - MySQL
  - business
  - complaints
  - consumer
  - customer-satisfaction
  - training
  - database 



image: 
  path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  alt: Expected publishing date unknown

---





### Summary 

This dataset serves as a valuable resource for identifying trends, assessing company practices, and informing policy decisions. 
As of February 22, 2025, the database contains a total of 7,867,198 complaints. The dataset is 1,36 GB in size and available for download in CSV format. The dataset spans from December 1, 2011, to the present, with regular updates to include new complaints.



### About the data
Complaints that the CFPB sends to companies for response are published in the Consumer Complaint Database after the company responds, confirming a commercial relationship with the consumer, or after 15 days, whichever comes first.


### Complaint narratives
With their consent and after taking steps to remove sensitive information, we publish consumers’ complaint narratives in their own words. One consumer’s experience is not necessarily representative of all consumers’ experiences and narratives are not verified before publication.





###  Data Dictionnary


| Column Name      | Type data    | Description               |
|--------------|----------|-----------------------------------|
| Date received   | INT   | The date the CFPB received the complaint. <br> For example, "05/25/2013."                       |
| Product  | INT  | The type of product the consumer identified in the complaint. <br> For example, "Checking or savings account" or "Student loan."   |
| Sub-product   | DATE   | The type of sub-product the consumer identified in the complaint. <br> For example, "Checking account" or "Private student loan."   |
| Issue    | DECIMAL  | The issue the consumer identified in the complaint. For example, <br> "Managing an account" or "Struggling to repay your loan."   |
| Sub-issue   | DECIMAL  | The sub-issue the consumer identified in the complaint. <br> For example, "Deposits and withdrawals" or "Problem lowering your monthly payments."     |
| Consumer complaint narrative    | DECIMAL  | Consumer complaint narrative is the consumer-submitted description of "what happened" from the complaint. <br> Consumers must opt-in to share their narrative. We will not publish the narrative unless the consumer consents, <br> and consumers can opt-out at any time. The CFPB takes reasonable steps <br> to scrub personal information from each complaint that could be used to identify the consumer    |
| Company public response   | DECIMAL  | TThe company's optional, public-facing response to a consumer's complaint. <br> Companies can choose to select a response from a pre-set list of options that will be posted on the public database. <br> For example, "Company believes complaint is the result of an isolated error."    |
| Company      | DECIMAL  | The complaint is about this company. For example, "ABC Bank."     |
| State       | DECIMAL  | The state of the mailing address provided by the consumer.        |
| ZIP code     | DECIMAL  | The mailing ZIP code provided by the consumer. <br> This field may: (i) include the first five digits of a ZIP code; (ii) include the first three digits of a ZIP code (if the consumer consented to publication of <br> their complaint narrative); or (iii) be blank (if ZIP codes have been submitted <br> with non-numeric values, if there are less than 20,000 people in a given ZIP code, or <br> if the complaint has an address outside of the United States).  |
| Tags    | DECIMAL  | Data that supports easier searching and sorting of complaints submitted by or on behalf of consumers. <br> For example, complaints where the submitter reports the age of the consumer as 62 years or <br> older are tagged "Older American." Complaints submitted by or on behalf of a servicemember or the spouse or dependent of a <br> servicemember are tagged "Servicemember." <br> Servicemember includes anyone who is active duty, National Guard, or Reservist, as well as anyone who previously served and is a veteran or retiree.    |
| Consumer consent provided?   | DECIMAL  | Identifies whether the consumer opted in to publish their complaint narrative. <br> We do not publish the narrative unless the consumer consents, <br> and consumers can opt-out at any time   |
| Submitted via  | DECIMAL  | How the complaint was submitted to the CFPB. For example, "Web" or "Phone."  |
| Date sent to company   | DECIMAL  | The date the CFPB sent the complaint to the company.  |
| Company response to consumer  | DECIMAL  | This is how the company responded. For example, "Closed with explanation."   |
| Timely response?  | DECIMAL  | Whether the company gave a timely response. For example, "Yes" or "No."  |
| Consumer disputed?  | DECIMAL  | Whether the consumer disputed the company's response.  |
| Complaint ID   | DECIMAL  | The unique identification number for a complaint.  |



### Dataset Description:
The database encompasses a wide array of complaints related to various financial sectors, including debt collection, credit reporting, mortgages, credit cards, and more. Each week we send thousands of consumers' complaints about financial products and services to companies for response. Those complaints are published here after the company responds, confirming a commercial relationship with the consumer, or after 15 days, whichever comes first. Complaint narratives are consumers' descriptions of their experiences in their own words. By adding their voice, consumers help improve the financial marketplace. The database generally updates daily.  Each complaint entry includes details such as the date received, product type, issue, company involved, consumer's narrative (if consented for publication), company response, and the complaint's current status. This dataset serves as a valuable resource for identifying trends, assessing company practices, and informing policy decisions. 
As of February 22, 2025, the database contains a total of 7,867,198 complaints. The dataset is 1,36 GB in size and available for download in CSV format. The dataset spans from December 1, 2011, to the present, with regular updates to include new complaints.













<!-- 



===




SCHEMA 


CREATE TABLE complaints (
    complaint_id       BIGINT AUTO_INCREMENT PRIMARY KEY,
    received_date      DATE NOT NULL,
    product            VARCHAR(255),
    sub_product        VARCHAR(255),
    issue              VARCHAR(255),
    sub_issue          VARCHAR(255),
    company            VARCHAR(255),
    state              CHAR(2),
    zip_code           VARCHAR(10),
    submitted_via      VARCHAR(100),
    date_sent_to_company DATE,
    company_response   VARCHAR(255),
    timely_response    BOOLEAN,
    consumer_disputed  BOOLEAN,
    status             ENUM('Pending', 'In Progress', 'Resolved', 'Closed', 'Duplicate') DEFAULT 'Pending',
    resolved_date      DATE,
    complaint_narrative TEXT,
    tags               VARCHAR(255),
    consumer_consent   VARCHAR(100),
    date_created       TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



==== 

questions 




Absolutely! Here are **20 MySQL questions** tailored for analyzing your **consumer complaints dataset**, focusing on trends, company performance, resolution metrics, geography, and product issues.

---

## 🔍 **A. General Overview & Time Trends**

1. **How many total complaints are in the dataset?**

```sql
SELECT COUNT(*) FROM complaints;
```

2. **What is the time range of the complaints?**

```sql
SELECT MIN(received_date) AS start_date, MAX(received_date) AS end_date FROM complaints;
```

3. **How many complaints are received each year?**

```sql
SELECT YEAR(received_date) AS year, COUNT(*) AS total FROM complaints GROUP BY year ORDER BY year;
```

4. **Which month has the highest number of complaints overall?**

```sql
SELECT DATE_FORMAT(received_date, '%Y-%m') AS month, COUNT(*) AS total
FROM complaints
GROUP BY month
ORDER BY total DESC
LIMIT 1;
```

5. **How many complaints were received in the last 30 days?**

```sql
SELECT COUNT(*) FROM complaints WHERE received_date >= CURDATE() - INTERVAL 30 DAY;
```

---

## 🏢 **B. Company-Level Analysis**

6. **Which companies received the most complaints?**

```sql
SELECT company, COUNT(*) AS total FROM complaints GROUP BY company ORDER BY total DESC LIMIT 10;
```

7. **What are the average resolution times per company?**

```sql
SELECT company, AVG(DATEDIFF(resolved_date, received_date)) AS avg_days
FROM complaints
WHERE resolved_date IS NOT NULL
GROUP BY company
ORDER BY avg_days;
```

8. **What percentage of complaints are marked as ‘Resolved’ per company?**

```sql
SELECT company, 
       ROUND(SUM(status = 'Resolved') / COUNT(*) * 100, 2) AS resolution_rate
FROM complaints
GROUP BY company
ORDER BY resolution_rate DESC;
```

9. **Which companies have the highest consumer dispute rate?**

```sql
SELECT company, 
       ROUND(SUM(consumer_disputed = TRUE) / COUNT(*) * 100, 2) AS dispute_rate
FROM complaints
GROUP BY company
ORDER BY dispute_rate DESC;
```

10. **For each company, what are the most common issues reported?**

```sql
SELECT company, issue, COUNT(*) AS total
FROM complaints
GROUP BY company, issue
ORDER BY company, total DESC;
```

---

## 🌍 **C. Geographic Patterns**

11. **Which states have the highest complaint volume?**

```sql
SELECT state, COUNT(*) AS total FROM complaints GROUP BY state ORDER BY total DESC;
```

12. **What is the complaint volume per ZIP code?**

```sql
SELECT zip_code, COUNT(*) AS total FROM complaints GROUP BY zip_code ORDER BY total DESC LIMIT 10;
```

13. **What are the top issues in a specific state (e.g., 'CA')?**

```sql
SELECT issue, COUNT(*) AS total FROM complaints WHERE state = 'CA' GROUP BY issue ORDER BY total DESC;
```

---

## 📦 **D. Product & Issue Trends**

14. **Which products have the most complaints?**

```sql
SELECT product, COUNT(*) AS total FROM complaints GROUP BY product ORDER BY total DESC;
```

15. **Which sub-products are associated with the most issues?**

```sql
SELECT sub_product, COUNT(*) AS total FROM complaints GROUP BY sub_product ORDER BY total DESC;
```

16. **Which product categories have the highest dispute rate?**

```sql
SELECT product,
       ROUND(SUM(consumer_disputed = TRUE) / COUNT(*) * 100, 2) AS dispute_rate
FROM complaints
GROUP BY product
ORDER BY dispute_rate DESC;
```

---

## 📆 **E. Submission, Response & Status Analysis**

17. **What are the most common submission channels?**

```sql
SELECT submitted_via, COUNT(*) AS total FROM complaints GROUP BY submitted_via ORDER BY total DESC;
```

18. **What is the distribution of complaint statuses?**

```sql
SELECT status, COUNT(*) AS total FROM complaints GROUP BY status;
```

19. **How many complaints were resolved within 7 days?**

```sql
SELECT COUNT(*) FROM complaints
WHERE resolved_date IS NOT NULL AND DATEDIFF(resolved_date, received_date) <= 7;
```

20. **What percentage of complaints received a timely response?**

```sql
SELECT ROUND(SUM(timely_response = TRUE) / COUNT(*) * 100, 2) AS timely_response_rate FROM complaints;
```

---

Would you like a downloadable `.sql` file with these questions or to generate a dashboard layout based on them?




===




Great question! For a dataset containing **consumer complaints** (with millions of rows, spanning from 2011 to 2025), you’ll want MySQL queries that help you extract insights, track trends, identify problematic companies, and monitor complaint resolution. Below is a list of **high-value query types** organized by analysis goals, along with why they’re useful.

---

### 🔍 **1. Data Overview & Integrity**

#### ✅ Total Number of Complaints

```sql
SELECT COUNT(*) AS total_complaints FROM complaints;
```

#### ✅ Complaints Over Time

```sql
SELECT YEAR(received_date) AS year, COUNT(*) AS complaints_count
FROM complaints
GROUP BY year
ORDER BY year;
```

#### ✅ Range of Complaint Dates

```sql
SELECT MIN(received_date) AS earliest, MAX(received_date) AS latest FROM complaints;
```

---

### 📊 **2. Trend Analysis**

#### ✅ Monthly Complaint Volume

```sql
SELECT DATE_FORMAT(received_date, '%Y-%m') AS month, COUNT(*) AS complaints
FROM complaints
GROUP BY month
ORDER BY month;
```

#### ✅ Year-over-Year Growth

```sql
SELECT YEAR(received_date) AS year,
       COUNT(*) AS complaints,
       LAG(COUNT(*)) OVER (ORDER BY YEAR(received_date)) AS prev_year,
       ROUND((COUNT(*) - LAG(COUNT(*)) OVER (ORDER BY YEAR(received_date))) / 
              LAG(COUNT(*)) OVER (ORDER BY YEAR(received_date)) * 100, 2) AS percent_change
FROM complaints
GROUP BY year;
```

---

### 🏢 **3. Company Performance**

#### ✅ Most Complained-About Companies

```sql
SELECT company, COUNT(*) AS total_complaints
FROM complaints
GROUP BY company
ORDER BY total_complaints DESC
LIMIT 10;
```

#### ✅ Complaints per Company per Year

```sql
SELECT company, YEAR(received_date) AS year, COUNT(*) AS complaints
FROM complaints
GROUP BY company, year
ORDER BY company, year;
```

---

### ⚖️ **4. Resolution & Status Analysis**

#### ✅ Complaint Status Distribution

```sql
SELECT status, COUNT(*) AS count
FROM complaints
GROUP BY status;
```

#### ✅ Resolution Rate per Company

```sql
SELECT company,
       SUM(status = 'Resolved') / COUNT(*) * 100 AS resolution_rate
FROM complaints
GROUP BY company
ORDER BY resolution_rate DESC;
```

---

### 🌍 **5. Geographic Insights**

#### ✅ Complaints by State or Region

```sql
SELECT state, COUNT(*) AS complaints
FROM complaints
GROUP BY state
ORDER BY complaints DESC;
```

---

### 🔎 **6. Keyword or Category Insights**

#### ✅ Most Common Issues or Complaint Topics

```sql
SELECT issue, COUNT(*) AS frequency
FROM complaints
GROUP BY issue
ORDER BY frequency DESC
LIMIT 10;
```

---

### 📈 **7. Time to Resolve (if timestamps available)**

#### ✅ Average Resolution Time

```sql
SELECT AVG(DATEDIFF(resolved_date, received_date)) AS avg_days_to_resolve
FROM complaints
WHERE resolved_date IS NOT NULL;
```

---

### ⚙️ **Indexing Recommendations for Performance:**

If the dataset is large (\~8M rows), add indexes on frequently queried columns:

```sql
CREATE INDEX idx_received_date ON complaints(received_date);
CREATE INDEX idx_company ON complaints(company);
CREATE INDEX idx_status ON complaints(status);
CREATE INDEX idx_state ON complaints(state);
```

---

Would you like help writing a data model (schema) or a sample dashboard query set (for BI tools like Metabase or Power BI)?











===




Certainly! Here's a concise **MySQL-focused summary** based on the dataset description:

---

### **MySQL Dataset Summary**

This dataset provides a comprehensive record of consumer complaints, useful for trend analysis, company performance evaluation, and policy development. As of **February 22, 2025**, the database contains approximately **7.87 million records**, covering the period from **December 1, 2011**, to the present. The dataset is updated regularly and is available in **CSV format**, with a file size of **1.36 GB**.

In a MySQL environment, this dataset can be imported for efficient querying, filtering by date ranges, company names, complaint types, and other dimensions. Proper indexing, partitioning (e.g., by year or month), and normalization can greatly enhance performance and storage efficiency when analyzing this volume of data.








**Notes:**
- Orders only include completed purchases (not abandoned carts).
- Use `order_date` for time-based reporting.








```sql
/* Question 1
movenmoviesmini schema. 
What do we notice about it? How many table are there? What does the data represent? What do we think about the current schema?



*/











About the database
What’s published and when
98% of complaints sent to companies get timely responses

Only complaints sent to companies for response are eligible to be published and are only published after the company responds, confirming a commercial relationship or after 15 days, whichever comes first. The database generally updates daily.

We do not publish complaints referred to other regulators, such as complaints about depository institutions with less than $10 billion in assets.

We publish the consumer’s narrative description from their complaint if the consumer opts to share it publicly and after the Bureau takes steps to remove personal information.

This database is not a statistical sample of consumers’ experiences in the marketplace and these complaints are not necessarily representative of all consumers’ experiences with a financial product or company. Complaints are not “information” for purposes of the Information Quality Act.

See publication criteria 
More about the data we publish
Understanding complaint volume
The lack of complaints or a relatively low number of complaints published in the database about a product, issue, or company does not necessarily mean there is little or no consumer harm. Depending on the nature of the financial product and how consumers use the product, consumers may be harmed in ways that do not cause them to complain to the Bureau or to blame the product or provider for the harm they have suffered.

When looking at complaint volume about a company or product, consider company size and/or market share. For example, companies with more customers may have more complaints than companies with fewer customers.

When looking at complaint volume for a state or ZIP code, consider the population in that geography.

We encourage you to pair complaint data with public and private data sets for additional context.

Learn about past changes to the database
Viewing trends
Recent complaint data and trends will not yet include all complaints eligible for publication to allow companies 15 days to respond.

View trends
Reading complaints
Complaint narratives are consumers’ descriptions of their experiences in their own words. Consider what conclusions may be fairly drawn from reading consumers’ descriptions of their experiences. We do not adopt their views or verify that their experiences are accurate or unbiased.

Recent complaint data will not include all complaint narratives eligible for publication until we have completed our steps to remove personal information from each consumer narrative.

Read complaints
How we use complaint data
Complaints can give us insights into problems people are experiencing in the marketplace and help us regulate consumer financial products and services under existing federal consumer financial laws, enforce those laws judiciously, and educate and empower consumers to make informed financial decisions.

More on how we use complaint data
Read Annual Report to Congress
Find other analyses of complaints
Get the data
Downloading the data
You can download all complaint data as either a CSV or JSON file here, or you can download a subset of the data—such as all complaints for a specific product—by filtering the full data set and exporting your results.

Filter the full data set before you download
Download all complaint data | CSV 
Download all complaint data | JSON 
See database field reference 
See past database releases 
Using our API
Looking to export our data and have more control over it? Use our Open Data API.

For instructions and examples, refer to our API documentation 
What is this data? 
Past product and issue changes
When we make changes to products, sub-products, issues, and sub-issues we provide detailed information here. Most changes are updates to the organization of products and issues or wording changes to make the issues easier for consumers to understand.

The Consumer Complaint Database shows the consumer's original products, sub-products, issues, and sub-issues selections consistent with the options available on the form at the time the consumer submitted the complaint.

Below are a collection of updates by year, including full lists of complaint form products, sub-products, issues, and sub-issues.













# Reference
- [ Database documentation ]( https://dev.mysql.com/doc/sakila/en/sakila-installation.html ){:target="_blank"}

- [ Consumer Finance ]( https://www.consumerfinance.gov/complaint/ ){:target="_blank"}

- [ Database documentation ]( https://www.consumerfinance.gov/data-research/consumer-complaints/#download-the-data ){:target="_blank"}





# Footnote

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




> DISCLAIMER
- The information contained in this report/article/note is meant for the purposes of information only and is not intended to be investment, legal, tax or other advice, nor is it intended to be relied upon in making an investment or other decision. This report is provided with the understanding that the authors and publishers are not providing advice on legal, economic, investment or other professional issues and services. 
- I am not responsible for the content of websites and information resources that may be referenced in the report. The access provided to these sites or the provision of such information resources does not constitute an endorsement by myself. of the information contained therein. However, unless expressly stated otherwise, the opinions, recommendations, findings, interpretations and conclusions expressed in this report represent the views of myself. 
- The inclusion of company examples does not in any way constitute an endorsement of these organisations by myself or the signatories to the Principles for Responsible Investment. While I have endeavoured to ensure that the information contained in this report has been obtained from reliable and up-to-date sources, the changing nature of statistics, laws, rules and regulations may result in delays, omissions or inaccuracies in information contained in this report. I am not responsible for any errors or omissions, or for any decision made or action taken based on information contained in this report, or for any loss or damage arising from or caused by such decision or action. All information in this report is provided “as-is”, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, expressed or implied.
{: .prompt-info }


# Introduction 
  Business task
  Problem statement


# Data Source
   Describe where the datasets were downloaded from.
    Link the sites for the datasets if possible.
    Indicate if the data is from a public or a private license and if it is trusted.
    Describe the datasets, the columns, and what each dataset summarizes if there are more than one.


# Outline
  Every project seeks to answer a question effectively. 
    introduction
    related work
    methods
    experimental setup


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


### Contact. 

Have a question? Feel free to send an [email](mailto:s.ernest@gmx.us) or if you prefer a virtual [meeting]( https://calendly.com/s-earnest/30min ){:target="_blank"}


-->




