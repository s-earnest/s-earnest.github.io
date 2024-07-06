---
title: ' Decission Trees '
author: ernest
date: 2022-03-22 16:20:02 -05:00
last_modified_at: 2023-11-30
categories: [ Notes ]
pin:     # true
math: true
mermaid: true
published: false
tags:   # or [typography, tag-01, tag-02, etc.]
  - decision-trees
  - supervised-learning
  - machine-learning

# image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.

---



### Summary

This algorithm creates a tree-like structure with questions regarding the input posed as tree nodes (example it the input < 2.5?), it is primarily used for classification.


### Inputs

  - Numerical
  - Categorical

### Preprocessing

  - No preprocessing required




DECISION TREE REGRESSION
After you drag a Regression tool onto the canvas, you can select the Decision Tree option in the configuration window to solve a regression problem.

In this example, you predict what the prices of houses are, based on a number of different features, such as condition, area, and number of rooms. (Latitude and longitude data are included because the decision-tree regression can handle nonlinear associations, unlike linear regression.)  Select Run to make predictions.

Select the Browse tool that's connected to the Predict tool to see the predictions. In the results grid, a column called "price_predicted" contains predictions for each row in the dataset. Compare the "price_predicted" column with the "price" column to see how well your model predicts what the prices of houses are.

The decision-tree algorithm separates the data into subsets called “nodes.” It then evaluates the nodes to determine how well they predict the target. The algorithm prunes suboptimal nodes, leaving behind only nodes that best predict the target. The best nodes are called “leaves.” The algorithm relies on leaves to make predictions.

In the context of regression, the decision-tree algorithm determines what nodes produce the best regression lines, rather than what nodes categorize the data properly, as in classification problems.

You can only use decision-tree regression to solve problems that have continuous targets, like forecasting trends. The algorithm performs best when making predictions about features and a target that have non-linear associations. The algorithm doesn't require much processing power compared to many other algorithms.





