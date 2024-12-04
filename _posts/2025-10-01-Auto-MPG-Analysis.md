---
title: ' Auto Mile per Gallog Analysis (6) '
author: ernest
date: 2025-01-10 16:20:02 -05:00
last_modified_at: 2024-11-30
categories: [  ]
pin:     # true
math: true
mermaid: true
published: false
tags:   # or [typography, tag-01, tag-02, etc.]
  - 
  - clustering-analysis
  - customer-analytics
  - k-mean
  - learning


# image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.

---




# Summary



# item





# Outline 




# Methodology





# Observation and insights















# Part I - Example dataset auto-mpg
# (9) k-Means Clustering - Auto mpg dataset example 
In this example we will focus on two variables from the *auto_mpg_train.csv* dataset we created in the previous lab.  


```Python

import time
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
from matplotlib.pyplot import figure
import matplotlib.colors
import pandas as pd
from sklearn.cluster import KMeans
from scipy.spatial import Voronoi, voronoi_plot_2d
from sklearn.decomposition import PCA

```



```Python

df = pd.read_csv('./auto-mpg.csv')

# Get the numeric and categorical variables
num_columns = ['z_mpg', 'z_cyl', 'z_displ', 'z_hp', 'z_weight', 'z_accel', 'z_yr', 'z_origin']
cat_columns = df.select_dtypes(include='object').columns.tolist()


# Standardizing the numerical columns
for col in num_columns:
    col_name = col[2:]
    mean = df[col_name].mean()
    std = df[col_name].std()
    df[col]=(df[col_name]-mean)/std
    df[col].fillna(mean, inplace=True)

```



```Python

df.head()

```


```Python

from sklearn.preprocessing import StandardScaler
df = pd.read_csv('./auto-mpg.csv')

# Get the numeric and categorical variables
num_columns = ['z_mpg', 'z_cyl', 'z_displ', 'z_hp', 'z_weight', 'z_accel', 'z_yr', 'z_origin']
cat_columns = df.select_dtypes(include='object').columns.tolist()

scaler=StandardScaler()
scaler.fit_transform(df[df.select_dtypes(include='number').columns.tolist()])

```

**NOTE:** 
  - There is little value in generating flag variables from the single categorical variable ***name***.


Let's display the data



```python

# Sometimes I use the semi-column at the end of a plot statement to remove the matlibplit annoying output
figure(figsize=(12, 7))
sns.scatterplot(data=df, x="z_hp", y="z_displ", s=200);


```




## Run the k-Means Algorithm
From the scattered plot we might decide to have between 2 to 5 clusters, depending on how you interpret the scatter plot. I will go with 5 to show you a more complex solution, but try several values of k to familiarize with the algorithm. Remember no matter which *k* you provide, kMeans will always generate a solution with that many clusters.

#### Notice how the centroids change and some of the observations move from cluster to cluster

**NOTE 1:** 
  - In this example we use a random initialization with *init='random'*. We also specify a *random_state=seed* so that every time we run the kMeans for different iterations, we initialize the algorithm using the same initial centroids. Otherwise, the algorithm will pick different ones. This is important, as with different initial centroids you will, most likely, obtain different solutions. ***It is a good practice to use a seed, so you can tune the hyperparameters without worrying that the different behaviours are due to a different set of initial clusters.***  
  
  **NOTE 2:** 
    - There are other way to select the initial centroids, and a very popular method is the *seeding method* (***init='kmeans++'***) that choose the initial centroid to better optimize the final solution. It has been proven that this version is able to generate better solutions (M. Shindler, "Approximation Algorithms for the Metric k-Median Problem." UCLA).





```Python

k = 5
ncols = 2
seed = 54321
iterations = 6
nrows = round(iterations/ncols)
markers = ['s', 'D', 'o', '^', '+', 'x']
colors = ['cornflowerblue','green','firebrick','navy', 'lightcoral', 'beige', 'turquoise', 'plum', 'peru', 'yellowgreen']
fig, ax = plt.subplots(nrows=nrows, ncols=ncols, figsize=(15,15))
c=d=0

def getKey(item):
    return item[0]

for i in range(iterations):
    ax[c,d].title.set_text(f'{i+1} iteration points:')
    kmeans = KMeans(n_clusters=k, init='random', max_iter=i+1, n_init=10, random_state = seed)
    kmeans.fit(df[['z_hp', 'z_displ']])
    centroids=kmeans.cluster_centers_
    ax[c,d].scatter(df['z_hp'],df['z_displ'],c=kmeans.labels_, cmap=matplotlib.colors.ListedColormap(colors))
    cluster_centers = sorted(kmeans.cluster_centers_, key=getKey)
    for j in range(k):
        centroids = cluster_centers[j]
        ax[c,d].scatter(centroids[0], centroids[1], s=200, c='red', marker=markers[j])

    d+=1
    if d==ncols:
        c+=1
        d=0

```






