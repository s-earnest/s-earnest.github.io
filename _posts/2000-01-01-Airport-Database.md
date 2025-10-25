---
title: ' Airport Database  '
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
  # reference J7X9V2M8K1TQ

---

20251025 082533
20251025 082743 


# Business 

Flight delays have become an increasingly frequent issue for many airlines, and our company is no exception. Several factors contribute to these delays, with weather conditions often being the most unpredictable and disruptive. Heavy rainfall, thunderstorms, and fog can significantly impact visibility, leading to delays in both takeoff and landing. Another major contributor is air traffic congestion, particularly during peak travel times, which leads to longer waiting times on the tarmac. Additionally, technical issues, such as mechanical malfunctions or the need for aircraft maintenance, can cause last-minute delays, sometimes requiring parts or repairs that weren’t initially anticipated.

Crew scheduling conflicts, though less common, also play a role in delaying flights. A shortage of available crew members due to last-minute illnesses or other operational hiccups can delay or even cancel a flight, leaving passengers frustrated. In response to these challenges, our company has implemented a compensation policy to mitigate passenger dissatisfaction. Affected passengers are offered various forms of compensation, ranging from meal vouchers and hotel accommodations for overnight delays, to partial refunds or free future flights. By addressing the root causes of delays and offering thoughtful compensation, we strive to maintain customer trust and satisfaction, ensuring that passengers feel valued even during these unfortunate disruptions.




# Approach 

- The initial step involves performing data cleaning on the dataset. Surprisingly, there are no duplicated transaction records in the dataset. The next step is to split the transaction_date column into Month, Day of Week, and Hour. Additionally, I separated the product_detail column into item and size. This helps reducing data redundancy.
- For the KPIs. I chose to display the total sales, total transaction, and the number of coffees sold, along with their corresponding charts illustrating monthly trends from January to June 2023
- To represent the sales breakdown by the hour of the day and by days of the week, I used bar chart to track sales, highlighting the peak sales period with a darker color.
- For the heatmap, I created a separate worksheet to allow uniform resizing of columns and rows into narrower squares. By utilizing SUMIFS, conditional formatting, and number format customization, I successfully built a heatmap for the sales breakdown across both hours and days of the week. (note that heatmap chart is not available in Google Sheet)
- To compare categories, I used a horizontal bar chart and arranged the categories in descending order. Once again, the bar/category with the highest quantity sold has been colored in a darker tone.
- For displaying items within the selected category, I opted for the QUERY function instead of Pivot Tables. This function is more flexible and performs better with the dynamic drop-down list. With just one formula, I can retrieve three pieces of information items. Quantity, and Sales for the selected category


In investigating flight delays, the primary goal is to identify patterns and factors contributing to delays, such as the relationship between the source and destination airports, aircraft models, and personnel involved in the flight. By analyzing the **flights** table, we can calculate the delay for each flight by comparing the scheduled departure and actual arrival times. Key insights can be drawn by examining delays from specific airports like **LAX**, or looking at average delays across different sources and destinations. Additionally, correlating delays with **pilot performance** can offer a deeper understanding, especially when considering **pilot certifications** and whether certain pilots or airplane models tend to experience more frequent delays. Further investigation could explore the **employee** table to evaluate if specific pilots or traffic controllers are associated with delayed flights, or whether certain airplane models registered in the **airplane** table are linked to recurrent delays. Additionally, it may be insightful to track delays over time, identifying trends or seasons when delays tend to peak. By creating a comprehensive analysis of these variables, we can pinpoint factors that significantly contribute to flight delays, offering actionable insights for operational improvements.


# Methodology 

- step 1 Understanding the airport database schema
Based on the AirportDB schema, here are the key tables you might be working with:

1. **airports**: Information about the airports (ID, name, location, etc.)
2. **flights**: Information about flights (flight number, source, destination, departure/arrival times, etc.)
3. **airplanes**: Information about airplanes (model, capacity, weight, etc.)
4. **employees**: Data on airport staff (SSN, name, job title, salary, etc.)
5. **passenger\_tickets**: Information about tickets purchased by passengers (ticket ID, customer ID, flight number, date, etc.)
6. **airlines**: Airlines information (airline ID, name, etc.)
7. **maintenance\_logs**: Logs for airplane maintenance.

- step 2 Basic data overview EDA

