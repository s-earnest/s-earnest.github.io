---
title: ' Database Administration Design '
author: ernest
date: 2023-02-16 16:20:02 -05:00
last_modified_at: 2024-11-30
categories: [ Notes ]
pin:     # true
math: true
mermaid: true
published: true
tags:   # or [typography, tag-01, tag-02, etc.]
  - database-design
  - database
  # - tamplate-tag-2
  # - template-tag-3
  - SQL
  - MySQL
  - optimization
  - notes
  - planning
  - data-integrity
  - normalization
  - performance



image: /assets/sample/coming-soon.png



# image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.

---



## Purpose

Effective database design is crucial for building reliable, efficient, and scalable data systems. It involves steps like requirements analysis, conceptual and logical modeling, normalization, physical implementation, and ongoing maintenance. A well-designed database ensures data integrity, reduces redundancy, and optimizes performance. It also supports security, scalability, and ease of maintenance. By following structured design principles—such as using ER diagrams, enforcing constraints, and planning for future growth—organizations can prevent data anomalies, improve query efficiency, and make better business decisions. Ultimately, good database design is foundational to the success of any data-driven application or system.










<!-- 





Certainly! Below is a detailed explanation of **database design steps**, why each step matters, and **why good database design is important**, totaling approximately 700 words.

---

## **Database Design: Steps with Details & Importance**

Designing a database is a fundamental task in the development of any data-driven application. A well-designed database ensures data is stored efficiently, relationships are logical, performance is optimized, and data integrity is maintained. Below are the essential steps involved in designing a database and why each step is crucial.

---

### **1. Requirements Analysis**

**What It Involves:**

* Gathering detailed information from stakeholders.
* Understanding what data needs to be stored.
* Identifying use cases, reports, transactions, and future scalability.

**Why It's Important:**
Without a clear understanding of what the database should support, you risk building a structure that doesn't meet business needs. Good requirements analysis helps avoid costly redesigns and ensures the database aligns with organizational goals.

---

### **2. Conceptual Design (ER Modeling)**

**What It Involves:**

* Creating an **Entity-Relationship (ER) diagram** to visually map entities, attributes, and relationships.
* Identifying entities (e.g., Customer, Booking, Flight) and how they relate.

**Why It's Important:**
This step creates a visual blueprint that clarifies what data will be stored and how it's interconnected. It helps detect errors and inconsistencies early and serves as a communication tool between developers and non-technical stakeholders.

---

### **3. Logical Design (Schema Definition)**

**What It Involves:**

* Converting the ER diagram into a **relational schema**.
* Defining tables, columns, data types, keys (primary/foreign), and constraints.

**Why It's Important:**
Logical design ensures data is structured according to rules that support normalization (i.e., removing redundancy). It defines how the data will be stored in a database engine such as MySQL, ensuring consistency and enforceable integrity rules.

---

### **4. Normalization**

**What It Involves:**

* Applying normalization rules (1NF, 2NF, 3NF, etc.) to eliminate redundancy.
* Ensuring atomicity of data, proper dependency, and reduced data duplication.

**Why It's Important:**
Normalization reduces the risk of data anomalies (update, insert, and delete anomalies) and makes the database easier to maintain. It also saves storage space and improves query performance.

---

### **5. Physical Design**

**What It Involves:**

* Implementing the schema in the actual database system (e.g., MySQL).
* Choosing indexes, partitioning strategies, and storage engines.
* Optimizing queries and database access paths.

**Why It's Important:**
Efficient physical design improves system performance, especially as the data volume grows. Indexes and query tuning reduce load time and improve responsiveness for users and applications.

---

### **6. Data Integrity & Constraints**

**What It Involves:**

* Defining **constraints** (e.g., NOT NULL, UNIQUE, CHECK).
* Implementing **referential integrity** using foreign keys.

**Why It's Important:**
Enforcing constraints ensures the accuracy and consistency of data. For example, you cannot have a booking for a flight that doesn’t exist. Constraints prevent invalid or orphaned records, maintaining data quality.

---

### **7. Security Design**

**What It Involves:**

* Defining user roles and permissions.
* Encrypting sensitive data (e.g., user info, payment details).
* Implementing access control mechanisms.

**Why It's Important:**
A secure design protects against unauthorized access and data breaches. Data privacy laws (like GDPR) make security a legal requirement. Proper roles also prevent accidental data corruption.

---

### **8. Testing & Validation**

**What It Involves:**

* Populating the database with sample data.
* Running test queries and transactions.
* Checking for data integrity, performance issues, and scalability.

**Why It's Important:**
Testing helps catch issues before the database goes live. It ensures the design meets functional requirements, supports expected workloads, and handles edge cases correctly.

---

### **9. Documentation**

**What It Involves:**

* Creating technical documentation for schema, relationships, business rules, and constraints.

**Why It's Important:**
Good documentation aids in onboarding new developers, database administration, and troubleshooting. It also ensures that the system can be audited and maintained long-term.

---

### **10. Maintenance and Evolution**

**What It Involves:**

* Regular updates to schema based on new business requirements.
* Performance tuning and data archiving as the system scales.

**Why It's Important:**
Databases are not static. As the business grows, new requirements arise. A flexible and well-maintained design makes it easier to adapt to changes without disrupting operations.

---

## **Why Good Database Design Is Critical**

