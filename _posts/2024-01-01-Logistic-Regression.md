---
title: ' Logistic Regression '
author: ernest
date: 2023-05-10 16:20:02 -05:00
last_modified_at: 2023-11-30
categories: [ Notes ]
pin:     # true
math: true
mermaid: true
published: false
tags:   # or [typography, tag-01, tag-02, etc.]
  - logistic-regression
  - supervised-learning
  - machine-learning

# image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.

---



### Summary


Classification algorithm that predicts the probability of an event occuring using a logistics function.
Logistic regression can transform into its logit form, where the log of the odds is equal to a linear model.

Applied whenever we want to predict categorical outputs.


### Inputs
  - Numerical
  - Categorical


### Preprocessing 
  - Standardized the inputs
  - Removing irrelevant features


### Avoid Overfitting
  - Regularization





LOGISTICS REGRESSION
After you drag a Classification tool onto the canvas, you can select the Logistic Regression option in the configuration window to solve a binary-classification problem.

In this example, you predict whether mushrooms are poisonous or edible based on a number of different features, such as odor, size, and color. Select Run to make predictions.

Select the Browse tool that's connected to the Predict tool to see the predictions. In the results grid, a column called "class_predicted" contains predictions for each row in the dataset. Compare the "class_predicted" column with the "class" column to see how well your model predicts whether mushrooms are poisonous or edible.

The logistic-regression algorithm relies on a sigmoid function to separate the data into two groups (in this example, "poisonous" and "edible"). Observations that fall on one side of the sigmoid represent one category; those that fall on the other side represent a second category. The features you choose to use in your model define the curve of the sigmoid.

You can only use the logistic-regression algorithm for binary classification. The algorithm performs best when making predictions about features and a target that have linear associations. The algorithm doesn't require much processing power compared to many other algorithms.