I am looking for the general structure of the tables, ensuring that each table is populated correctly and checking for any anomalies in the dataset.

```sql
-- Get table structure for airports
DESCRIBE airports;

-- Get table structure for flights
DESCRIBE flights;

-- Get table structure for airplanes
DESCRIBE airplanes;

-- Get table structure for employees
DESCRIBE employees;

-- Get table structure for passenger_tickets
DESCRIBE passenger_tickets;
```


2. **Check Basic Descriptive Statistics (Counts, Nulls, and Duplicates)**

For the **airports** table, we would first check how many rows exist and how many distinct values we have for key columns (e.g., airport names, locations).

```sql
-- Count of rows in airports table
SELECT COUNT(*) FROM airports;

-- Check for distinct airport names and locations
SELECT COUNT(DISTINCT airport_name), COUNT(DISTINCT location) FROM airports;

-- Check for missing values (nulls) in airports table
SELECT COUNT(*) FROM airports WHERE airport_name IS NULL OR location IS NULL;
```

Similarly, you can perform the same checks for the **flights**, **airplanes**, **employees**, and **passenger\_tickets** tables.

```sql
-- Count of rows in flights table
SELECT COUNT(*) FROM flights;

-- Check for distinct flight numbers and source-destination combinations
SELECT COUNT(DISTINCT flight_number), COUNT(DISTINCT source, destination) FROM flights;

-- Check for missing values (nulls) in flights table
SELECT COUNT(*) FROM flights WHERE flight_number IS NULL OR departure_time IS NULL OR arrival_time IS NULL;
```

I repeated this step for the other tables as well.



- Step 3 identify outliers and extreme values (descriptive stats


It’s crucial step to identify any extreme values or outliers in columns like **flight duration**, **airplane capacity**, **employee salary**, etc. This gives me insights into whether there are any data entry errors or unusual patterns.

For example, get summary statistics for flight durations and employee salaries:

```sql
-- Summary statistics for flight duration (e.g., difference between departure and arrival)
SELECT 
    MIN(DATEDIFF(arrival_time, departure_time)) AS min_duration,
    MAX(DATEDIFF(arrival_time, departure_time)) AS max_duration,
    AVG(DATEDIFF(arrival_time, departure_time)) AS avg_duration,
    STDDEV(DATEDIFF(arrival_time, departure_time)) AS stddev_duration
FROM flights;

-- Summary statistics for employee salaries
SELECT 
    MIN(salary) AS min_salary,
    MAX(salary) AS max_salary,
    AVG(salary) AS avg_salary,
    STDDEV(salary) AS stddev_salary
FROM employees;
```


- step 4 check the distribution of key variable

For variables like **flight delay times**, **employee salaries**, and **airplane capacity**, it's important to visualize the distribution to understand the range of values. In SQL, you can get counts for different ranges:

```sql
-- Distribution of flight delays (e.g., delay in minutes)
SELECT 
    CASE 
        WHEN DATEDIFF(arrival_time, departure_time) < 30 THEN '0-30'
        WHEN DATEDIFF(arrival_time, departure_time) BETWEEN 30 AND 60 THEN '30-60'
        ELSE '60+'
    END AS delay_range, 
    COUNT(*) 
FROM flights
GROUP BY delay_range;
```

For other variables like employee salaries or airplane capacity, you can adjust the ranges accordingly.


- step 3 visualizing the data





- step 4 general insights from descriptive analysis










)



# Key findings



# Recommendations





### Data dictionary


| Column Name    |  Description           |
|--------------|----------|-----------------------------------|
| airplane    | Stores airplane info	id, model, manufacturer, seats	id: Unique identifier for airplane      | 
| employee  | Staff details	id, name, role, hire_date, salary	role: Employee role, e.g., pilot, attendant      | 
| test   | Stores test records	id, test_type, test_date, result	test_type: Nature of test (safety, skills)     | 
| test_log       | Log of tests performed	id, test_id, employee_id, timestamp	test_id: Refers to an entry in test table  | 
| ticket_purchase     | Ticket sales	id, customer_id, flight_id, purchase_dt	purchase_dt: Date and time of ticket purchase  | 
| flights    | Flight schedules/info	id, airplone_id, departure, arrival	departure: Scheduled departure datetime  | 








# Airport Database


