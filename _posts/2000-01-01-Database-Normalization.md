---
title: ' Database Normalization  '
author: ernest
date: 2024-02-10 16:20:02 -05:00
last_modified_at: 2024-11-30
categories: [ Articles ]
pin:     # true
math: true
mermaid: true
published: true
tags:   # or [typography, tag-01, tag-02, etc.]
  - articles
  - normalization
  - database
  - MySQL
  - database-desing
  # - tamplate-tag-2
  # - template-tag-3

image: 
   # path: /assets/sample/coming-soon.png
   # image: /assets/sample/coming-soon.png
   # alt: Expected publishing date

# image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.

---








## What is normalization? 

- Normalization is a series of steps that convert a flat or poorly structured table into multiple related tables, following standard normal forms (1NF to 3NF and beyond).


## Goals of normalization 





| Goal       | Why?      | 
|--------------|----------|
| Eliminate redundancy    | No duplicate data in multiple places      | 
| Ensure data integrity  | One version of the truth    | 
| Improve flexibility  | Easier to update and scale    | 
| Better queries      | Relational design improves join logic  | 









## The normalization in 3 main forms


### 1NF (first normalization form)

- Ensure atomic values (no lists or arrays in one column)

 - Each record has a unique identifier (primary key)



### 2NF (second normalizaiton form)

- Be in 1NF

- Move partial dependencies to other tables



### 3NF (third normalization form)

- Be in 2NF

- Remove transitive dependencies (non-key columns depending on other non-key columns)





## Process 


- Identify repeating groups or redundant data

- Create separate tables for each entity (customer, product, department, etc.)

- Assign primary keys to each new table

- Replace repeated fields with foreign keys

- Update your queries to use JOINs


## When Not to Normalize Fully

- Normalization is great for integrity, but over-normalizing can hurt performance, especially in read-heavy systems like reporting dashboards.

- In some cases, denormalized tables are used for:

- Fast reporting (data warehouses)

- Aggregated tables

- NoSQL systems




### Final Summary 

| Why Normalize?       | When to Normalize    | 
|--------------|----------|-----------------------------------|
| Reduce Redundancy    | During initial database design      | 
| Improve data integrety  | When refactoring legacy systems      | 
| Simplify maintenance  | During optimzation or migration     | 
| Avoid anomalies       | After discovering data issues  | 
| Avoid anomalies       | In preparation for scalability  | 










