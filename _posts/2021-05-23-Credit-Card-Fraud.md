---
title: ' Credit Card Fraud Detection '
author: ernest
date: 2024-06-11  16:20:02 -05:00
last_modified_at: 2024-06-28
categories: [ Work ]
pin:     # true
math: true
mermaid: true
published: false
tags:   # or [typography, tag-01, tag-02, etc.]
  - credit-card 
  - fraud
  # - template-tag-3

image: 
  path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.

---



### Summary

This is a simulated credit card transaction dataset containing legitimate and fraud transactions from the period 1st Jan 2019 - 31st Dec 2020. It covers credit cards of 1000 customers doing transactions with a pool of 800 merchants.

The purpose of this project is to detect the fraudulent transactions made by credit cards by the use of machine learning techniques, to stop fraudsters from the unauthorized usage of customers’ accounts. The increase of credit card fraud is growing rapidly worldwide, which is the reason actions should be taken to stop fraudsters. Putting a limit for those actions would have a positive impact on the customers as their money would be recovered and retrieved back into their accounts and they won’t be charged for items or services that were not purchased by them which is the main goal of the project. Detection of the fraudulent transactions will be made by using three machine learning techniques KNN, SVM and Logistic Regression, those models will be used on a credit card transaction dataset.






> All statements are my own, and do not necessarily reflect the opinion(s) of the past or current employer, or previous or current educational institution. The information contained in this report/article/note is meant for the purposes of information only and is not intended to be investment, legal, tax or other advice, nor is it intended to be relied upon in making an investment or other decision. This report is provided with the understanding that the authors and publishers are not providing advice on legal, economic, investment or other professional issues and services.
{: .prompt-info }




<!-- 

https://github.com/juniorcl/transaction-fraud-detection


1.0 Business Problem
The Blocker Fraud Company is a company specialized in detecting fraud in financial transactions made through mobile devices. The company has a service called "Blocker Fraud" which guarantees the blocking of fraudulent transactions.

The business model of the company is of the Service type with the monetization made by the performance of the service provided, in other words, the user pays a fixed fee on the success in detecting fraud in the customer's transactions.

However, the Blocker Fraud Company is expanding in Brazil and to acquire customers more quickly, it has adopted a very aggressive strategy. The strategy works as follows:

The company will receive 25% of the value of each transaction truly detected as fraud;

The company will receive 5% of the value of each transaction detected as fraud, but the transaction is truly legitimate.

The company will return 100% of the value to the customer, for each transaction detected as legitimate, however the transaction is truly a fraud.

With this aggressive strategy, the company assumes the risks of failing to detect fraud and is remunerated for assertive fraud detection.

For the client, it is an excellent business to hire the Blocker Fraud Company. Although the fee charged is very high on success, 25%, the company reduces its costs with fraudulent transactions detected correctly and even the damage caused by an error in the anti-fraud service will be covered by the Blocker Fraud Company itself.

For the company, in addition to getting many customers with this risky strategy to guarantee reimbursement in the event of a failure to detect customer fraud, it depends only on the precision and accuracy of the models built by its Data Scientists, in other words, how much the more accurate the “Blocker Fraud” model, the greater the company's revenue. However, if the model has low accuracy, the company could have a huge loss.

2.0 Business Assumptions
Fraud prevention is the implementation of a strategy to detect fraudulent transactions or banking actions and prevent these actions from causing financial damage and the reputation of the client and the financial institution.

There are always financial frauds and They can happen through virtual and physical ways. So the investment in security has been increasing.

The losses caused by fraud can reach R$ 1 billion - which corresponds to half the amount that institutions invest in technology systems aimed at information security every year, according to Febraban's 2020 Banking Technology Survey.

3.0 Solution Strategy
My solution to solve this problem will be the development of a data science project. This project will have a machine learning model which can predict whether a transaction is fraudulent or not.

Step 01. **Data Description**: 
  In this first section the data will be collected and studied. The missing values will be threated or removed. Finally, a initial data description will carried out to know the data. Therefore some calculations of descriptive statistics will be made, such as kurtosis, skewness, media, fashion, median and standard desviation.