1. A create.sql file that creates all of your tables. A minimal example file is provided for you. Make sure all possible constraints from the ER diagram are reflected into table definitions.

2. A data insert.py file that inserts values from CSV files into your tables. 

3. A single SQL file for each of the following queries. Name them a.sql, b.sql... etc. 

  - (a). Get the flight number, arrival time, and departure time of all flights flying either from, or to, LAX. (flight no, arrival, departure)

```sql
  SELECT flight_no AS flight_no, arrival, depart AS departure FROM airport.Flight 
WHERE src = "LAX" OR dest = "LAX"; 
```

  
  - (1). Find the average salary of the pilots. (avg salary)
  
  ```sql
  SELECT 
    AVG(salary) AS avg_salary
FROM 
    employee
WHERE 
    job_title = 'Pilot';
```


  - (2). Get the SSN, union number, and exam date, for all traffic controllers. (ssn, union no, exam date)

```sql
SELECT 
    ssn, 
    union_no, 
    exam_date
FROM 
    employee
WHERE 
    job_title = 'Traffic Controller';
```


  - (3). Get the FAA number, test name, and max score, of all tests that have a ’Refuel’ stage. (faa no, name, max score)

 ```sql 
SELECT 
    faa_no, 
    test_name, 
    max_score
FROM 
    test
WHERE 
    stages LIKE '%Refuel%';
```


  - (4). Get the FAA number, test name, and date of all the testing events that scored the max score. (faa no, name, date)

```sql  
SELECT 
    tl.faa_no, 
    tl.test_name, 
    tl.date
FROM 
    test_log tl
JOIN 
    test t ON tl.faa_no = t.faa_no AND tl.test_name = t.test_name
WHERE 
    tl.score = t.max_score;
```



  - (5). Get the names of pilots certified to fly every airplane model. (name)
  


  - (6). Get the average number of airplane models that pilots are certified to fly. (aver- age )
  


  - (7). For all pilots with a salary of over $100,000, get their name and how many models they are certified to fly. (name, num certified)
  


  - (8). Give the pilots in (f) a 10% raise. Then output their names and their new salary. (name, salary)
  


  - (9). Delete all flights from Santa Barbara to Chicago. Then output all the flight number, source, and destination of the remaining flights. (flight no, source, destination )
  


  - (10). Get the technician name, technician phone number, test name, and airplane registration number, for which a technician scored less than half the max score on a testing event. (name, phone, test name, reg no)
  


  - (11). Get the name, address, and phone number of the technician with the highest salary who is an expert at ’Boeing’ models. Assume an airplane’s model number always starts with the manufacturer name, i.e. ’Boeing-747’, ’Airbus-A300’. (name, address, phone)
  


  - (12). To better understand flight delays, you want to see how long a technician actually spends on a test compared to the expected completion time. To do that, you want to calculate the average deviation of completion time for each technician, on each test. The deviation is the ’expected completion time’ of a test minus the time it actually took to complete the test. For each technician, get the FAA test number and average deviation for every test they conducted. (name, faa no, avg deviation)
  
(1) how long a technician spends on a test compared to the expected completion time.
(2) calculate the avg deviation of completion time for each technician on each test
(3) DEVIATION  is the expected completion time of a test minus the time it actually took to complete the test
(4) for each technician, get the FAA test number and average deviation for every test they conducted.






# Reference 













<!-- 




To begin the process of **Exploratory Data Analysis (EDA)** and **descriptive analysis** for the **AirportDB schema**, we will focus on extracting key insights and providing an overview of the data. Given the large dataset, it's important to approach this step by step, starting with high-level descriptive statistics and working down to specific insights.

### **Step 1: Understanding the AirportDB Schema**

Based on the AirportDB schema, here are the key tables you might be working with (assuming they are in line with typical airport databases):

1. **airports**: Information about the airports (ID, name, location, etc.)
2. **flights**: Information about flights (flight number, source, destination, departure/arrival times, etc.)
3. **airplanes**: Information about airplanes (model, capacity, weight, etc.)
4. **employees**: Data on airport staff (SSN, name, job title, salary, etc.)
5. **passenger\_tickets**: Information about tickets purchased by passengers (ticket ID, customer ID, flight number, date, etc.)
6. **airlines**: Airlines information (airline ID, name, etc.)
7. **maintenance\_logs**: Logs for airplane maintenance.

