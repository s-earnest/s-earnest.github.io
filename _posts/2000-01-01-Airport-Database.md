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

---









### Data dictionnary


| Column Name       | Type     |  Description           |
|--------------|----------|-----------------------------------|
| airplone    | INT      | 
| employee  | INT      | 
| test   | DATE     | 
| test_log       | DECIMAL  | 
| ticket_purchase     | DECIMAL  | 
| flights    | DECIMAL  | 






# Airport Database


1. A create.sql file that creates all of your tables. A minimal example file is provided for you. Make sure all possible constraints from the ER diagram are reflected into table definitions.

2. A data insert.py file that inserts values from CSV files into your tables. 

3. A single SQL file for each of the following queries. Name them a.sql, b.sql... etc. 

  - (a). Get the flight number, arrival time, and departure time of all flights flying either from, or to, LAX. (flight no, arrival, departure)

  SELECT flightno AS flight_no, arrival, depart AS departure FROM airport.Flight 
WHERE src = "LAX" OR dest = "LAX"; 


  
  - (b). Find the average salary of the pilots. (avg salary)
  
  - (c). Get the SSN, union number, and exam date, for all traffic controllers. (ssn, union no, exam date)
  
  - (d). Get the FAA number, test name, and max score, of all tests that have a ’Refuel’ stage. (faa no, name, max score)
  
  - (e). Get the FAA number, test name, and date of all the testing events that scored the max score. (faa no, name, date)
  
  - (f). Get the names of pilots certified to fly every airplane model. (name)
  
  - (g). Get the average number of airplane models that pilots are certified to fly. (aver- age )
  
  - (h). For all pilots with a salary of over $100,000, get their name and how many models they are certified to fly. (name, num certified)
  
  - (i). Give the pilots in (f) a 10% raise. Then output their names and their new salary. (name, salary)
  
  - (j). Delete all flights from Santa Barbara to Chicago. Then output all the flight number, source, and destination of the remaining flights. (flight no, source, destination )
  
  - (k). Get the technician name, technician phone number, test name, and airplane registration number, for which a technician scored less than half the max score on a testing event. (name, phone, test name, reg no)
  
  - (l). Get the name, address, and phone number of the technician with the highest salary who is an expert at ’Boeing’ models. Assume an airplane’s model number always starts with the manufacturer name, i.e. ’Boeing-747’, ’Airbus-A300’. (name, address, phone)
  
  - (m). To better understand flight delays, you want to see how long a technician actually spends on a test compared to the expected completion time. To do that, you want to calculate the average deviation of completion time for each technician, on each test. The deviation is the ’expected completion time’ of a test minus the time it actually took to complete the test. For each technician, get the FAA test number and average deviation for every test they conducted. (name, faa no, avg deviation)
  









<!-- 


chenzhu github




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




old one I can not used importing issues 


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




Certainly! Based on the [airportdb schema](https://dev.mysql.com/doc/airportdb/en/airportdb-structure.html), here are **20 detailed analytical questions** you can explore using SQL queries. These questions are designed to help you extract valuable insights from the relational structure of the airport database.

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







Great! Let’s walk through **SQL query examples** for a selection of the most actionable marketing questions from the previous list. I’ll give you **sample queries** using standard MySQL syntax and assume commonly structured fields. You might need to adjust field/table names based on your actual schema (e.g., `booking_date`, `flight_id`, etc.).

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

Would you like these turned into **stored procedures**, **views**, or **visual dashboards** (e.g., for Power BI, Tableau, or MySQL Workbench)? Or do you want queries for the remaining questions as well?






Great choice! Turning these queries into **stored procedures** makes them reusable and easier to maintain, especially for reporting or marketing tools.

Here are **MySQL stored procedures** for **10 of the marketing insight queries** we previously discussed. You can execute these using any MySQL interface (e.g., MySQL Workbench, CLI, phpMyAdmin).

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





### Refernece
- https://github.com/stefanproell/flughafendb







# Contact. 

Have a question? Feel free to send an [email](mailto:s.ernest@gmx.us) or if you prefer a virtual [meeting]( https://calendly.com/s-earnest/30min ){:target="_blank"}






# Footnote

[^1]: Testing Conversion Funnels is about understanding and optimizing each step of the user's experience on their journey toward purchasing our products. 

















