---
title: ' Telco Customer Churn '
author: ernest
date: 2023-11-19  16:20:02 -05:00
last_modified_at:  2024-03-08
categories: [ Work ]
pin:     # true
math: true
mermaid: true
published: false
tags:   # or [typography, tag-01, tag-02, etc.]
  - customer-retention
  # - tamplate-tag-2
  # - template-tag-3

image: 
  # path: /assets/articles/scott-graham-web.png
   path: /assets/sample/coming-soon.png
  # alt: Photo by Scott Graham on Unsplash.

---


### Summary

Customer retention is a challenge for any organization. Companies are studying factors to customer churn, a term used for customers who have moved to another service provide. 

Customer attrition, also known as customer churn, customer tournover, or customer defection is the loss of client or customers. Telephone services companies, internet service provider, pay TV companies, insurance firms, etc. often use customer attrition analysis and customer attrition rates as one of their key business metrics because the cost of retaining an existing customer is far less costing than acquiring a new one. 

Predictive analytics used churn prediction models that preduct customer churn by assessing their propensity of risk to churn. Since these models generate a small prioritzed list of potential defectors, they are effective at focusing on customer retention marketing programs on the subset of the customer base who are most vulnerable to quit. 

In this project, I am to perform a customer analysis and build a model which can predict customer churn, and trying to understand why a specific customer would stop the service and to know their expected lifetime value. 




### Customer Analysis


 




#### Objective

The objective of this analysis is to utilize non-parametrics and semi-parametric methods of survival analysis to answer the following questions:

  - What is the likelihood of the customer churn changes over time?
  - How we can model the relationship between customer churn, time?
  - What are the significant factor that drive customer churn?
  - What is the survival and hazard curse of a specific customer?
  - What is the expected lifetime value of a customer?






<br>
#### Kaplan-Meier Survival Curve


![text](/assets/articles/scott-graham-web.png)


<br>
From above graph, we can say that:

  - As expected, the telcom, churn is relatively low. The company was able to retain more than 60% of its customers even after 72 months.
  - There is constant decrease in survival probability between 3-60 months.
  - After 60 months or 5 years survival probability decreases with a higher rate.



<div style="clear: both;">
  <div style="float: bottom; margin-right 1em;">
    <img src="/assets/articles/scott-graham-web.png" alt=" this is caption ">
  </div>
  <div>
    <h3> This is an image. Some more text that will appear to the left of the image.</h3>
  </div>
</div>



<p float="left">
  <img src="/assets/articles/scott-graham-web.png " width="33%" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="/assets/articles/scott-graham-web.png " width="33%" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="/assets/articles/scott-graham-web.png " width="33%" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="/assets/articles/scott-graham-web.png " width="33%" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="/assets/articles/scott-graham-web.png " width="33%" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="/assets/articles/scott-graham-web.png " width="33%" />
</p>

size image ( 1095 w x 543 h)  144 dpi or higher




<!-- 
> DISCLAIMER
- The information contained in this report/article/note is meant for the purposes of information only and is not intended to be investment, legal, tax or other advice, nor is it intended to be relied upon in making an investment or other decision. This report is provided with the understanding that the authors and publishers are not providing advice on legal, economic, investment or other professional issues and services. 
- I am not responsible for the content of websites and information resources that may be referenced in the report. The access provided to these sites or the provision of such information resources does not constitute an endorsement by myself. of the information contained therein. However, unless expressly stated otherwise, the opinions, recommendations, findings, interpretations and conclusions expressed in this report represent the views of myself. 
- The inclusion of company examples does not in any way constitute an endorsement of these organisations by myself or the signatories to the Principles for Responsible Investment. While I have endeavoured to ensure that the information contained in this report has been obtained from reliable and up-to-date sources, the changing nature of statistics, laws, rules and regulations may result in delays, omissions or inaccuracies in information contained in this report. I am not responsible for any errors or omissions, or for any decision made or action taken based on information contained in this report, or for any loss or damage arising from or caused by such decision or action. All information in this report is provided “as-is”, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, expressed or implied.
{: .prompt-info }

   -->


#### Survival Regression

I use cox-proportional hazar model to perform a survival regression analysis on customer data. This model is used to related several risk factor or exposures simultaneously to survival time. 

In Cox proportional hazazrds regression model, the measure of effect is the hazard rate, which is the risk of probability of suffering the event of interest that the participant has survived up to a specific time. 






#### Customer Lifetime Value

To calculate customer lifetime value, I would multiply the Montly charges the customer is paying to Telcom and the expected life time of the customer.

I utilize the survival function of a customer to calculate its expected life time. I would like to be limit bit conservative and consider the customer is churned when the survival probability of him is 10%.



#### Tenure Distribution by Various Services





#### Internet Service by Contract Type






#### Payment method by Contract type


> The modelling, I will use tress based **Ensemble method** as we do not have linearity in this classification problem. Also, we have a class imbalance of 1:3 and the combat it I will assign class weightage of 1:3 which means false negatives are 3 times costlier than false positive. 
{: .prompt-tip }




#### Monthly Charges





#### Modeling








[View the Codebook](/assets/docs/paper1.pdf){:target="_blank"}



<br>

### Contact information. 

Have a question? Feel free to send an [email](mailto:s.ernest@gmx.us) or if you prefer a virtual [meeting]( https://calendly.com/s-earnest/15min ){:target="_blank"}