Given that you’ve already worked with a subset of the data (3.45 million rows from the original 50 million), we will keep that in mind as we design the queries.

### **Step 2: Basic Data Overview (EDA)**

#### 1. **Check the Structure of Key Tables**

We’ll start by looking at the general structure of the tables, ensuring that each table is populated correctly and checking for any anomalies in the dataset.

```sql
-- Get table structure for airports
DESCRIBE airports;

-- Get table structure for flights
DESCRIBE flights;

-- Get table structure for airplanes
DESCRIBE airplanes;

-- Get table structure for employees
DESCRIBE employees;

-- Get table structure for passenger_tickets
DESCRIBE passenger_tickets;
```

#### 2. **Check Basic Descriptive Statistics (Counts, Nulls, and Duplicates)**

For the **airports** table, we would first check how many rows exist and how many distinct values we have for key columns (e.g., airport names, locations).

```sql
-- Count of rows in airports table
SELECT COUNT(*) FROM airports;

-- Check for distinct airport names and locations
SELECT COUNT(DISTINCT airport_name), COUNT(DISTINCT location) FROM airports;

-- Check for missing values (nulls) in airports table
SELECT COUNT(*) FROM airports WHERE airport_name IS NULL OR location IS NULL;
```

Similarly, you can perform the same checks for the **flights**, **airplanes**, **employees**, and **passenger\_tickets** tables.

```sql
-- Count of rows in flights table
SELECT COUNT(*) FROM flights;

-- Check for distinct flight numbers and source-destination combinations
SELECT COUNT(DISTINCT flight_number), COUNT(DISTINCT source, destination) FROM flights;

-- Check for missing values (nulls) in flights table
SELECT COUNT(*) FROM flights WHERE flight_number IS NULL OR departure_time IS NULL OR arrival_time IS NULL;
```

Repeat this step for the other tables as well.

#### 3. **Identify Outliers and Extreme Values (Descriptive Stats)**

It’s crucial to identify any extreme values or outliers in columns like **flight duration**, **airplane capacity**, **employee salary**, etc. This gives us insights into whether there are any data entry errors or unusual patterns.

For example, you could get summary statistics for flight durations and employee salaries:

```sql
-- Summary statistics for flight duration (e.g., difference between departure and arrival)
SELECT 
    MIN(DATEDIFF(arrival_time, departure_time)) AS min_duration,
    MAX(DATEDIFF(arrival_time, departure_time)) AS max_duration,
    AVG(DATEDIFF(arrival_time, departure_time)) AS avg_duration,
    STDDEV(DATEDIFF(arrival_time, departure_time)) AS stddev_duration
FROM flights;

-- Summary statistics for employee salaries
SELECT 
    MIN(salary) AS min_salary,
    MAX(salary) AS max_salary,
    AVG(salary) AS avg_salary,
    STDDEV(salary) AS stddev_salary
FROM employees;
```

#### 4. **Check the Distribution of Key Variables**

For variables like **flight delay times**, **employee salaries**, and **airplane capacity**, it's important to visualize the distribution to understand the range of values. In SQL, you can get counts for different ranges:

```sql
-- Distribution of flight delays (e.g., delay in minutes)
SELECT 
    CASE 
        WHEN DATEDIFF(arrival_time, departure_time) < 30 THEN '0-30'
        WHEN DATEDIFF(arrival_time, departure_time) BETWEEN 30 AND 60 THEN '30-60'
        ELSE '60+'
    END AS delay_range, 
    COUNT(*) 
FROM flights
GROUP BY delay_range;
```

For other variables like employee salaries or airplane capacity, you can adjust the ranges accordingly.

---

### **Step 3: Visualizing the Data (if needed)**

While SQL alone won’t provide advanced visualizations, you can export the results of your queries and use tools like **Python (matplotlib, seaborn)** or **Excel** to create visualizations (e.g., histograms, bar charts, box plots) to further understand the distribution and relationships between variables.

For example, if you have flight data showing delays, you could plot a **histogram** of the delays to understand how often flights are delayed and by how much.

---

### **Step 4: General Insights from Descriptive Analysis**

Here are some useful **general insights** we can derive from the **EDA** and **descriptive statistics**:

