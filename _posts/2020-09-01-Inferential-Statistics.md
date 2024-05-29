---
title: ' Inferential Statistics '
author: ernest
date: 2024-01-10 16:20:02 -05:00
last_modified_at: 2023-11-30
categories: [ Notes ]
pin:     # true
math: true
mermaid: true
published: false
tags:   # or [typography, tag-01, tag-02, etc.]
  - statistics
  - inferential
  # - template-tag-3

# image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.

---


🔴 


### Summary

Inferential statistics is a branch of statistics that involves making predictions or inferences about a population based on a sample of data taken from that population. It is used to analyze the probabilities, assumptions, and outcomes of a hypothesis.

# The basic steps of inferential statistics typically involve the following:

## Define a Hypothesis: 
This is often a statement about a parameter of a population, such as the population mean or population proportion.
### Select a Sample: 
In order to test the hypothesis, you’ll select a sample from the population. This should be done randomly and should be representative of the larger population in order to avoid bias.
### Collect Data: 
Once you have your sample, you’ll need to collect data. This data will be used to calculate statistics that will help you test your hypothesis.
### Perform Analysis: 
The collected data is then analyzed using statistical tests such as the t-test, chi-square test, or ANOVA, to name a few. These tests help to determine the likelihood that the results of your analysis occurred by chance.
### Interpret Results: 
The analysis can provide a probability, called a p-value, which represents the likelihood that the results occurred by chance. If this probability is below a certain level (commonly 0.05), you may reject the null hypothesis (the statement that there is no effect or relationship) in favor of the alternative hypothesis (the statement that there is an effect or relationship).

# Inferential Statistics Types
Inferential statistics can be broadly categorized into two types: parametric and nonparametric. The selection of type depends on the nature of the data and the purpose of the analysis.

# Parametric Inferential Statistics
These are statistical methods that assume data comes from a type of probability distribution and makes inferences about the parameters of the distribution. Common parametric methods include:

### T-tests: 
Used when comparing the means of two groups to see if they’re significantly different.
Analysis of Variance (ANOVA): Used to compare the means of more than two groups.
### Regression Analysis: 
Used to predict the value of one variable (dependent) based on the value of another variable (independent).
### Chi-square test for independence: 
Used to test if there is a significant association between two categorical variables.
### Pearson’s correlation: 
Used to test if there is a significant linear relationship between two continuous variables.

# Nonparametric Inferential Statistics
These are methods used when the data does not meet the requirements necessary to use parametric statistics, such as when data is not normally distributed. Common nonparametric methods include:

### Mann-Whitney U Test: 
Non-parametric equivalent to the independent samples t-test.
### Wilcoxon Signed-Rank Test: 
Non-parametric equivalent to the paired samples t-test.
### Kruskal-Wallis Test: 
Non-parametric equivalent to the one-way ANOVA.
Spearman’s rank correlation: Non-parametric equivalent to the Pearson correlation.
### Chi-square test for goodness of fit: 
Used to test if the observed frequencies for a categorical variable match the expected frequencies.

# Inferential Statistics Formulas
Inferential statistics use various formulas and statistical tests to draw conclusions or make predictions about a population based on a sample from that population. Here are a few key formulas commonly used:

# Confidence Interval for a Mean:

When you have a sample and want to make an inference about the population mean (µ), you might use a confidence interval.

The formula for a confidence interval around a mean is:

```
[Sample Mean] ± [Z-score or T-score] * (Standard Deviation / sqrt[n])where:
```

Sample Mean is the mean of your sample data
Z-score or T-score is the value from the Z or T distribution corresponding to the desired confidence level (Z is used when the population standard deviation is known or the sample size is large, otherwise T is used)
Standard Deviation is the standard deviation of the sample
sqrt[n] is the square root of the sample size
Hypothesis Testing:

Hypothesis testing often involves calculating a test statistic, which is then compared to a critical value to decide whether to reject the null hypothesis.

# A common test statistic for a test about a mean is the Z-score:

```
Z = (Sample Mean - Hypothesized Population Mean) / (Standard Deviation / sqrt[n])
```

where all variables are as defined above.

Chi-Square Test:

# The Chi-Square Test is used when dealing with categorical data.

The formula is:

```
χ² = Σ [ (Observed-Expected)² / Expected ]
```

where:

Observed is the actual observed frequency
Expected is the frequency we would expect if the null hypothesis were true
This is summed over all categories.

t-test:

The t-test is used to compare the means of two groups. The formula for the independent samples t-test is:

```
t = (mean1 - mean2) / sqrt [ (sd1²/n1) + (sd2²/n2) ]where:
```

mean1 and mean2 are the sample means
sd1 and sd2 are the sample standard deviations
n1 and n2 are the sample sizes

# Inferential Statistics Examples
Sure, inferential statistics are used when making predictions or inferences about a population from a sample of data. Here are a few real-time examples:

