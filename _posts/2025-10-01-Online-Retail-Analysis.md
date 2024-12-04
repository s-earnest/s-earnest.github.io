---
title: ' Online Shopper Segmentation (2) '
author: ernest
date: 2025-01-10 16:20:02 -05:00
last_modified_at: 2024-11-30
categories: [  ]
pin:     # true
math: true
mermaid: true
published: false
tags:   # or [typography, tag-01, tag-02, etc.]
  # - item
  - clustering-analysis
  - customer-analytics
  - k-mean
  - rfm-analysis


# image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.

---








# Online Shopper Segmentation
I will use the newly available **online_retail_ii.xlsx** dataset available at the UCI repository: https://archive.ics.uci.edu/dataset/502/online+retail+ii.

This Online Retail II data set contains all the transactions occurring for a UK-based and registered, non-store online retail between 01/12/2009 and 09/12/2011.The company mainly sells unique all-occasion gift-ware. Many customers of the company are wholesalers.

Fields available:
- ***InvoiceNo***: Invoice number.A 6-digit integral number is uniquely assigned to each transaction. If this code starts with the letter 'c', it indicates a cancellation.
- ***StockCode***: Product (item) code. Nominal. A 5-digit integral number uniquely assigned to each distinct product.
- ***Description***: Product (item) name. Nominal.
- ***Quantity***: The quantities of each product (item) per transaction. Numeric.
- ***InvoiceDate***: Invoice date and time. Numeric. The day and time when a transaction was generated.
- ***UnitPrice***: Unit price. Numeric. Product price per unit in sterling (Â£).
- ***CustomerID***: Customer number. Nominal. A 5-digit integral number uniquely assigned to each customer.
- ***Country***: Country name. Nominal. The name of the country where a customer resides.



```

from datetime import timedelta
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns




```




```

df_all = pd.read_excel('./online_retail_II.xlsx', sheet_name=None, index_col=None, header=0)
for k, v in df_all.items():
    v['Year'] = k

df = pd.concat(df_all, ignore_index=True).dropna()
print('# of records', len(df))


```



```
df.head()

```

# 2. Aggregate at the Customer Level
To conduct an RFM analysis we need to create an aggregate based on customers as that is the level of aggregate we will be working with. We will assume that a customer will come from the same country. Meaning, we do not have a customer ID coming from two different countries.

## 2.1 Creating the ***Total*** column
Because the data does not contain the value of a purchase, we need to create a ***Total*** column which is: **Total=Price*Quantity***.

**NOTE:** Remmber this is expressed in pounds.





```

df['Total']=df['Quantity']*df['Price']
df.head()

```




## 2.2 Dealing with the Date for Recency
Recency is ordered differently from Frequency and Monetary: the most recent purchase is the most important. So we need to ensure this is what we are measuring.

### 2.2.1 Checking the `InvoiceDate` type.




```

df['InvoiceDate']

```






The `InvoiceDate` column looks good as it is a DateTime object.

### 2.2.2 Calculate the most recent date of purchase
Let's calculate the beginning of the period.

Because this represent the most recent purchase, we will add one day to this date so that when we calculate the number of days from the most recent purchase, the record with the most recent purchase will result, as a purchase that took place in the last day instead of in the last zero days. Not a big deal, but it is more elegant.


```

most_recent_purchase = df['InvoiceDate'].max() + timedelta(days = 1)
print('Most recent purchase:', most_recent_purchase)

```




## 2.3 Aggregate at the customer Level
We want to aggregate the customers, identified by Customer ID, by their recency.

To do this, we will calculate the number of days elapsed from the most recent purchase (already identified by `most_recent_purchase`).



```

df_agg = df.groupby(['Customer ID'], as_index=False).agg({'InvoiceDate': lambda x: (most_recent_purchase-x.max()).days, 'Invoice': 'count', 'Total': 'sum'})
df_agg.rename(columns={'InvoiceDate':'Recency', 'Invoice':'Frequency','Total':'Monetary'}, inplace=True)
df_agg.head()


```






Sometimes for Monetary, you can calculate the average value of an invoice instead of its total value.

**Pros**:

  - **Sensitivity to Product Mix**:

     The average invoice value is sensitive to the mix of products purchased and can help in understanding purchasing patterns, especially in businesses with a wide range of product prices. It can highlight customers who buy more expensive items, even if they buy fewer items.

  - **Reduced Skewness**:
    
     Total invoice value can be highly skewed with few very high values, making the average a better representative of the central tendency of the monetary value. The use of other means like the trimmed mean, which removes the top and bottom k%, might be even better.
    
  - **Better Differentiation:**
     
     In some cases, it can provide better differentiation between customers, especially in scenarios where customers buy a similar number of items but with varying item prices.