## Generate the Voronoi Diagram
We saw that the naive K-means algorithm is also known as the **Lloyd's Algorithm** or **Voronoi Iteration or Relaxation Algorithm** as it generates evenly spaced convex subsets in the Euclidean space.  
  
Visualizing such convex subspace using the Voronoi diagram to validate this theoretical statement visually is helpful.


```Python

figure(figsize=(15, 9))

def plot_data_points():
    plt.scatter(df['z_hp'],df['z_displ'], c=kmeans.labels_, cmap=matplotlib.colors.ListedColormap(colors))


def plot_kmeans_clustering():
    plt.plot(centers[:, 0], centers[:, 1], '+', markersize=15)

centers = kmeans.cluster_centers_
vor = Voronoi(centers)

# Setting the x/y-axis boundaries. Because we have used a z-standardization the interval of [-3,3] makes sense.
# There are not point in [-3,-2] so to make the graph more readable we will use the [-2,3] interval
axes = plt.gca()
axes.set_xlim([-2,3])
axes.set_ylim([-2,3])

# ===================================================================================================================
# CREDITS
#
# Voronoi Tesselation code from: https://github.com/dapregi/toy_projects/blob/master/ipython_nbs/kmeans_voronoi.ipynb
# Author: Daniel Perez-Gil
# ===================================================================================================================

for simplex in vor.ridge_vertices:
    simplex = np.asarray(simplex)
    if np.all(simplex >= 0):
        plt.plot(vor.vertices[simplex, 0], vor.vertices[simplex, 1], 'k-')

center = centers.mean(axis=0)
for pointidx, simplex in zip(vor.ridge_points, vor.ridge_vertices):
    simplex = np.asarray(simplex)
    if np.any(simplex < 0):
        i = simplex[simplex >= 0][0] # finite end Voronoi vertex

        # Getting distance between points
        t = centers[pointidx[1]] - centers[pointidx[0]]

        # Normalizing to a unit vector. To do that, just get the norm
        # (by the Pythagorean theorem), and divide the vector by the norm
        t = t/np.linalg.norm(t)

        n = np.array([-t[1], t[0]]) # normal
        midpoint = centers[pointidx].mean(axis=0)
        far_point = (vor.vertices[i] +
                     np.sign(np.dot(midpoint - center, n)) * n * 50)
        plt.plot([vor.vertices[i,0], far_point[0]],
             [vor.vertices[i,1], far_point[1]], 'k--')

# Plotting
plot_data_points()
plot_kmeans_clustering()
plt.show()

```


**NOTE:** 
  - The choice of k=5 was arbitrary. We will see in an upcoming video how to estimate the parameter k.


## Clustering the Entire Dataset
  - We used two variables to build the clustering solution for visualization and learning purposes.  

  Let's now apply the k-means clustering to include all variables. As mentioned before, the *name* variable does not carry much value and will not considered.  
  
  **NOTE-1**: 
    - I am extending the cluster results obtained using only two variables to the entire dataset containing the eight variables. This is *WRONG* and done only for pedagogical purposes. The cluster analysis must be conducted only using the set of variables you want to carry on into the analysis.  
  
  **NOTE-2**: 
    - To be consistent with the example and display the clustering solution in a 2D scatterplot, I need to reduce the dimensionality of the data points using the PCA technique. You don't need to understand it now; I just want to let you know that I used it to reduce the dimensionality of the data from 8 variables to 2.  
  
  **NOTE-3**: 
    - Let's also learn a new way of creating training and testing datasets using pandas.




```Python

df_train = df.sample(frac=0.7)
df_test = df.drop(df_train.index)

## Remove null values
for c in num_columns:
    df_train[c].fillna(df[c].mean(), inplace=True)
    df_test[c].fillna(df[c].mean(), inplace=True)

# Train the model using the training set
k=3
kmeans = KMeans(n_clusters=k, init='random', max_iter=100, n_init=10, random_state = 0)
model = kmeans.fit(df_train[num_columns])

# Apply the model on the testing set
solution = kmeans.predict(df_test[num_columns])

# Visualize the cluster using the PCA to generate 2D coordinates from high-dimensionality data
pca = PCA(n_components=2)
space_2d = pca.fit_transform(df_test[num_columns])

figure(figsize=(15, 9))
plt.scatter(space_2d[..., 0], space_2d[..., 1], c=solution, cmap=matplotlib.colors.ListedColormap(colors))


```





```Python

df_test['cluster'] = solution

```








## Interpreting the Clusters


```Python

df_test['mpg'].hist(by=df_test['cluster'], figsize=(18, 12));

```




By displaying each cluster for the mpg variable, we can see how *cluster 0* is mainly about vehicle with high MPG, *cluster 1* are vehicle with low MPG and *cluster 2* captures the middle-range




