---
title: ' Techniques and Methods in How to Detect Outliers '
author: ernest
date: 2022-02-21 16:20:02 -05:00
last_modified_at: 2024-03-08
categories: [ Notes ]
pin:     # true
math: true
mermaid: true
published: true
tags:   # or [typography, tag-01, tag-02, etc.]
  - outliers 
  - machine-learning
  # - template-tag-3

# image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.

---




### Techniques and Methods in How to Detect Outliers.

Anomalies and outliers generate big issues when training machine learning algorithms or when we are applying statistical techniques. Outliers are often results of errors in measurements. 

Instead outlier give us information about anomalies in the whole system. so the detection of outlier is a valuable step because of the additional observations they can provide about the dataset. 



## Methods. 

Four different outlier detection techniques: 

#### Numeric Outlier, 

This is a simple, nonparametric outlier detection method in a one dimensional feature space. Here outliers are calculated by means of the Inter-Quartile Range (IQR).

#### Z-Score, 

Z-score is a parametric outlier detection method in a one or low dimensional feature space. This approach assumes a Gaussian distribution of the data. The outliers are the data points that are in the tails of the distribution and therefore far from the mean.

#### DBSCAN and 

This technique is based on the DBSCAN clustering method. DBSCAN is a nonparametric, density based outlier detection method in a one or multi dimensional feature space. Clustering technique in which all data points are defined either as Core Points, Border Points, or Noise Points. 


#### Isolation Forest.

This is a nonparametric method for large datasets in a one or multi dimensional feature space. and the importance of this methods is the isolation number.  It requires a fewer splits to isolate the outlier than it does to isolate a nonoutlier. The threshold is defined on the estimated percentage of outliers in the data. 




### Contact information. 

Have a question? Feel free to send an [email](mailto:s.ernest@gmx.us) or if you prefer a virtual [meeting]( https://calendly.com/s-earnest/15min ){:target="_blank"}


