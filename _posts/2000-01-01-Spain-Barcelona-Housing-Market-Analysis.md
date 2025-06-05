---
title: ' Barcelona Housing Market Analsysis  '
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
  - barcelona
  - housing-market
  - MySQL
  - housing


image: 
   # path: /assets/sample/coming-soon.png
   image: /assets/sample/coming-soon.png
   alt: Expected publishing date in-progress

# image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.

---



# Objective

- This a dataset from {idealista18} which is an open data product with big geo-referenced micro-data sets of 2018 real estate listings in Spain. These data were originally published on the idealista.com real estate website. The data sets are for the three largest cities in Spain: Madrid (n = 94,815 observations), Barcelona (n = 61,486 observations), and Valencia (n = 33,622 observations), and for this analysis I will focusing on Barcelona alone. 
The listings were enriched with official information from the Spanish cadastre (e.g., building material quality) plus other relevant geographical features, such as distance to urban points of interest. Along with the real estate listings, the data product also includes neighborhood boundaries for each city. 

- NOTE: 
The data sets are offered as a fully documented R package and are available for scientific and educational purposes, particularly for geo-spatial studies.


# Introduction 
  Business task
  Problem statement


In this project, I extracted data from Idealista, a real estate website, and performed a thorough cleaning process to ensure data accuracy. Following this, I conducted an exploratory data analysis (EDA) to uncover trends and patterns in the real estate market in 2018. The main objectives were to understand market trends, identify factors influencing property prices, and provide insights for buyers, sellers, and investors. 
Following this project will be a new analysis from year 2024 data, and compare the market trends post-pandemic housing prices in Barcelona (Spain).




# Data Source
   Describe where the datasets were downloaded from.
    Link the sites for the datasets if possible.
    Indicate if the data is from a public or a private license and if it is trusted.
    Describe the datasets, the columns, and what each dataset summarizes if there are more than one.


# Data Description

There is one data objects in the package: three objects for each of the cities included. For each city, dwelling listings, neighborhood polygons, and a set of points of interest have been included in the R package. The following subsections describe each object. A full description of the data is available in the help section of the package.






# Outline
  Every project seeks to answer a question effectively. 
    introduction
    related work
    methods
    experimental setup





## Data dictionary 



| Column       | Type     | Description                       |
|--------------|----------|-----------------------------------|
| order_id     | INT      | Primary key                       |
| customer_id  | INT      | FK to customers                   |
| order_date   | DATE     | Date of transaction               |
| amount       | DECIMAL  | Total order value                 |

**Notes:**
- Orders only include completed purchases (not abandoned carts).
- Use `order_date` for time-based reporting.




```sql

SELECT 
  CASE 
    WHEN is_duplex = 1 THEN 'Duplex'
    WHEN is_studio = 1 THEN 'Studio'
    ELSE 'Regular'
  END AS asset_type,
  AVG(price) AS avg_price
FROM your_table
GROUP BY asset_type;

```




# Reference


Paper

A geo-referenced micro-data set of real estate listings for Spain’s three largest cities

David Rey-Blanco and Pelayo Arbues (idealista)
Fernando Lopez (Universidad Politecnica de Cartagena)
Antonio Paez (McMaster University)
Published in Environment and Planning B: Urban Analytics and City Science




https://journals.sagepub.com/doi/10.1177/23998083241242844

Idealista.com is the market leader in real estate ads in Spain (Italy and Portugal).


This project is currently under development and I'll be updating it with new notebooks.

1. Raw_data

id: Property identificator
title: Property type and address
neighborhood: District and city
price: Price in euros
info_features: List of property features like surface, bedrooms amount, floor number, etc.
features: A more extended list of property features like surface, bedrooms amount, floor number, etc.
description: Text description of the property

2. Structured_dataw_description
id: Property identificator
property_type: Type of property
adress: Approximated adress of property
neighborhood: Neighborhood name
city: City name
price: Price in euros
sq_mt_built: Area of the property in square meters with walls
sq_mt_floor_area: Usable area of the property in square meters
n_bedrooms: Bedrooms amount
bathrooms: Bathrooms amount
floor_y: Floor number
year_built: Year of building construction
exterior_x: Is the property exterior? (True/False)
-lift_x: Has the property a lift? (True/False)
terrace: Has the property a terrace? (True/False)
balconyHas the property a balcony? (True/False)
second hand: Is the property second hand? (True/False)
needs renovating: Does the property need renovating? (True/False)
parking: Has the property a parking slot? (True/False)
swimming pool: Has the property a swimming pool? (True/False)
garden: Has the property a garden? (True/False)
air conditioning: Has the property air conditioning? (True/False)
heating: Has the property a heating system? (True/False)
central_heating: Is the heating system cental/individual?
heating_type: Type of heating
consumption_in_mkw/m2_year: Yearly consumtion of the property in mkW/m^2
emissions_in_kgco2/m2_year: Yearly emissions of the property in kgco2/m^2
orientation: Orientation of the property
description: Text description of the property




