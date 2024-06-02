---
title: ' Parametrics and Non-parametric Models '
author: ernest
date: 2022-01-23 16:20:02 -05:00
last_modified_at:  2024-03-07
categories: [ Notes ]
pin:     # true
math: true
mermaid: true
published: true
tags:   # or [typography, tag-01, tag-02, etc.]
  - parametric
  - non-parametric
  - machine-learning

# image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.

---



### Parametric and Non-parametric Models in Machine Learning


Machine learning can be briefed as learning a function (f) that maps input variables (X) and the following results are given in output variables (Y).



### What is a parameter in a machine learning model?

A model parameter is a configuration variable that is internal to the model and whose value can be estimated from the given data.

- They are required by the model when making predictions.
- Their values define the skill of the model on your problem.
- They are estimated or learned from historical training data.
- They are often not set manually by the practitioner.
- They are often saved as part of the learned model.

#### The examples of model parameters include:

- The weights in an artificial neural network.
- The support vectors in a support vector machine.
- The coefficients in linear regression or logistic regression.



### What is a parameter in a machine learning model?

A model parameter is a configuration variable that is internal to the model and whose value can be estimated from the given data.

- They are required by the model when making predictions.
- Their values define the skill of the model on your problem.
- They are estimated or learned from historical training data.
- They are often not set manually by the practitioner.
- They are often saved as part of the learned model.

#### Some more examples of popular nonparametric machine learning algorithms are:

- k-Nearest Neighbors
- Decision Trees like CART and C4.5
- Support Vector Machines (SVM)





### What is the parametric model?

A learning model that summarizes data with a set of fixed-size parameters (independent on the number of instances of training).Parametric machine learning algorithms are which optimizes the function to a known form.

Some more examples of parametric machine learning algorithms include:

- Logistic Regression
- Linear Discriminant Analysis
- Perceptron
- Naive Bayes
- Simple Neural Networks



### Parametric vs. Nonparametric modeling

Parametric models deal with discrete values, and nonparametric models use continuous values.
Parametric models are able to infer the traditional measurements associated with normal distributions including mean, median, and mode. While some nonparametric distributions are normally oriented, often one cannot assume the data comes from a normal distribution.

Feature engineering is important in parametric models. Because you can poison parametric models if you feed a lot of unrelated features. Nonparametric models handle feature engineering mostly. We can feed all the data we have to those non-parametric algorithms and the algorithm can ignore unimportant features. It would not cause overfitting.
A parametric model can predict future values using only the parameters. While nonparametric machine learning algorithms are often slower and require large amounts of data, they are rather flexible as they minimize the assumptions they make about the data.

In this post, we have learned that parametric methods make large assumptions about the mapping of the input variables to the output variable and in turn are faster to train, require less data but may not be as powerful. Nonparametric methods make few or no assumptions about the target function and in turn require a lot more data, are slower to train, and have a higher model complexity but can result in more powerful models.