1. **Flight Delays**: Are there patterns in delays (e.g., delays longer than 60 minutes? Are some airlines more prone to delays?).
2. **Airplane Utilization**: How often are airplanes being used? Are some models more frequently used than others?
3. **Employee Salaries**: What is the salary distribution for employees (e.g., pilots vs. ground staff)?
4. **Passenger Load**: What is the average capacity utilization for flights? Are there flights consistently under-filled?
5. **Airports**: Which airports have the most flights or passengers? Are some airports hubs for specific airlines?

---

### **Step 5: Additional Analytical Questions (Moving Beyond EDA)**

Once you have the EDA and descriptive analysis complete, you can start formulating deeper analytical questions, such as:

1. **What factors contribute to flight delays (airline, airport, time of day, etc.)?**
2. **Which employees (based on job title or location) have the highest or lowest average salary?**
3. **How do flight delays vary across different airports or airlines?**
4. **How do airplane models perform in terms of on-time departure and arrival?**
5. **Which airlines are consistently more efficient in terms of departure/arrival times?**
6. **What is the average load factor (passenger count to capacity ratio) for each flight?**
7. **Which routes have the highest frequency of flights?**
8. **How are employee roles and salaries distributed across departments (e.g., pilots, ground crew)?**

---

### **Step 6: Next Steps**

Once the EDA and descriptive analysis are complete, you can start building **predictive models** or deeper **analytical queries** to answer these complex questions. SQL will help you identify correlations, patterns, and trends that can guide these advanced analyses.

























chenzhu github

https://github.com/chen-zhu/Airport-database

chen_zhu

```sql
SELECT p.passenger_id, p.first_name, p.last_name
FROM passenger p
JOIN booking b ON p.passenger_id = b.passenger_id
GROUP BY p.passenger_id
HAVING COUNT(b.booking_id) = 1;
```


### Basic to Intermediate SQL Questions

1. **Simple SELECT Query**

   * Write an SQL query to retrieve all customer names and their contact numbers from the `customers` table.

2. **Filtering Data**

   * Write an SQL query to retrieve all products from the `products` table that belong to the product line 'Sports Cars'.

3. **Aggregation (COUNT)**

   * How many customers are listed in the `customers` table who live in 'USA'?

4. **Aggregation (SUM)**

   * Write an SQL query to calculate the total payment amount from the `payments` table.

5. **JOIN (Inner Join)**

   * Write an SQL query to get a list of all orders (from the `orders` table) with their corresponding customer names (from the `customers` table).

6. **JOIN (Left Join)**

   * Write an SQL query to list all customers and any orders they have made. Show customers who have not made any orders as well.

7. **GROUP BY and HAVING**

   * Write a query to show how many orders each customer has placed, but only for customers who have placed more than 5 orders.

8. **Subquery (IN)**

   * Write an SQL query to list all products from the `products` table that are part of product lines that have more than 3 products.

9. **Subquery (EXISTS)**

   * Write an SQL query to find all employees from the `employees` table who have at least one order associated with them in the `orders` table.

10. **ORDER BY and LIMIT**

    * Write an SQL query to display the top 5 highest-paid customers based on the total amount of payments made in the `payments` table.

11. **DATE Functions**

    * Write a query to find all orders from the `orders` table placed in the year 2023.

12. **DISTINCT**

    * Write an SQL query to list all the unique product lines available in the `productlines` table.

13. **JOIN (Multiple Tables)**

    * Write an SQL query to list the names of employees and their office locations from the `employees` and `offices` tables. Use an appropriate join to connect the data.

14. **UPDATE Query**

    * Write an SQL query to update the contact number of a specific customer in the `customers` table.

15. **DELETE Query**

    * Write an SQL query to delete all orders from the `orders` table that were placed before January 1st, 2022.




===


Here are five advanced MySQL user queries, based on the tables you've described, that involve complex SQL concepts like window functions, subqueries, multi-table joins, and CTEs (Common Table Expressions). These queries are designed to extract deeper insights and analyze the data in ways that are more relevant to real-world business use cases.

---

### **1. Ranking Employees by Sales Revenue**

**Objective:** Rank employees based on the total revenue they have generated from sales. Use a window function to rank them.

