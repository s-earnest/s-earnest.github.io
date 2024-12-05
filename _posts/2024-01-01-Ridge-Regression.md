---
title: ' Ridge Regression '
author: ernest
date: 2024-07-22 16:20:02 -05:00
last_modified_at: 2024-11-30
categories: [ Notes ]
pin:     # true
math: true
mermaid: true
published: true
tags:   # or [typography, tag-01, tag-02, etc.]
  - machine-learning
  - supervised-learning
  - ridge-regression

# image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.

---



### Summary

  Ridge regression is a linear regression technique to adress multicollarity[^1] or overfiftting in statistical models. It's particularly useful when dealing with dataset where the independend variable is highly correlated (multicollarity) or when is a larger number of predictors which give a potential to overfitting. 

  - Ridge regression does **not** perform feature selection but rather shrinks all coefficients towards zero, and the key hyperparameter is \( \lambda \), which controls the strength of the regularization.
  
  - By adding a penalty to the loss function, ridge regression provides a way to make regression models more robust and effective, especially when faced with complex, high-dimensional datasets.


### Inputs

  - Numerical 
  - Categorical

### Preprocessing

  - Standardization
  - Removing irrelavant features