1. **Performance Optimization:** Poorly designed databases often result in slow queries and inefficient use of hardware resources.

2. **Data Integrity:** Proper constraints and relationships ensure that data remains accurate and trustworthy.

3. **Scalability:** A good design can handle increasing amounts of data without major redesigns.

4. **Maintainability:** Well-structured databases are easier to troubleshoot, update, and document.

5. **Security:** A thoughtful design limits data exposure and supports role-based access control.

6. **Cost Efficiency:** Efficient storage and querying reduce the need for costly infrastructure upgrades.

---

In summary, investing time and effort in proper database design is essential for building robust, scalable, and secure applications. It ensures that data serves as a reliable asset rather than a liability in your information systems.








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

Have a question? Feel free to send an [email](mailto:s.ernest@gmx.us) or if you prefer a virtual [meeting]( https://calendly.com/s-earnest/15min ){:target="_blank"}






NOTES

Advanced SQL for Query Tuning and Performance Optimization course. SQL HERE


- Now you might think, "Well, we just organize our data." So, for example, if we have a large number of chunks of data, which we call partitions, and we're going to be discussing that shortly, we might organize our chunks of data or our partitions in a certain way. Like, we might have a column and the column might have an integer value. And so anything with a column value of between one and 10 we put in one block, and 11 to 20 we put in another block, and so on. And that way if we know the value of the column, we can pretty quickly determine which block we should go retrieve. And that works really well. That actually is a great strategy in many cases. However, the constraint on using that is that strategy only works well when your lookup criteria is the same as your sort of organizing principle that you used for ordering the partitions. When you're looking for something or using some criteria that's different than your organizing principle for the data blocks and the partitions, then it doesn't really help so much. So, for example, we might arrange our data volumes by a particular kind of code, but we might want to look up by several different codes, but of different types of codes. So, in that case, a different strategy that works well is something called a bloom filter.
- Now a bloom filter is basically a way of filtering out, in this case, like blocks or rows, that definitely don't meet our criteria, but the bloom filter might return some results that actually don't meet our filter criteria, but somehow they kind of slip past that check. And so what a bloom filter does is it allows us to trade off things like keeping a large number of indexes and storing a large amount of data. So we trade that for a more probabilistic approach in which we get the results back and we can know for sure that the data we're looking for is in our results, but then we may also have some extra stuff that actually didn't quite fit the filter, and that is a trade-off. And the question is, is that a good trade-off for you to make from an indexing strategy perspective? Well, it depends. And it depends because a bloom filter index is probabilistic, which means it's not deterministic, we might get some results that aren't actually fitting our filter criteria. But it's really space efficient, highly space efficient. And the reason it is so space efficient is that we lose information. It's a lossy representation, unlike, say, a B-tree index where we don't lose information. So we're losing a little bit of information, but we're saving a lot on storage space. And because of this, when we get results back we may have some false positives. So if we can quickly filter through those false positives afterwards, then it may be useful to use a bloom filter.






(1) Udemy - MySQL Database Administration Beginner SQL Database Design
(2) 






-->











### Summary


This is a sample blog post. Lorem ipsum I can't remember the rest[^1] of lorem ipsum and don't have an internet connection right now. 









## Methodoloy
**Description:** Stores all completed customer transactions.

| Description       |  Type of tasks     |  Purpose     |
|--------------|----------|-----------------------------------|
| order_id     | INT      | Primary                      |
| customer_id  | INT      | FK                  |
| order_date   | DATE     | Date            |
| amount       | DECIMAL  | Total              |


**Notes:**
- reason = my own decision based on business acumen
- Use `order_date` item











```sql
/* Question 1
movenmoviesmini schema. 
What do we notice about it? How many table are there? What does the data represent? What do we think about the current schema?



*/











/* Question 2
If we wanted to break out the data from the inventory_non_normalized table into multiple tables, how many table do we think 
would be ideal? What would we name thise tables?



*/







/* Question 3
Based on our answer from question 2, create a new schema with the tables we think will best serve this data set. 
We cna use SQL code or workbench UI tools (whichever we feel more comfortable with).



*/




/* Question 4

- Next, use the data from the original schema to populate the tables is newly optimized schema

*/

- Q4
	
NEXT INTO inventory (inventory_id, film_id, sotre_id)
SELECT DISTINCT inventory_id, file_id, store_id
FROM mavenmoviesmini.inventory_non_normalized
SELECT * FROM inventory;

INSERT INTO film (file_id, title, description, release_year, rental_rate, rating)
SELECT DISTINCT file_id, title, description, release_year, rental_rate, rating
FROM mavenmoviesmini. inventory_non_normalized
SELECT * FROM film;

INSERT INTO store (store_id, manager_first_name)
SELECT DISTINCT inventory_id, file_id, store_id
FROM mavenmoviesmini.inventory_non_normalized



/* Question 5

Make sure our new table have the proper primary keys defined and that applicable foreign keys are added. 
Add any contratints we thing should apply to the data as well (unique, non-NULL, etc>)





*/





/* Question 6

Finally, after doing all of this technical work, write a brief summary of what we have done, in a way that your 
non-technical client can understand. Communicate what we did, and why our new schem design is better.



*/





```

























## Reference
- [ Database documentation ]( https://dev.mysql.com/doc/sakila/en/sakila-installation.html ){:target="_blank"}




## Footnote

[^1]: The footnote source