```sql
WITH EmployeeSales AS (
    SELECT 
        e.employeeNumber,
        e.lastName,
        e.firstName,
        SUM(od.quantityOrdered * od.priceEach) AS total_sales
    FROM 
        employees e
    JOIN orders o ON e.employeeNumber = o.salesRepEmployeeNumber
    JOIN orderdetails od ON o.orderNumber = od.orderNumber
    GROUP BY e.employeeNumber
)
SELECT 
    employeeNumber,
    lastName,
    firstName,
    total_sales,
    RANK() OVER (ORDER BY total_sales DESC) AS sales_rank
FROM EmployeeSales
ORDER BY sales_rank;
```

**Explanation:**

* This query calculates total sales for each employee by joining the `employees`, `orders`, and `orderdetails` tables.
* The `RANK()` window function assigns a rank to each employee based on their total sales, ordered from the highest to the lowest.

---

### **2. Top 5 Best-Selling Products by Quantity Sold**

**Objective:** Identify the top 5 best-selling products based on the quantity sold.

```sql
SELECT 
    p.productName,
    SUM(od.quantityOrdered) AS total_quantity_sold
FROM 
    products p
JOIN orderdetails od ON p.productCode = od.productCode
GROUP BY p.productName
ORDER BY total_quantity_sold DESC
LIMIT 5;
```

**Explanation:**

* This query calculates the total quantity sold for each product by joining the `products` and `orderdetails` tables.
* It then orders the products by total quantity sold and limits the result to the top 5.

---

### **3. Yearly Revenue Growth (Comparison of Two Consecutive Years)**

**Objective:** Calculate the percentage revenue growth from one year to the next.

```sql
WITH YearlyRevenue AS (
    SELECT 
        YEAR(o.orderDate) AS order_year,
        SUM(od.quantityOrdered * od.priceEach) AS total_revenue
    FROM 
        orders o
    JOIN orderdetails od ON o.orderNumber = od.orderNumber
    GROUP BY order_year
)
SELECT 
    current_year.order_year,
    current_year.total_revenue AS current_year_revenue,
    previous_year.total_revenue AS previous_year_revenue,
    ROUND(((current_year.total_revenue - previous_year.total_revenue) / previous_year.total_revenue) * 100, 2) AS revenue_growth_percentage
FROM 
    YearlyRevenue current_year
JOIN 
    YearlyRevenue previous_year ON current_year.order_year = previous_year.order_year + 1
ORDER BY current_year.order_year;
```

**Explanation:**

* This query calculates yearly revenue by summing the sales in each year.
* It then compares the revenue between consecutive years and calculates the percentage growth in revenue.

---

### **4. Customers Who Have Made Payments Greater Than Their Orders**

**Objective:** Identify customers who have paid more than the value of their orders.

```sql
SELECT 
    c.customerName,
    SUM(p.amount) AS total_payment,
    SUM(od.quantityOrdered * od.priceEach) AS total_order_value
FROM 
    customers c
JOIN orders o ON c.customerNumber = o.customerNumber
JOIN orderdetails od ON o.orderNumber = od.orderNumber
JOIN payments p ON c.customerNumber = p.customerNumber
GROUP BY c.customerNumber
HAVING total_payment > total_order_value
ORDER BY total_payment DESC;
```

**Explanation:**

* This query identifies customers who have made payments greater than the total value of their orders.
* The query uses `HAVING` to filter customers whose total payments exceed their total order values, grouping by customer.

---

### **5. Monthly Revenue Trend (Year-over-Year Comparison)**

**Objective:** Display the monthly revenue for two consecutive years and compare the changes in revenue.

```sql
WITH MonthlyRevenue AS (
    SELECT 
        YEAR(o.orderDate) AS order_year,
        MONTH(o.orderDate) AS order_month,
        SUM(od.quantityOrdered * od.priceEach) AS total_revenue
    FROM 
        orders o
    JOIN orderdetails od ON o.orderNumber = od.orderNumber
    GROUP BY order_year, order_month
)
SELECT 
    current_year.order_year,
    current_year.order_month,
    current_year.total_revenue AS current_year_revenue,
    previous_year.total_revenue AS previous_year_revenue,
    ROUND(((current_year.total_revenue - previous_year.total_revenue) / previous_year.total_revenue) * 100, 2) AS revenue_growth_percentage
FROM 
    MonthlyRevenue current_year
JOIN 
    MonthlyRevenue previous_year ON current_year.order_year = previous_year.order_year + 1
    AND current_year.order_month = previous_year.order_month
ORDER BY current_year.order_year, current_year.order_month;
```