**Cons**:

  - **Loss of Information**:
    
     Using average invoice value loses information about the total value and frequency, especially important for businesses where total spend is more important than the price of individual items.

  - **Reduced Sensitivity to Volume**:
  
     The average value is less sensitive to the volume of products bought, which can be a disadvantage if buying in bulk is a significant part of customer behavior.

  - **Not Suitable for Every Business Model**:

     For businesses selling homogeneous products or where bulk purchasing is the norm, the total invoice value may be more insightful.

**Decision Criteria**:

- If the business aims to understand customer preferences regarding the types or prices of products they usually buy, the average invoice value may be more relevant.

- If the business is more focused on the total revenue or profit from each customer, regardless of the types or prices of the products they buy, the total invoice value would be more appropriate.

**Examples**

  - **High-Value Item Purchase**:
       If a customer buys one high-value item per invoice, their average and total will be the same, highlighting their preference for high-value items.
  - **Low-Value Bulk Purchase**:
       If another customer buys many low-value items, their total may be similar, but the average will be much lower, distinguishing their bulk purchasing behavior.

For demonstration, I am reporting the line of code to average out the monetary value field.









```

df_agg['Moneteraty_AVG'] = df_agg.Monetary/df_agg.Frequency
df_agg.head()


```



# 2.3.1 Apply the Period of Interest
As you saw in the learning module, you want to apply the RFM analysis using a meaningful period of time: 3 months, 6 months, etc.




```

# Six months worth of data
period_in_days = 180

print('# of records before:', len(df_agg))
df_agg = df_agg[df_agg['Recency'] <= period_in_days]
print('# of records after:', len(df_agg))


```


# 3. Generating the Quintiles & Associate Scores
You so that a trick to generate the proper segmentations is to create the quintiles of the dimensions generated. We will then use the quintiles to award the proper score according to the quintile bracket.

## 3.1 Generating Recency Score



```
df_agg['R'] = pd.qcut(x=df_agg['Recency'], q=5, labels = range(5, 0, -1))
df_agg.R

```




## 3.3 Generating Frequency Score

```

df_agg['F'] = pd.qcut(x=df_agg['Frequency'], q=5, labels = range(1, 6))
df_agg.F

```


## 3.3 Generating Monetary Score

```
df_agg['M'] = pd.qcut(x=df_agg['Monetary'], q=5, labels = range(1, 6))
df_agg.M


```





```
df_agg.head()

```

# 4. Calculating RFM Score

In this example I will use the Additive method, which is the most common one.



```
# The axis=1 in the sum, indicates that we want to sum the fields by column
df_agg['RFM'] = df_agg[['R', 'F', 'M']].sum(axis=1)
df_agg.head()

```



# 5. Segmentation
With the RFM score in place, we can simply define a function that returns the appropriate segment according to the segmentation strategy saw in the learning module.

**NOTE:** That segmentation was done for explanation purposes only. The table should be adapted to the specific analysis and business context.



```
def get_RFM_Segment(rfm_score):

  if rfm_score > 13:
    return 'Champion'
  elif rfm_score > 10:
    return 'Loyal'
  elif rfm_score > 6:
    return 'Potential'
  else:
    return 'Need Attention'

df_agg['Segment']=df_agg['RFM'].apply(get_RFM_Segment)
df_agg.head()


```


# 6. Display the Segmentation & Generating Summaries

```
# Set Seaborn style
sns.set(style="whitegrid")

# Prepare data
segment_counts = df_agg['Segment'].value_counts()

# Plot
fig, ax = plt.subplots()
ax.pie(segment_counts, labels=segment_counts.index, autopct='%1.1f%%', startangle=90)
ax.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.

plt.title('Customer Segmentation')
plt.show()

```




```

pd.set_option('display.precision', 2)
df_agg.groupby('Segment').agg({'Recency': 'mean', 'Frequency': 'mean', 'Monetary': ['mean', 'count']})


```


# 7. Describing Your Segments
One of the more important step is to elaborate and describe the segments and provide an high level strategy on what to do next.

# Segmentation Results
##1. Champion (425 Customers)

    Recency_average: 7.35
    Frequency_average: 740.49
    Monetary_average: £18,716.38

### Description

Champions are your best customers who have purchased most recently, most often, and are high spenders. With an average monetary value of £18,716.38, this segment is the highest spending and most frequent segment, although it is not the largest in count.

### Points of Interest:

Focus on maintaining relationships and loyalty with this group as they are the most valuable customers.

Offering exclusive deals, previews, or loyalty programs would be effective strategies.
    Understanding their preferences and behaviors will help in personalizing offerings and communications.

## 2. Loyal (819 Customers)

    Recency_average: 26.56
    Frequency_average: 278.29
    Monetary_average: £4,866.99

