---
title: ' Consuemr Complaints Analysis '
author: ernest
date: 2025-02-16 16:20:02 -05:00
last_modified_at: 2023-11-30
categories: [ Work ]
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
  - business
  - complaints
  - consumer
  - customer-satisfaction
  - financial



image: 
  path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  alt: Expected publishing date 2025-06-15

---



###### Last update: 6:01:09 PM 





# Summary 

This dataset serves as a valuable resource for identifying trends, assessing company practices, and informing policy decisions. 
As of February 22, 2025, the database contains a total of 7,867,198 complaints. The dataset is 1,36 GB in size and available for download in CSV format. The dataset spans from December 1, 2011, to the present, with regular updates to include new complaints.







# About the data
Complaints that the CFPB sends to companies for response are published in the Consumer Complaint Database after the company responds, confirming a commercial relationship with the consumer, or after 15 days, whichever comes first.


# Complaint narratives
With their consent and after taking steps to remove sensitive information, we publish consumers’ complaint narratives in their own words. One consumer’s experience is not necessarily representative of all consumers’ experiences and narratives are not verified before publication.





# Data Dictionnary
**Description:** describes the variables meaning.

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



# Dataset Description:
The database encompasses a wide array of complaints related to various financial sectors, including debt collection, credit reporting, mortgages, credit cards, and more. Each week we send thousands of consumers' complaints about financial products and services to companies for response. Those complaints are published here after the company responds, confirming a commercial relationship with the consumer, or after 15 days, whichever comes first. Complaint narratives are consumers' descriptions of their experiences in their own words. By adding their voice, consumers help improve the financial marketplace. The database generally updates daily.  Each complaint entry includes details such as the date received, product type, issue, company involved, consumer's narrative (if consented for publication), company response, and the complaint's current status. This dataset serves as a valuable resource for identifying trends, assessing company practices, and informing policy decisions. 
As of February 22, 2025, the database contains a total of 7,867,198 complaints. The dataset is 1,36 GB in size and available for download in CSV format. The dataset spans from December 1, 2011, to the present, with regular updates to include new complaints.







**Notes:**
- Orders only include completed purchases (not abandoned carts).
- Use `order_date` for time-based reporting.






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





```



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




