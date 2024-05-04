---
title: ' Machine Learning '
author: ernest
date: 2020-01-10 16:20:02 -05:00
last_modified_at: 2023-11-30
categories: [ Notes ]
pin:     # true
math: true
mermaid: true
published: false
tags:   # or [typography, tag-01, tag-02, etc.]
  - machine-learning
  # - tamplate-tag-2
  # - template-tag-3

# image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.

---



> This is a note.
{: .prompt-tip }


### Summary


MACHINE LEARNING WORKFLOW

1. Use the Input Data tool to bring the dataset you want to use to train your model into Designer. The dataset in this workflow contains information related to different species of the iris flower.

2. Use the Assisted Modeling tool to start creating a machine-learning model that relies on features of different iris flowers, such as petal length and width, to recognize what sub-species a flower belongs to. Select the Assisted Modeling tool, then select the target “Species” from the dropdown.

3. Use the Transformation tool to prepare your data, making it possible for a machine-learning algorithm to train your model. Preparations include selecting features, setting your data types, cleaning up missing values, and encoding your data into something machine readable. Often you use several Transformation tools in a row to prepare your data.

4. Use the Classification tool to select what machine-learning algorithm you want to use to train your model. For this dataset, use the random-forest algorithm, because one association between target categories (in other words, the association between Iris-versicolor and Iris-virginica) is nonlinear.

5. Use the Fit tool to train your model.

6. Use the Predict tool to test your model, which can now predict what sub-species of Iris a flower belongs to, based on the features you’ve chosen.