Web Scraping, Data Cleaning and Exploratory Data Analysis

In this project, I extracted data from Idealista, a real estate website, and performed a thorough cleaning process to ensure data accuracy. Following this, I conducted an exploratory data analysis (EDA) to uncover trends and patterns in the real estate market. The main objectives were to understand market trends, identify factors influencing property prices, and provide insights for buyers, sellers, and investors.




This dataset provides detailed information about properties in Barcelona, including their price, number of rooms, total area, name, website link, city, area, subarea, and page number

price: The cost associated with the property listing. (Numeric)
room: The number of rooms present in the property. (Numeric)
space: The total area of the property. (Numeric)
space: The total area of the property. (Numeric)
name: The name of the property. (String)
link: The website link for further information about the property. (String)
city: The city where the property is located. (String)
subarea: The subarea of the city where the property is located. (String)
page: The page number of the listing. (Numeric)



https://www.kaggle.com/datasets/thedevastator/housing-prices-in-barcelona?resource=download


https://www.ohb.cat/en/project/housing-in-the-barcelona-metropolis-in-2023-affordability-and-access-annual-report/
Description
The annual report of the Observatori Metropolità de l’Habitatge de Barcelona (O-HB), in its 2024 edition, focuses on housing affordability and access difficulties. These are two different and complementary approaches, which allow for a more detailed analysis of the effects resulting from the trend of divergence between average household incomes and the average housing price that has been occurring since the beginning of the century.





## Footnote

[^1]: The footnote source






<!-- 


To generate the full SQL queries in an editable format using ChatGPT canvas, you'll need to **log in to ChatGPT**. Once logged in, you can use canvas to work interactively with SQL, Python, and more.

In the meantime, I’ll start by listing the full SQL queries for your 20 questions right here:

---

### 🟢 Beginner-Level SQL Queries

1. **Average unit price of all assets**

```sql
SELECT AVG(unit_price) AS avg_unit_price FROM your_table;
```

2. **Number of assets with a garden**

```sql
SELECT COUNT(*) AS garden_assets FROM your_table WHERE has_garden = 1;
```

3. **Distinct number of rooms available**

```sql
SELECT DISTINCT room_number FROM your_table ORDER BY room_number;
```

4. **Average construction area for assets with a patio**

```sql
SELECT AVG(contruction_area) AS avg_area_with_patio FROM your_table WHERE has_patio = 1;
```

5. **Number of studios or top-floor properties**

```sql
SELECT COUNT(*) AS count_studios_or_topfloor FROM your_table WHERE is_studio = 1 OR is_top_floor = 1;
```

---

### 🟡 Intermediate-Level SQL Queries

6. **Average price per number of rooms**

```sql
SELECT room_number, AVG(price) AS avg_price FROM your_table GROUP BY room_number;
```

7. **Most common orientation**

```sql
SELECT 'North' AS orientation, COUNT(*) FROM your_table WHERE has_north_orientation = 1
UNION ALL
SELECT 'South', COUNT(*) FROM your_table WHERE has_south_orientation = 1
UNION ALL
SELECT 'East', COUNT(*) FROM your_table WHERE has_easth_orientation = 1
UNION ALL
SELECT 'West', COUNT(*) FROM your_table WHERE has_west_orientation = 1
ORDER BY COUNT(*) DESC;
```

8. **Asset distribution by location**

```sql
SELECT flat_location_id, COUNT(*) AS asset_count FROM your_table GROUP BY flat_location_id;
```

9. **Average subway distance for assets with elevators**

```sql
SELECT AVG(distance_subway) AS avg_distance_subway FROM your_table WHERE has_elevator = 1;
```

10. **Construction year with highest average asset price**

```sql
SELECT construction_year, AVG(price) AS avg_price 
FROM your_table 
GROUP BY construction_year 
ORDER BY avg_price DESC 
LIMIT 1;
```

11. **Average unit price by bathroom count**

```sql
SELECT bath_number, AVG(unit_price) AS avg_unit_price 
FROM your_table 
GROUP BY bath_number;
```

12. **Average city center distance for assets with pool and AC**

```sql
SELECT AVG(distance_citycenter) AS avg_distance 
FROM your_table 
WHERE has_swimmingpool = 1 AND has_AC = 1;
```

13. **Average price by doorman presence**

```sql
SELECT has_doorman, AVG(price) AS avg_price 
FROM your_table 
GROUP BY has_doorman;
```

---

### 🔴 Advanced-Level SQL Queries

14. **Asset with highest price per square meter**

```sql
SELECT asset_id, price / contruction_area AS price_per_sqm 
FROM your_table 
ORDER BY price_per_sqm DESC 
LIMIT 1;
```

15. **Most common orientation combinations**