```Python

df_test['cyl'].hist(by=df_test['cluster'], figsize=(18, 12));

```


```Python

df_test['hp'].hist(by=df_test['cluster'], figsize=(18, 12));

```



You can continue for the other variables.


## Describing the Cluster
At the end of the cluster analysis you must provide a description of the structural patterns uncovered by the cluster analysis. For our example a narrative for the cluster analysis can be something like:  

- **CLUSTER 0** - HIGH PERFORMANCE CARS: high horse-power, 8 cylinders car, with low mpg.
- **CLUSTER 1** - GREENER CARS: Low horse-power 4-cylinders cars, with high mpg.
- **CLUSTER 2** - FOR THE AVERAGE: average horse-power, 4/6 cylinders car with average mpg consumption.  
  
  Notice how the clustering solution was able to aggregate this cars into very specific groups that we were able to interpret.  
  **FINAL NOTE**: The kMeans did this without any pre-knowledge nor any input from our site: quite amazing.





## Interpreting the Clusters via Centroids


Instead of interpreting each cluster via their membership, if a centroid is the best summary representative for each cluster (mean), then it would make sense to look at them as way of describing the entire cluster.  
  
  Let's look at the centroids.  
  
  **NOTE**: The centroids are not observations belonging to the original dataset. Rather, they are artifact generated during the clustering process.




```Python

cdf = pd.DataFrame(data = kmeans.cluster_centers_, columns = num_columns)
cdf.head()

```







This is not easy to interpret as we used the z-scores. So, we need to reverse back:  
  
  z-score = (x-x_bar)/s -> x = x_bar+z-score*s



```Python

# Calculating the original values.
summary = {}
for c in num_columns:
    cname = c[2:]
    mean = df[cname].mean()
    std = df[cname].std()
    summary[c] = {'x_bar': mean, 's':std}

```






```Python

cnames = []
for c in num_columns:
    cname = c[2:]
    x_bar = summary[c]['x_bar']
    s = summary[c]['s']
    cdf[cname] = summary[c]['x_bar']+cdf[c]*summary[c]['s']
    cnames.append(cname)


```


```Python

cdf[cnames].head()

```




Ok, let's now interpret these clusters using the centroids, as you can easily compare all centroids:  
  
  - **Cluster 0**: 4 cylinders vehicles with high MPG and low HP. Relatively light, they were built more recently.
  - **Cluster 1**: 8 cylinders vehicles with low MPG and high horsepower. These are pretty heavy and older.
  - **Cluster 2**: 4 or 6 cylinders vehicles (mean of 4.9) with medium MPG and HP. Medium weight, they are built more recently.  
  
  Not bad. As you can see, centroids contain a good story without the need of generating a lot of graphs. It should not be a surprise, as by definition they are the most representative elements in each cluster.  
  
  **NOTE:** As the cluster is more disperse (variance is increasing), the ability of centroids to capture the essense of the cluster greatly diminishes.








# Part II
# k-Medoids Clustering

K-Medoids is the same as k-Means with the only difference that the centroids, at each iterations, are picked from points in the dataset. This should increase explainability of the solutions.






```Python
!pip install scikit-learn-extra

```



```Python

from sklearn_extra.cluster import KMedoids

# Train the model using the training set
k=3
kmedoids = KMedoids(n_clusters=k, init='k-medoids++', max_iter=100, random_state = 12345)
model = kmedoids.fit(df_train[num_columns])

# Apply the model on the testing set
solution = kmedoids.predict(df_test[num_columns])

# Visualize the cluster using the PCA to generate 2D coordinates from high-dimensionality data
pca = PCA(n_components=2)
space_2d = pca.fit_transform(df_test[num_columns])

figure(figsize=(18, 12))
plt.scatter(space_2d[..., 0], space_2d[..., 1], c=solution, cmap=matplotlib.colors.ListedColormap(colors))


```




```Python

cdf = pd.DataFrame(data = kmedoids.cluster_centers_, columns = columns)
cdf.head()

```


```Python

# Calculating the original values.
summary = {}
for c in num_columns:
    cname = c[2:]
    mean = df[cname].mean()
    std = df[cname].std()
    summary[c] = {'x_bar': mean, 's':std}

cnames = []
for c in num_columns:
    cname = c[2:]
    x_bar = summary[c]['x_bar']
    s = summary[c]['s']
    cdf[cname] = summary[c]['x_bar']+cdf[c]*summary[c]['s']
    cnames.append(cname)

```




```Python

cdf[cnames].head()

```















































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






# Resources

  - [ Notebook ]( /assets/projects/wheat_seeds.html ){:target="_blank"}
  - [ nbviewer ]( https://nbviewer.org/ ){:target="_blank"}
      - A simple way to share Jupyter Notebooks

  - [ item ]








# Footnote

[^1]: The footnote source