**Explanation:**

* This query calculates the total revenue for each month.
* It compares the monthly revenue from two consecutive years and calculates the percentage growth or decline in revenue month-over-month.

---

These advanced queries demonstrate a range of advanced SQL techniques, including window functions, CTEs, subqueries, and complex joins. They can be used to extract meaningful insights from your database, which can help with decision-making, performance analysis, and reporting.

Let me know if you'd like further explanations or additional queries!



https://github.com/chen-zhu/Airport-database/blob/chenzhu1/flights_data.csv




```sql
/* 
Q1 
Get the flight number, arrival time, and departure time of all flights flying either from, or to, LAX.
(flight num, arrival, departure)


SELECT flightno AS flight_no, arrival, depart AS departure FROM airport.Flight 
WHERE src = "LAX" OR dest = "LAX"; 


```


## Insights





<!--


Absolutely! Below are **20 insightful questions** you can ask to extract value from a MySQL database — especially if your schema includes **passenger, booking, flight, airport, payment, aircraft, route, and schedule tables** (like in an airline or travel system).

These questions are designed for **data exploration, business intelligence, and operational optimization**.

---

## 🧠 **20 Insightful SQL Questions for Analysis**

---

### ✈️ **Passenger & Booking Insights**

1. **Who are the top 10 passengers by number of bookings in the last 12 months?**
2. **What percentage of passengers are repeat flyers (booked more than once)?**
3. **How many passengers booked group flights (more than 1 passenger per booking)?**
4. **Which countries or cities have the highest number of registered passengers?**
5. **What’s the average lead time (days between booking and flight date)?**

---

### 📅 **Time-Based Trends**

6. **How have bookings changed month by month over the past year?**
7. **What is the distribution of bookings by day of the week?**
8. **Which months show the highest cancellation rates?**
9. **How do passenger counts vary by season (Q1, Q2, Q3, Q4)?**
10. **What’s the average number of flights per day/week for the top 5 busiest routes?**

---

### 💰 **Revenue & Payment Analytics**

11. **What is the total revenue generated in the last quarter?**
12. **What is the average ticket price by route or cabin class (economy, business, etc.)?**
13. **Which payment methods are most frequently used (credit, PayPal, etc.)?**
14. **Which routes or flights generate the highest revenue?**
15. **How many bookings were made but not paid for (if payment is tracked separately)?**

---

### 🌍 **Route & Flight Operations**

16. **What are the top 10 most frequently flown routes?**
17. **Which airports handle the highest number of flights?**
18. **What is the average flight occupancy rate (seats filled vs. capacity)?**
19. **Which aircraft types are used most frequently and on which routes?**
20. **How often do delays occur, and what is the average delay time per route or airport?**

---

## 📌 Bonus: How to Use These

Each question can be turned into a SQL query or a **stored procedure**. If you'd like, I can help you:

* Write specific SQL queries for each one
* Turn them into **stored procedures** for reuse
* Build a **dashboard or reporting view** based on the results

Would you like me to turn a few of these into working queries next? Let me know your schema/table structure, and I’ll tailor them!




```sql
/* Question 1




*/




/* Question 1

(a). Get the flight number, arrival time, and departure time of all flights flying either from, or to, LAX. (flight no, arrival, departure)


*/




SELECT flightno AS flight_no, arrival, depart AS departure FROM airport.Flight 
WHERE src = "LAX" OR dest = "LAX"; 









/* Question 2
- (b). Find the average salary of the pilots. (avg salary)



*/







/* Question 3

- (c). Get the SSN, union number, and exam date, for all traffic controllers. (ssn, union no, exam date)



*/




/* Question 4
- (d). Get the FAA number, test name, and max score, of all tests that have a ’Refuel’ stage. (faa no, name, max score)



*/


/* Question 5


- (e). Get the FAA number, test name, and date of all the testing events that scored the max score. (faa no, name, date)



*/





/* Question 6


- (f). Get the names of pilots certified to fly every airplane model. (name)




*/


/* Question 1




*/




*/


/* Question 1




*/


*/


/* Question 1




*/


*/


/* Question 1




*/


*/


/* Question 1




*/



```










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

