Step 02. **Feature Engineering**: 
  In this section, a mind map will be created to assist the creation of the hypothesis and the creation of new features. These assumptions will help in exploratory data analysis and may improve the model scores.

Step 03. Data Filtering: Data filtering is used to remove columns or rows that are not part of the business. For example, columns with customer ID, hash code or rows with age that does not consist of human age.

Step 04. Exploratory Data Analysis: The exploratory data analysis section consists of univariate analysis, bivariate analysis and multivariate analysis to assist in understanding of the database. The hypothesis created in step 02 will be tested in the bivariate analysis.

Step 05. Data Preparation: 
In this fifth section, the data will be prepared for machine learning modeling. Therefore, they will be transformed to improve the learning of the machine learning model, thus they can be encoded, oversampled, subsampled or rescaled.

Step 06. Feature Selection: 
After the data preparation in this section algorithms, like Boruta, will select the best columns to be used for the training of the machine learning model. This reduces the dimensionality of the database and decreases the chances of overfiting.

Step 07. Machine Learning Modeling: 
Step 07 aims to train the machine learning algorithms and how they can predict the data. For validation the model is trained, validated and applied to cross validation to know the learning capacity of the model.

Step 08. Hyparameter Fine Tuning: 
Firstly selected the best model to be applied in the project, it's important to make a fine tuning of the parameters to improve its scores. The same model performance methods apllied in the step 07 are used.

Step 09. Conclusions: 
This is a conclusion stage which the generation capacity model is tested using unseen data. In addition, some business questions are answered to show the applicability of the model in the business context.

Step 10. Model Deploy: 
This is the final step of the data science project. So, in this step the flask api is created and the model and the functions are saved to be implemented in the api.


Models used
  - dummny model
  - logistic regression
  - kNN
  - SVM
  - Random Forest
  - XGBoost
  - LightGBM
  - 



7.0 Business Results
The company receives 25% of each transaction value truly detected as fraud.
The company can receive R$ 60,613,782.88 detecting fraud transactions.

The company receives 5% of each transaction value detected as fraud, however the transaction is legitimate.
For wrong decisions, the company can receive R$ 183,866.98.

The company gives back 100% of the value for the customer in each transaction detected as legitimate, however the transaction is actually a fraud.
The company must return the amount of R$ 3,546,075.42.

What is the model's Precision and Accuracy?
For unseen data, the values of balanced accuracy is equal 91.5% and precision is equal 94.4%.

How reliable is the model in classifying transactions as legitimate or fraudulent?
The model can detect 76.3% +/- 3.5% of the fraud. However it detected 0.829 of the frauds from a unseen data.

What is the revenue expected by the company classify 100% of transactions with the model?
Using the model the company can revenue R$ 60,797,649.86. Using the currently method to detect fraud the revenue is 0.00.

What is the loss expected by the Company if it classifies 100% of the transactions with the model?
For wrong classifications the company must return the amount of R$ 3,546,075.42. In contrast, for wrong classifications using the currently method, the company must return the amount of R$ 246,001,206.94.

What is the profit expected by the blocker fraud company when using the model?
The company can expect the profit of R$ 57,251,574.44. The profit value of the currently method is R$ -246,001,206.94.

8.0 Conclusions
The data is extremaly unbalanced, however it was possible to make all the data analysis and create with good scores.

The company may expect a revenue of R$ 57,251,574.44. This result may show the capacity of a project of data science and help the company.

9.0 Lessons Learned
Even when the classes are unbalanced, it's possible to create a model with good scores. It is possible to create a model that can classify classes with less than 1% of samples.

10.0 Next Steps
Test at most more 10 hypothesis.

Implement oversampling or subsampling techniques to improve the model scores.

License
This project is licensed under the MIT License - see the LICENSE file for details






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




## Reference

  - [Codebook](/assets/docs/paper1.pdf){:target="_blank"}
  - item 







### Contact. 

Have a question? Feel free to send an [email](mailto:s.ernest@gmx.us) or if you prefer a virtual [meeting]( https://calendly.com/s-earnest/15min ){:target="_blank"}




