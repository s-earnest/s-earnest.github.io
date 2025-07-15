---
title: ' Employees HR Analysis  '
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
  # - tamplate-tag-2
  # - template-tag-3
  - employees
  - SQL
  - MySQL
  - database 


image: 
   path: /assets/sample/coming-soon.png
   image: /assets/sample/coming-soon.png
   alt: Expected publishing date in-progress

# image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.
  # reference N8RKW3MBTQFY
  
---








DESCRIPTION 

This dataset contains 100,000 rows of data capturing key aspects of employee performance, productivity, and demographics in a corporate environment. It includes details related to the employee's job, work habits, education, performance, and satisfaction. The dataset is designed for various purposes such as HR analytics, employee churn prediction, productivity analysis, and performance evaluation. I started with mysql analysis and then  predicting employee churn with Python. 


TABLES


| Column                       | Description                                                                                  |
|-------------------------------|----------------------------------------------------------------------------------------------|
| **Employee_ID**              | Unique identifier for each employee.                                                       |
| **Department**               | The department in which the employee works (e.g., Sales, HR, IT).                          |
| **Gender**                   | Gender of the employee (Male, Female, Other).                                              |
| **Age**                       | Employee's age (between 22 and 60).                                                        |
| **Job_Title**                | The role held by the employee (e.g., Manager, Analyst, Developer).                         |
| **Hire_Date**                | The date the employee was hired.                                                           |
| **Years_At_Company**         | The number of years the employee has been working for the company.                        |
| **Education_Level**          | Highest educational qualification (High School, Bachelor, Master, PhD).                   |
| **Performance_Score**        | Employee's performance rating (1 to 5 scale).                                             |
| **Monthly_Salary**           | The employee's monthly salary in USD, correlated with job title and performance score.     |
| **Work_Hours_Per_Week**      | Number of hours worked per week.                                                           |
| **Projects_Handled**         | Total number of projects handled by the employee.                                         |
| **Overtime_Hours**           | Total overtime hours worked in the last year.                                             |
| **Sick_Days**                | Number of sick days taken by the employee.                                                |
| **Remote_Work_Frequency**    | Percentage of time worked remotely (0%, 25%, 50%, 75%, 100%).                             |
| **Team_Size**                | Number of people in the employee's team.                                                  |
| **Training_Hours**           | Number of hours spent in training.                                                        |
| **Promotions**               | Number of promotions received during their tenure.                                        |
| **Employee_Satisfaction_Score** | Employee satisfaction rating (1.0 to 5.0 scale).                                       |
| **Resigned**                 | Boolean value indicating if the employee has resigned.                                     |



Employee_ID: Unique identifier for each employee.
Department: The department in which the employee works (e.g., Sales, HR, IT).
Gender: Gender of the employee (Male, Female, Other).
Age: Employee's age (between 22 and 60).
Job_Title: The role held by the employee (e.g., Manager, Analyst, Developer).
Hire_Date: The date the employee was hired.
Years_At_Company: The number of years the employee has been working for the company.
Education_Level: Highest educational qualification (High School, Bachelor, Master, PhD).
Performance_Score: Employee's performance rating (1 to 5 scale).
Monthly_Salary: The employee's monthly salary in USD, correlated with job title and performance score.
Work_Hours_Per_Week: Number of hours worked per week.
Projects_Handled: Total number of projects handled by the employee.
Overtime_Hours: Total overtime hours worked in the last year.
Sick_Days: Number of sick days taken by the employee.
Remote_Work_Frequency: Percentage of time worked remotely (0%, 25%, 50%, 75%, 100%).
Team_Size: Number of people in the employee's team.
Training_Hours: Number of hours spent in training.
Promotions: Number of promotions received during their tenure.
Employee_Satisfaction_Score: Employee satisfaction rating (1.0 to 5.0 scale).
Resigned: Boolean value indicating if the employee has resigned.
Potential Use Cases
Churn Prediction: Identifying patterns that lead to employee resignation.
Productivity Analysis: Understanding the factors that drive productivity, such as remote work frequency, overtime, or training hours.
Performance Evaluation: Analyzing how performance scores correlate with factors such as salary, team size, or education level.
HR Analytics: Providing insights into workforce demographics and behavior for strategic decision-making.