### Medical Research: 
Suppose a pharmaceutical company is developing a new drug and they’re currently in the testing phase. They gather a sample of 1,000 volunteers to participate in a clinical trial. They find that 700 out of these 1,000 volunteers reported a significant reduction in their symptoms after taking the drug. Using inferential statistics, they can infer that the drug would likely be effective for the larger population.
### Customer Satisfaction: 
Suppose a restaurant wants to know if its customers are satisfied with their food. They could survey a sample of their customers and ask them to rate their satisfaction on a scale of 1 to 10. If the average rating was 8.5 from a sample of 200 customers, they could use inferential statistics to infer that the overall customer population is likely satisfied with the food.
### Political Polling: 
A polling company wants to predict who will win an upcoming presidential election. They poll a sample of 10,000 eligible voters and find that 55% prefer Candidate A, while 45% prefer Candidate B. Using inferential statistics, they infer that Candidate A has a higher likelihood of winning the election.
### E-commerce Trends: 
An e-commerce company wants to improve its recommendation engine. They analyze a sample of customers’ purchase history and notice a trend that customers who buy kitchen appliances also frequently buy cookbooks. They use inferential statistics to infer that recommending cookbooks to customers who buy kitchen appliances would likely increase sales.
### Public Health: 
A health department wants to assess the impact of a health awareness campaign on smoking rates. They survey a sample of residents before and after the campaign. If they find a significant reduction in smoking rates among the surveyed group, they can use inferential statistics to infer that the campaign likely had an impact on the larger population’s smoking habits.

# Applications of Inferential Statistics
Inferential statistics are extensively used in various fields and industries to make decisions or predictions based on data. Here are some applications of inferential statistics:

### Healthcare: 
Inferential statistics are used in clinical trials to analyze the effect of a treatment or a drug on a sample population and then infer the likely effect on the general population. This helps in the development and approval of new treatments and drugs.
Business: 
Companies use inferential statistics to understand customer behavior and preferences, market trends, and to make strategic decisions. For example, a business might sample customer satisfaction levels to infer the overall satisfaction of their customer base.
Finance: 
Banks and financial institutions use inferential statistics to evaluate the risk associated with loans and investments. For example, inferential statistics can help in determining the risk of default by a borrower based on the analysis of a sample of previous borrowers with similar credit characteristics.
Quality Control: 
In manufacturing, inferential statistics can be used to maintain quality standards. By analyzing a sample of the products, companies can infer the quality of all products and decide whether the manufacturing process needs adjustments.
Social Sciences: 
In fields like psychology, sociology, and education, researchers use inferential statistics to draw conclusions about populations based on studies conducted on samples. For instance, a psychologist might use a survey of a sample of people to infer the prevalence of a particular psychological trait or disorder in a larger population.
Environment Studies: 
Inferential statistics are also used to study and predict environmental changes and their impact. For instance, researchers might measure pollution levels in a sample of locations to infer overall pollution levels in a wider area.
Government Policies: 
Governments use inferential statistics in policy-making. By analyzing sample data, they can infer the potential impacts of policies on the broader population and thus make informed decisions.
Purpose of Inferential Statistics
The purposes of inferential statistics include:

# Estimation of Population Parameters: 
Inferential statistics allows for the estimation of population parameters. This means that it can provide estimates about population characteristics based on sample data. For example, you might want to estimate the average weight of all men in a country by sampling a smaller group of men.
Hypothesis Testing: 
Inferential statistics provides a framework for testing hypotheses. This involves making an assumption (the null hypothesis) and then testing this assumption to see if it should be rejected or not. This process enables researchers to draw conclusions about population parameters based on their sample data.
Prediction: 
Inferential statistics can be used to make predictions about future outcomes. For instance, a researcher might use inferential statistics to predict the outcomes of an election or forecast sales for a company based on past data.
Relationships Between Variables: 
Inferential statistics can also be used to identify relationships between variables, such as correlation or regression analysis. This can provide insights into how different factors are related to each other.
Generalization: 
Inferential statistics allows researchers to generalize their findings from the sample to the larger population. It helps in making broad conclusions, given that the sample is representative of the population.
Variability and Uncertainty: 
Inferential statistics also deal with the idea of uncertainty and variability in estimates and predictions. Through concepts like confidence intervals and margins of error, it provides a measure of how confident we can be in our estimations and predictions.
Error Estimation: 
It provides measures of possible errors (known as margins of error), which allow us to know how much our sample results may differ from the population parameters.
Limitations of Inferential Statistics

# Inferential statistics, despite its many benefits, does have some limitations. Here are some of them:

Sampling Error: 
Inferential statistics are often based on the concept of sampling, where a subset of the population is used to infer about the population. There’s always a chance that the sample might not perfectly represent the population, leading to sampling errors.

Misleading Conclusions: 
If assumptions for statistical tests are not met, it could lead to misleading results. This includes assumptions about the distribution of data, homogeneity of variances, independence, etc.
False Positives and Negatives: 
There’s always a chance of a Type I error (rejecting a true null hypothesis, or a false positive) or a Type II error (not rejecting a false null hypothesis, or a false negative).
Dependence on Quality of Data: 
The accuracy and validity of inferential statistics depend heavily on the quality of data collected. If data are biased, inaccurate, or collected using flawed methods, the results won’t be reliable.
Limited Predictive Power: 
While inferential statistics can provide estimates and predictions, these are based on the current data and may not fully account for future changes or variables not included in the model.
Complexity: 
Some inferential statistical methods can be quite complex and require a solid understanding of statistical principles to implement and interpret correctly.
Influenced by Outliers: 
Inferential statistics can be heavily influenced by outliers. If these extreme values aren’t handled properly, they can lead to misleading results.
Over-reliance on P-values: There’s a tendency in some fields to overly rely on p-values to determine significance, even though p-values have several limitations and are often misunderstood.













## Footnote

[^1]: The footnote source
[^2]: The 2nd footnote source





### Contact. 

Have a question? Feel free to send an [email](mailto:s.ernest@gmx.us) or if you prefer a virtual [meeting]( https://calendly.com/s-earnest/15min ){:target="_blank"}




