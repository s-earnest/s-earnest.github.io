---
title: ' What is Data Dictionnary '
author: ernest
date: 2021-01-26 16:20:02 -05:00
last_modified_at: 2024-03-23
categories: [ Notes ]
pin:     # true
math: true
mermaid: true
published: true
tags:   # or [typography, tag-01, tag-02, etc.]
  - dictionnary 
  # - tamplate-tag-2
  # - template-tag-3

image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.

---


### Summary

Data dictionnary came with creating DBMS in the 1960's. Organization's created them to know what and how their data was structured. Data dictionnary describe data and this include information about the data, data type, structure details and security restrictions. 


Data dictionnary support the data structure, the technical infrastructures that connect the business strategy and the date strategy with the technical execution.
High-quality metadata describes data and their relationships. Engineers and other workerss use this information to build, troubleshooting, maintaining, and improving the data solution foundations.


Data dictionnaries covers how technical entity works, and as the data changes all the time, many data dictionnaries nned to be update and aligned with theses changes, leveraging automated tools. Changes can include at least one of these three categories:

  - (1) Business Concepts
    - Associatinos
    - Components
    - Contraints
    - Elements
    - Roles
  - (2) Data Types
    - Active dictionnaries
    - Passive dictionaries
  - (3) Message Elements
    - Message Components
    - Contraints
    - Message Elements



### Why Businesses use them.

  - Ensure agreement between the business facing content and technical facing data
  - Reduce the risk of downstream errors and rework
  - Provide valuable reports and dashboard components
  - Assure smoother database upgrades
  - Guarantee more meaningful metadata

#### Data Dictionary Use Cases

  - The USGS documents its data dictionnary and proivdes public access to promote sharing of its common data structures.
  - Medicare data dictionnaries play a crucial role in communicating information about patient deaths.
  - Cloud computing trend


### What's the difference between Data Dictionnaries from Data Catalogs?

While data dictionnaries and catalogs oeverlap in their content and definitions. They have different purposes, audiences, and focuses. **Data Dictionnary** provide technical instructions to build, update, use and maintain dataarchitecutre. The informaiton is most relevant to engineers who do activities like integrating dataset betweens systems. **Data Catalogs** are built off data dictionnaries, and are more user-friendly interface which makes it easier to search and retrieve relevant data sets. 


### Data Dictionnary vs Data Models.

Data dictionnary is a type of model -a physical model, and it does not mean the same thing as a data model data. Conceptual data models describe business needs at a high level, defining the database's structure and organization. Logical models cover how to meet those requirements.


Data dictionnary is only one type of physical data model, for example JavaScript Object Notation (JSON) and flow charts may represent a physical data model.





### What's the key function of Data Dictionnary?

Data dictionnary is use to share the understanding of the metadata and the system impoliemntation of their data solutions. However, the dictionnary ensure efficient Data Architecture engineering. It accomplishes the goal by aligning any fixes and improviements to the orginal design and purpose.

The use of data dictionnary is the gain on Data Quality when they are used and updated from one place. Furthemore, they have an easier time improving and making future data infrastructure when researching from a standardized dictionnary version.




### (2) Types of Data Dictionnary.

#### Active Data Dictionnary

  DBMS offers an integrated data dictionnary as the reference automatically updates as changes and providing the most up-to-date definitions. IT usually manages this kind of dictionnary because its interactive interface requires more advanced technical knowledge.

  **Active** dictionnary prohibits any code executions as it can compromise the data integrety. 

#### Passive Data Dictionnary 

  **Passive** data dictionnary is the metadata reference where updates and maintenance happens outside the bDMS. This manipulation requires manual intervention to keep it up to date.

  Users access passive data dictionnaries through an application where the user update a statics document, like a pdf or a binder full of documents. Typically, organization's do not use passive data dictionary as a sole source of truth. Since update in passive data dictionnary are manual, there could be a significant lag of time in reflecting the changes. This situation happens when the responsible person may not have the time to update the dictionnary immediately after the change is implemented. The delay can lead with discrepancies between the dicionnary and the current state of the data.






<!-- 

A data dictionary is like a map for your data. It’s a centralized repository that stores crucial information about the structure, organization, and meaning of data within a database or information system. Think of it as a detailed catalog that outlines the various elements and attributes present in your dataset, along with their definitions and characteristics.

In simpler terms, imagine you have a massive bookshelf filled with different books. Each book represents a database or dataset, and every page within those books contains specific information. Now, think of the data dictionary as an index at the beginning of each book. It lists all the chapters (tables) and sections (fields) within those chapters, along with a brief description of what you can find in each one.

For instance, if you’re dealing with a customer database, the data dictionary would specify the names of the tables (like "Customers" or "Orders") and the attributes within each table (like "Customer ID," "Name," "Address," etc.). It might also provide additional details such as data types (like text, number, date), allowed values, constraints (like maximum length or format), and relationships between different tables.

Having a data dictionary is incredibly beneficial for both developers and users. Developers can use it as a reference guide when designing or modifying databases, ensuring consistency and accuracy in data management. Meanwhile, users can leverage it to understand the structure of the data they’re working with, making it easier to query, analyze, and interpret information effectively.

Overall, a data dictionary serves as a vital tool for maintaining data integrity, facilitating collaboration between different stakeholders, and promoting better decision-making based on reliable and well-understood data.

-->


<!-- 
> DISCLAIMER
- The information contained in this report/article/note is meant for the purposes of information only and is not intended to be investment, legal, tax or other advice, nor is it intended to be relied upon in making an investment or other decision. This report is provided with the understanding that the authors and publishers are not providing advice on legal, economic, investment or other professional issues and services. 
- I am not responsible for the content of websites and information resources that may be referenced in the report. The access provided to these sites or the provision of such information resources does not constitute an endorsement by myself. of the information contained therein. However, unless expressly stated otherwise, the opinions, recommendations, findings, interpretations and conclusions expressed in this report represent the views of myself. 
- The inclusion of company examples does not in any way constitute an endorsement of these organisations by myself or the signatories to the Principles for Responsible Investment. While I have endeavoured to ensure that the information contained in this report has been obtained from reliable and up-to-date sources, the changing nature of statistics, laws, rules and regulations may result in delays, omissions or inaccuracies in information contained in this report. I am not responsible for any errors or omissions, or for any decision made or action taken based on information contained in this report, or for any loss or damage arising from or caused by such decision or action. All information in this report is provided “as-is”, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, expressed or implied.
{: .prompt-info }

##  Footnote

[^1]: The footnote source
[^2]: The 2nd footnote source


   -->




