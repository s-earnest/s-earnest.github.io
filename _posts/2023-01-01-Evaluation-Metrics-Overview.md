---
title:  ' Evaluation Metrics Overview '
author: ernest
date: 2025-01-10 16:20:02 -05:00
last_modified_at: 2023-11-30
categories: [ Notes ]
pin:     # true
math: true
mermaid: true
published: false
tags:   # or [typography, tag-01, tag-02, etc.]
  - metrics
  - evaluation
  - notes

# image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.

---


<!-- 

> All content provided is for informational purposes only and shown case studies examples for open source data resources. The articles, notes and case study on this website are my own the way on seen opportunities and problem-solving but don’t necessarily represent the positions, strategies, or opinions of my past or current employer or its subsidiaries. I make no representations as to the accuracy or completeness of any information found here or by following any links. I will not be liable for any errors or omissions in this information nor for the availability of this information. I will not be liable for any losses, injuries, or damages from the display or use of this information.
{: .prompt-info }


-->

<!-- 

comment

   -->




> This is a note.
{: .prompt-tip }



# Evaluation Metrics Overview


# Intrinsic validation: 

      Intrinsic validation methods assess the quality of clustering without relying on external information or a known ground truth. These methods primarily evaluate the structure and internal coherence of the clusters.

# Silhouette Coefficient: 

      Measures the compactness and separation of clusters by comparing the average distance between data points within a cluster to the average distance between data points of different clusters. Its range of values provides insights into the quality of clustering results, with higher values indicating better clustering, values close to 0 suggesting potential issues, and lower values indicating poor clustering performance

# Calinski-Harabasz Index: 

      Calculates the ratio of between-cluster dispersion to within-cluster dispersion, aiming to maximize inter-cluster separation and minimize intra-cluster variance. Although higher values indicate better clustering results, we still need to consider the context of the problem and apply domain knowledge wherever possible.

# Davies-Bouldin Index: 

      Evaluates cluster separation and compactness based on the average distance between cluster centroids and the average intra-cluster distance.

# Elbow Method: 

      Plots the variance explained or distortion against the number of clusters and identifies the "elbow" point where adding more clusters provides diminishing returns in terms of reducing within-cluster sum of squares.

# Gap Statistic: 

      Measures the difference between the observed within-cluster dispersion and a reference distribution to determine the optimal number of clusters.

# External validation metrics:

      When a ground truth or external information is available, external validation metrics can be used to compare the clustering results to the known labels.

# Rand Index: 

      Measures the similarity between the clustering results and the ground truth, taking into account both true positive and true negative pairs.

# Adjusted Rand Index: 

      Adjusts the Rand Index for chance agreement, providing a value between -1 and 1, where 1 indicates a perfect match between the clustering and ground truth.

# Fowlkes-Mallows Index: 

      Computes the geometric mean of the precision and recall of the clustering compared to the ground truth.

# Jaccard Coefficient: 

      Calculates the similarity between the clustering and ground truth by comparing the number of pairs that are either both in the same cluster or in different clusters.

# Homogeneity Score: 

      Measures the extent to which each cluster contains samples from a single true class.

# Completeness Score: 

      Measures the degree to which all samples from the same true class are assigned to the same cluster.

# Dunn Index: 

      Evaluates cluster compactness and separation based on inter-cluster and intra-cluster distances.









### Contact. 

Have a question? Feel free to send an [email](mailto:s.ernest@gmx.us) or if you prefer a virtual [meeting]( https://calendly.com/s-earnest/15min ){:target="_blank"}