### Description:
Loyal customers have a decent purchasing frequency and spend reasonably, but their recency is not as high as Champions. They still present a consistent and reliable source of revenue.

### Points of Interest:

Retention strategies are crucial for this segment to prevent churn.

Engagement initiatives like newsletters, updates, and satisfaction surveys can be beneficial.

Upselling and cross-selling can also be effective, given their loyalty.

## 3. Need Attention (960 Customers)

    Recency_average: 82.47
    Frequency_average: 29.99
    Monetary_average: £526.97

### Description:

Customers that need attention have the lowest frequency and monetary value, and they haven’t made purchases recently compared to other segments. They are at risk of churning and may require re-engagement strategies.

### Points of Interest:

Re-engagement strategies, such as personalized offers and communications, can bring them back.

Understanding their needs and preferences can help in creating targeted campaigns.

They are the largest segment in count, thus representing a substantial potential revenue source if re-engaged effectively.

## 4. Potential (1304 Customers)

    Recency_average: 49.69
    Frequency_average: 100.99
    Monetary_average: $1,724.20

### Description:
Potential customers have made purchases more recently than the 'Need Attention' segment and have higher frequency and monetary values. They have the potential to become either Loyal or even Champion if nurtured properly.

### Points of Interest:

Developing relationships with this segment can move them up to a more loyal or champion status.

Monitoring their behavior and preferences can help in creating personalized experiences and offers.

They are the largest segment, thus representing a significant opportunity to increase revenue through proper engagement and personalized marketing strategies.

# Overall Strategy:

## High Value:
Champions and Loyal segments are high-value segments, and the focus should be on retention and maximization strategies like upselling, cross-selling, and loyalty programs.

## Development:
The Potential segment requires developmental strategies like personalized engagement and relationship building to move them to higher value segments.

## Re-engagement and Attraction:
The 'Need Attention' segment needs re-engagement strategies like discounts, offers, and personalized communication to attract them back to making purchases.






# BONUS
We will perform the segmentation using the clustering algorithm kMeans as an alternate way to create customer segments in case a clear business segmentation is not available.

**NOTE:** Because this is a ***Descriptive*** and ***Exploratory*** analytical task, you don't need to split the dataset into training and testing as there is no supervised downstream analysis.







```

from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score

# Selecting the features to include in the model
X = df_agg[['R', 'F', 'M']]

# Finding the optimal number of clusters
silhouette_scores = []
cluster_range = range(3, 10)  # Adjust range as needed

for n_clusters in cluster_range:
    kmeans = KMeans(n_clusters=n_clusters, n_init='auto', random_state=10)
    cluster_labels = kmeans.fit_predict(X)
    silhouette_avg = silhouette_score(X, cluster_labels)
    silhouette_scores.append(silhouette_avg)

# Plot silhouette scores
plt.plot(cluster_range, silhouette_scores, marker='o')
plt.title('Silhouette Method For Optimal Number of Clusters')
plt.xlabel('Number of Clusters')
plt.ylabel('Silhouette Score')
plt.show()

# Choose the number of clusters (k) where the silhouette score is the maximum
optimal_clusters = cluster_range[silhouette_scores.index(max(silhouette_scores))]
print(f'The optimal number of clusters is: {optimal_clusters}')

# Perform k-means clustering with optimal clusters
kmeans = KMeans(n_clusters=optimal_clusters, random_state=10)
df_agg['Segment'] = kmeans.fit_predict(X)

# View the resultant DataFrame
print(df_agg)



```



```



# Set Seaborn style
sns.set(style="whitegrid")

# Prepare data
segment_counts = df_agg['Segment'].value_counts()

# Plot
fig, ax = plt.subplots()
ax.pie(segment_counts, labels=segment_counts.index, autopct='%1.1f%%', startangle=90)
ax.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.

plt.title('Customer Segmentation')
plt.show()

```



```
df_agg[df_agg.Segment == 3].describe()

```




# Exercise
Describe each segment as I did in the previous section and lay down a strategy to address each segments or the most problematic.

# Congratulations
You have carried out a complete RFM analysis in Python and also learn a different way of segmenting your customers using a Clustering algorithm like k-Means.






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










### Summary


This is a sample blog post. Lorem ipsum I can't remember the rest[^1] of lorem ipsum and don't have an internet connection right now. 


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




```python
print("Hello, world!")
for i in range(10):
    print(i)
```




![name of the image](  /assets/sample/coming-soon.png  )
*<small> Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1 </small>*






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






## Resources

  - [ Notebook ]( /assets/projects/wheat_seeds.html ){:target="_blank"}
  - [ nbviewer ]( https://nbviewer.org/ ){:target="_blank"}
      - A simple way to share Jupyter Notebooks

  - [ item ]







# Footnote

[^1]: The footnote source