| Column                       | Description                                                                                  |
|-------------------------------|----------------------------------------------------------------------------------------------|
| **Employee_ID**              | Unique identifier for each employee.                                                       |
| **Department**               | The department in which the employee works (e.g., Sales, HR, IT).                          |
| **Gender**                   | Gender of the employee (Male, Female, Other).                                              |
| **Age**                       | Employee's age (between 22 and 60).                                                        |
| **Job_Title**                | The role held by the employee (e.g., Manager, Analyst, Developer).                         |
| **Hire_Date**                | The date the employee was hired.                                                           |
| **Years_At_Company**         | The number of years the employee has been working for the company.                        |
| **Education_Level**          | Highest educational qualification (High School, Bachelor, Master, PhD).                   |
| **Performance_Score**        | Employee's performance rating (1 to 5 scale).                                             |
| **Monthly_Salary**           | The employee's monthly salary in USD, correlated with job title and performance score.     |
| **Work_Hours_Per_Week**      | Number of hours worked per week.                                                           |
| **Projects_Handled**         | Total number of projects handled by the employee.                                         |
| **Overtime_Hours**           | Total overtime hours worked in the last year.                                             |
| **Sick_Days**                | Number of sick days taken by the employee.                                                |
| **Remote_Work_Frequency**    | Percentage of time worked remotely (0%, 25%, 50%, 75%, 100%).                             |
| **Team_Size**                | Number of people in the employee's team.                                                  |
| **Training_Hours**           | Number of hours spent in training.                                                        |
| **Promotions**               | Number of promotions received during their tenure.                                        |
| **Employee_Satisfaction_Score** | Employee satisfaction rating (1.0 to 5.0 scale).                                       |
| **Resigned**                 | Boolean value indicating if the employee has resigned.                                     |



#  Approach to Dataset Analysis

## **Understanding the Dataset**

I began by thoroughly reviewing the dataset’s schema, identifying 20 well-defined columns.
This is documented what each column represents — e.g., demographics (Age, Gender), job information (Department, Job\_Title, Hire\_Date), performance and productivity metrics (Performance\_Score, Projects\_Handled, Training\_Hours), and outcome indicators (Resigned, Employee\_Satisfaction\_Score).
Then I ensured I got a clear understanding of the available variables and their relevance to business questions.

## **Defining the Business Use Cases**

I aligned the analysis with **four key HR and business use cases**:

* **Churn Prediction:** to identify risk factors leading to employee resignation.
* **Productivity Analysis:** to uncover drivers of employee output.
* **Performance Evaluation:** to assess how employees’ performance relates to various factors.
* **HR Analytics:** to gain a demographic and behavioral view of the workforce for strategic planning.

These use cases served me as the guiding questions for what to measure and analyze. This focus on the business problem definition.



## **Designing Insightful Queries**

I crafted SQL queries**, grouped by topic, designed to extract actionable insights from the dataset.
These queries focused on:

* Key metrics and distributions (e.g., resignation rate by department or age group, average tenure of resigned vs. retained employees).
* Correlations and patterns (e.g., performance vs. salary, training hours vs. productivity, remote work frequency vs. projects handled).
* Identifying extremes and top performers (e.g., employees with highest projects handled, highest satisfaction & performance).

This approach ensures me that insights are not only descriptive but also diagnostic and predictive where possible.



# **Documenting and Presenting Results**

To make the work reproducible and readable:

* I documented the dataset columns and their definitions in a **Markdown table**, creating clear metadata for stakeholders.
* I grouped the SQL queries under meaningful categories, making it easier for others to navigate and use them.
* I prepared the queries to be directly executable in MySQL, avoiding unnecessary complexity and ensuring efficiency.

---

### **Innovative Touches**

I also considered:

* Advanced queries that check potential correlations (e.g., salary vs. satisfaction).
* Segmenting results (e.g., by age group, education level, or department) to allow more granular insights.
* Preparing the foundation for dashboards or reports by aligning queries to metrics that could feed into visual tools like Tableau or Power BI.



# Outcome

With this structured and business-driven approach I ensured that HR manager and leadership can:

* Detect early warning signs of churn.
* Optimize workforce productivity.
* Reward and recognize high performers.
* Build strategic workforce plans grounded in data.


## Structure of the approach:

| Use Case                     | Description                                                                                 |
|-------------------------------------------------------------------------------------------|
| **Churn Prediction**         | Identifying patterns that lead to employee resignation.                                   |
| **Productivity Analysis**    | Understanding the factors that drive productivity, such as remote work, overtime, training.|
| **Performance Evaluation**   | Analyzing how performance scores correlate with salary, team size, education level.       |
| **HR Analytics**             | Providing insights into workforce demographics and behavior for strategic decision-making. |
















# DISCLAIMER

- To the best of my knowledge, this data is fabricated and it does not correspond to real people. Any similarity to existing people is purely coincidental.


### LICENSE

- This work is licensed under the Creative Commons Attribution-Share Alike 3.0 Unported License. To view a copy of this license, visit 
http://creativecommons.org/licenses/by-sa/3.0/ or send a letter to Creative Commons, 171 Second Street, Suite 300, San Francisco, 
California, 94105, USA.



<!-- 





```sql

print("Hello, world!")
for i in range(10):
    print(i)


```


Employee Database Description:
This database is designed to store information about employees, departments, roles, and salaries. The employee database schema is designed to store comprehensive information about employees, departments, roles, and salaries within an organization. Here’s a textual description of the key tables and their attributes:



===

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