```sql
SELECT has_north_orientation, has_south_orientation, has_easth_orientation, has_west_orientation, COUNT(*) AS count
FROM your_table
GROUP BY has_north_orientation, has_south_orientation, has_easth_orientation, has_west_orientation
ORDER BY count DESC;
```

16. **Correlation prep: floor cleanliness vs unit price**

```sql
SELECT floor_clean, unit_price FROM your_table;
```

> Export this data for correlation analysis in Python, Excel, or another tool.

17. **Compare prices: duplex vs studio vs others**

```sql
SELECT 
  CASE 
    WHEN is_duplex = 1 THEN 'Duplex'
    WHEN is_studio = 1 THEN 'Studio'
    ELSE 'Regular'
  END AS asset_type,
  AVG(price) AS avg_price
FROM your_table
GROUP BY asset_type;
```

18. **Top 5 flat locations by price per sqm**

```sql
SELECT flat_location_id, AVG(price / contruction_area) AS avg_price_per_sqm
FROM your_table
GROUP BY flat_location_id
ORDER BY avg_price_per_sqm DESC
LIMIT 5;
```

19. **Compare new vs old buildings**

```sql
SELECT 
  CASE 
    WHEN construction_year >= YEAR(CURDATE()) - 10 THEN 'New'
    ELSE 'Old'
  END AS age_group,
  AVG(price) AS avg_price
FROM your_table
GROUP BY age_group;
```

20. **Most common amenities in top-floor flats with elevator and AC**

```sql
SELECT amenities, COUNT(*) AS count
FROM your_table
WHERE is_top_floor = 1 AND has_elevator = 1 AND has_AC = 1
GROUP BY amenities
ORDER BY count DESC;
```

---

Let me know if you'd like these as a downloadable file (e.g. `.sql` or `.csv`) or organized into a reporting dashboard!



===


Absolutely! Here's a list of **20 questions** designed to extract **insights** from your MySQL dataset, using the columns you listed. They’re grouped by **difficulty level**: beginner, intermediate, and advanced.

---

## 🟢 Beginner-Level Questions (Basic SELECTs, COUNTs, and AVG)

1. **What is the average unit price of all assets?**
   → `AVG(unit_price)`

2. **How many assets have a garden?**
   → `COUNT(*) WHERE has_garden = 1`

3. **List the distinct number of rooms available in the dataset.**
   → `SELECT DISTINCT room_number`

4. **What is the average construction area of assets that include a patio?**
   → `AVG(contruction_area) WHERE has_patio = 1`

5. **How many assets are studios or top-floor properties?**
   → `WHERE is_studio = 1 OR is_top_floor = 1`

---

## 🟡 Intermediate-Level Questions (Aggregations, GROUP BYs, Filters)

6. **What is the average price per number of rooms?**
   → `GROUP BY room_number`

7. **Which orientation is the most common among the assets?**
   → Count combinations or sum boolean columns like `has_north_orientation`, etc.

8. **What is the distribution of asset types across different flat locations?**
   → `GROUP BY flat_location_id`

9. **What is the average distance to the subway for assets with elevators?**
   → `AVG(distance_subway) WHERE has_elevator = 1`

10. **Which construction year has the highest average asset price?**
    → `GROUP BY construction_year ORDER BY AVG(price) DESC`

11. **How does average unit price vary by number of bathrooms?**
    → `GROUP BY bath_number`

12. **What is the average distance to the city center for assets with swimming pools and AC?**
    → `WHERE has_swimmingpool = 1 AND has_AC = 1`

13. **Find the average price of assets with and without a doorman.**
    → `GROUP BY has_doorman`

---

## 🔴 Advanced-Level Questions (Joins, Subqueries, Complex Conditions)

14. **Which asset has the highest unit price per square meter?**
    → `unit_price / contruction_area` with `ORDER BY` and `LIMIT 1`

15. **Which combinations of orientation (e.g., north & east) are most common?**
    → Use `GROUP BY` on multiple `has_*_orientation` columns.

16. **Is there a correlation between floor cleanliness and unit price?**
    → This would involve `SELECT floor_clean, unit_price` for analysis in a BI tool or statistical software.

17. **How does average price vary for duplexes vs studios vs regular flats?**
    → `CASE WHEN is_duplex = 1 THEN 'Duplex' ...` and `GROUP BY`

18. **Find the top 5 flat locations by average price per square meter.**
    → `GROUP BY flat_location_id ORDER BY AVG(unit_price / contruction_area) DESC LIMIT 5`

19. **Compare asset prices for newly constructed buildings (past 10 years) vs older ones.**
    → Use `construction_year >= YEAR(CURDATE()) - 10`

20. **Which amenities are most common among top-floor flats with elevators and AC?**
    → `WHERE is_top_floor = 1 AND has_elevator = 1 AND has_AC = 1` then analyze `amenities`

---

Would you like these written as full SQL queries too? Or organized into a spreadsheet-style template for an analytics project?


===

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




