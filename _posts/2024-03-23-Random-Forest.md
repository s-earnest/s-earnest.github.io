---
title: ' Random Forest '
author: ernest
date: 2020-12-04 16:20:02 -05:00
last_modified_at: 2023-11-30
categories: [ Notes ]
pin:     # true
math: true
mermaid: true
published: true
tags:   # or [typography, tag-01, tag-02, etc.]
  - random-forest
  - machine-learning
  # - supervised-learning

# image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.

---




### Summary

Algorithm made up of many decision trees. Its results is determined either by the average of all outputs or the most popular outcome. **Bootstrap aggregating** generates different datasets form the original and feeds them to the trees. A subset of features is chosen at random for each tree.

The goal is to reduce overfifting and improve accuracy.


### Inputs

  - Numerical
  - Categorical

### Preprocessing

  - No preprocessing required
  


RANDOM FOREST
After you drag a Classification tool onto the canvas, you can select the Random Forest option in the configuration window to solve a binary or multiclass classification problem.

In this example, you predict what species an iris flower is, based on four features: petal length, petal width, sepal length, and sepal width. Select Run to make predictions.

Select the Browse tool that is connected to the Predict tool to see the predictions. In the results grid, the column “Species_predicted” contains predictions for each row in the dataset. Compare the “Species_predicted” column with the “Species” column to see how well the model predicts what species an iris flower is.

The random-forest algorithm randomly samples the data, creates decision trees for all of those samples, and then averages the results to determine what features best predict the target. The algorithm doesn't do anything else to manage the results from the decision trees.

You can use the random-forest algorithm for binary or multiclass classification. The algorithm performs best when making predictions about features and a target that have non-linear associations. The algorithm requires more processing power than others, such as logistic regression and decision tree.



