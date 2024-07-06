---
title: ' K-Means Clustering '
author: ernest
date: 2020-08-29 16:20:02 -05:00
last_modified_at: 2023-11-30
categories: [ Notes ]
pin:     # true
math: true
mermaid: true
published: false
tags:   # or [typography, tag-01, tag-02, etc.]
  - k-means
  - clustering
  - supervised-learning

# image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.

---



### Summary

An algorithm that classifies a sample based on the category of its K-nearest neighbors, where K is an integer.

It is the most intuitive and easy-to-implement machine learning algorithm out there. Despite its simplicty, it could outperform other, more sophisticated methods. It has been and still, the subject of research in terms of optimization and applications.


### Inputs

  - Numerical
  

### Preprocessing

  - Standardizing the inputs
  

### Distance Metrics

KNN implementation is the distance metric. We are starting with two dimensions, and we introduce the most general form of the distance metrics, the **Minkowski distance**, followed by two special cases: **Manhatan** and **Euclidean** distances.  Then we extend these metrics to three dimensions and conclude by generating to N number of dimensions. 




### How does the KNN classification work?

KNN algorithm classifies a sample based on the classes of the samples that come closest to it. 





### Important steps when creating a model

It is important that these steps are executed in the order given below:
  
  - (1) Create the DataFrame
    > We need to create a **Pandas** DataFrame where all inputs and targets are organized. Pandas DataFrame is not the only way to store a database, but it proves to be very useful. Keep in mind that the train_test_split() method accepts the input and targets in the form of lists, **NumPy** arrays, **SciPy-sparse** matrices, as well as Pandas DataFrames.

  - (2) Data cleansing - checking for null values
    > The steps is part of the data pre-processing procedure. Before moving forward to the next step, do check for any null values in the data. There are various techniques to deal with this issue. One would be to remove the samples containing missing values altogether. However, can be done only if the number of such samples is much smaller than the number of all sample in the dataset. 
    > As a rule of thumb, if the number of samples containing null values is not more than 5% of the total number of samples, then removing them from the database should be safe. If that not the case, statistical methods for filling up the missing values can be used instead.
    
   - (3) Data cleansing - identify outliers
   > This step

   - (4) Split the data
   > item 





