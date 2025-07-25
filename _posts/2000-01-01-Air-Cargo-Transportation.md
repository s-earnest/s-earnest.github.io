---
title: ' Air Cargo Transportation  '
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
  - air-cargo
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
  # reference 

---



# Description


Air Cargo is an aviation company that provides air transportation services for passengers and freight. Air Cargo uses its aircraft to provide different services with the help of partnerships or alliances with other airlines. The company wants to prepare reports on regular passengers, busiest routes, ticket sales details, and other scenarios to improve the ease of travel and booking for customers.


As the dataset was relatively small, I checked for the following.

1. Duplicate data
2. Missing data
3. Errors in data

While there was no 1. and 2. There were mulitple errors I cleaned for 3.

1. Incorrect spellings 1 Count of British Airways and 9 counts of Bristish Airways. Amended to all be British. Brand field in ticket_details
2. Business spelled as Bussiness in Class_id field in ticket_details. Amended spelling to business


Files list: 
(1) customer.csv
(2) passengers_on_flights.csv
(3) routes.csv
(4) ticket_details.csv




# Data dictionary


- Dataset description:

- customer: Contains the information of customers
•	customer_id – ID of the customer
•	first_name – First name of the customer
•	last_name – Last name of the customer
•	date_of_birth – Date of birth of the customer
•	gender – Gender of the customer
 
- passengers_on_flights: Contains information about the travel details
•	aircraft_id – ID of each aircraft in a brand
•	route_id – Route ID of from and to location
•	customer_id – ID of the customer
•	depart – Departure place from the airport
•	arrival – Arrival place in the airport
•	seat_num – Unique seat number for each passenger
•	class_id – ID of travel class
•	travel_date – Travel date of each passenger
•	flight_num – Specific flight number for each route
 
 
- ticket_details: Contains information about the ticket details
•	p_date – Ticket purchase date
•	customer_id – ID of the customer
•	aircraft_id – ID of each aircraft in a brand
•	class_id – ID of travel class
•	no_of_tickets – Number of tickets purchased
•	a_code – Code of each airport
•	price_per_ticket – Price of a ticket
•	brand – Aviation service provider for each aircraft
 
- routes: Contains information about the route details
•	Route_id – Route ID of from and to location
•	Flight_num – Specific flight number for each route
•	Origin_airport – Departure location
•	Destination_airport – Arrival location
•	Aircraft_id – ID of each aircraft in a brand
•	Distance_miles – Distance between departure and arrival location



# Approach

- Project Objective:

The goal is to focus on identifying the regular customers to provide offers, analyze the busiest route which helps to increase the number of aircraft required and prepare an analysis to determine the ticket sales details. This will ensure that the company improves its operability and becomes more customer-centric and a favorable choice for air travel.



# Key insights












# Recommendations

















































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

- item



# Contact. 

Have a question? Feel free to send an [email](mailto:s.ernest@gmx.us) or if you prefer a virtual [meeting]( https://calendly.com/s-earnest/30min ){:target="_blank"}




# Footnote

[^1]: Testing Conversion Funnels is about understanding and optimizing each step of the user's experience on their journey toward purchasing our products. 



