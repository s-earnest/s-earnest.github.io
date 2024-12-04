---
title: ' Banking Customer Segmentation (3) '
author: ernest
date: 2025-01-10 16:20:02 -05:00
last_modified_at: 2024-11-30
categories: [  ]
pin:     # true
math: true
mermaid: true
published: false
tags:   # or [typography, tag-01, tag-02, etc.]
  # - item
  - clustering-analysis
  - customer-analytics
  - gaussian-mixture-model
  - gmm-model
  - learning


# image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.

---





# Summary 

The primary purpose of this use case is to identify distinct segments within the bank's customers base using a Gaussian Mixture Model. I focused on features like age, account balance, and the number of contacts during the campaign. The bank goal is to understand the underlying patterns in customer behavior and tailor a marketing strategy. 🟢 





# Use Case: Customer Segmentation for Marketing Strategy Optimization
## Objective:

The primary aim of this use case is to identify distinct segments within the bank's customer base using a Gaussian Mixture Model (GMM). By focusing on features like age, balance, and the number of contacts during the campaign, the bank aims to understand the underlying patterns in customer behavior and tailor its marketing strategies accordingly.
Dataset:


# Data dictionnary

The dataset is sourced from the UCI Machine Learning Repository and pertains to the direct marketing campaigns (phone calls) of a Portuguese banking institution. The campaigns aimed to promote term deposits among the bank's customers.
Features:

  - **Age**: This represents the age of the clients.
  - **Balance**: This represents the average yearly balance (in euros) of the clients.
  - **Campaign**: This represents the number of contacts performed during this campaign for a client.
  - **Marital**: Marital Status
  - **Education**: Education level of customer

# Methodology:

  1. **Data Preprocessing**: The relevant features are selected, and any negative values in the 'balance' feature are handled to ensure data consistency.
  
  2. **Standardization**: The selected features are standardized to bring them to a common scale.
  
  3. **Modeling**: A GMM is applied to the standardized features to create customer segments. The model with the lowest AIC value across different component numbers is selected as the best model.
  
  4. **Segmentation**: The best GMM model is used to predict the segments and assign them back to the original dataset.
  
  5. ** Summary Statistics Generation**: Summary statistics for each segment are generated to understand the characteristics of the identified segments.

# Outcome:

The resulting segments represent distinct groups within the customer base with varying age, balance, and campaign interaction levels. These segments are then analyzed for a tailored marketing strategy, including the type and frequency of contact, offer customization, and personalized communications, to enhance the effectiveness of the marketing campaigns.

Business Impact:

By leveraging the insights obtained from the customer segmentation, the bank can optimize its marketing strategies to target the right customers with the right offers. This can lead to increased customer engagement, higher conversion rates, and enhanced customer satisfaction, ultimately contributing to the bank's overall growth and profitability.

# Challenges & Considerations & Limitations:

  - The selected features and the number of components should be validated and may need adjustment based on the actual business context and dataset characteristics.

  - The interpretation of the segments needs to align with the business understanding and domain knowledge to drive actionable insights.

  - Ethical considerations and data privacy concerns need to be addressed, especially when dealing with sensitive financial data.






# Outline
  - (1) Standardization & Categorical Variables
    - Creating the Pipeline
    - Numberical features
    - Checking for Normality
    - Categorical features
    - 
  - (2) Generating a model 
    - AIC
    - BIC
  - (3) Generating segmentation from the best model
  - (4) Display the segmentation and generating summaries
  - (5) Describing segments
    - Segment 0
    - Segment 1
    - Segment 2
    - Segment 3
  - (6) Insights and Opportunities
  - (7) K-Mean Clustering - Elbow Method
  - (8) K-Mean Clustering - Silhouette Method
  - (9) K-Mean Clustering







```Python

import pandas as pd
import numpy as np
import urllib.request
import matplotlib.pyplot as plt
import seaborn as sns
import scipy.stats as stats
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from scipy.stats import boxcox, anderson
from sklearn.base import BaseEstimator, TransformerMixin
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.mixture import GaussianMixture


```


```Python
features = ['age', 'balance', 'campaign', 'job', 'marital', 'education', 'housing']
df = pd.read_csv('./bank-full.csv', sep=';', encoding='latin1', usecols=features)
df.head()

```


```Python

df['balance'].max()

```



![name of the image](  /assets/sample/coming-soon.png  )
*<small> Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1 </small>*




# 2. Standardization & Categorical Variables

## 2.1 Standardization[^1]

To avoid that variables have a higher influence on the model simply because they have higher values (i.e.; Monetary) we will change the unit of each variable into unit of standard deviation by applying a transformation called **standardization** which transform a variable as:

$z = \frac{{x - \bar{x}}}{{s}}$

The Standardization is performed by the `StandardScaler` while the The OneHotEncoder is a preprocessing technique used to convert categorical data variables so they can be provided to machine learning algorithms to improve predictions.

## 2.2 Categorical Variables[^2]

Categorical data are variables that contain label values rather than numeric values. Each label for a given attribute is mapped to a unique integer, and then each of these integers is represented in binary format—zeros and ones.





```Python

# FOR EXPLANATORY PURPOSES ONLY
# Sample DataFrame
df_example = pd.DataFrame({
    'Color': ['Red', 'Green', 'Blue', 'Green', 'Red', 'Blue', 'Blue','Yellow']
})
print(df_example)
print()
# Initializing OneHotEncoder
encoder = OneHotEncoder(sparse=False, drop='first')

# Fitting and transforming the data and converting it to DataFrame
one_hot_encoded_arr = encoder.fit_transform(df_example[['Color']])
encoded_df = pd.DataFrame(one_hot_encoded_arr, columns=encoder.get_feature_names_out(['Color']))

print(encoded_df)

```


```Python

# Selecting relevant numerical and categorical features
numerical_features = ['age', 'balance']
categorical_features = ['job', 'marital', 'education', 'housing']
selected_features = numerical_features + categorical_features
df_selected = df[selected_features]

```




## 2.3.2 Creating the Pipeline
### Numerical Features
#### Checking for Normality
For numerical feature we need to check for normality using the Anderson-Darling test as we have quite a lot of data available. The Shapiro-Wilk test can be overly sensitive with larger sample size (>>100).

In case of the variable is not normally distributed we will apply a Box-Cox transformation, by also making sure the values are positive.

#### Positive Values
If the variable contains negative or zero values, we will shift the values before applying the Box-Cox transformation. Shifting will not change the shape of the distribution.

#### Standardization
Finally, we will standardize the value so to have all variables in the same unit.

### Categorical Features
For categorical features we will simply apply a one-hot encoding.



```Python

class BoxCoxTransformer(BaseEstimator, TransformerMixin):
    def __init__(self, alpha=0.05):
        self.alpha = alpha

    def fit(self, X, y=None):
        self.lambdas_ = {}
        self.shifts_ = {}
        for col in X.columns:
            # Shift data if necessary
            min_val = X[col].min()
            shift = 0 if min_val > 0 else -min_val + 1
            self.shifts_[col] = shift
            shifted_data = X[col] + shift

            # Apply Anderson-Darling test
            ad_test_result = anderson(shifted_data.dropna())
            if ad_test_result.statistic > ad_test_result.critical_values[0]:  # Comparing with the critical value at 15% significance level
                _, maxlog = boxcox(shifted_data.dropna())
                self.lambdas_[col] = maxlog
        return self

    def transform(self, X):
        X_transformed = pd.DataFrame(index=X.index)
        for col in X.columns:
            shifted_data = X[col] + self.shifts_.get(col, 0)
            if col in self.lambdas_:
                transformed_col = boxcox(shifted_data, lmbda=self.lambdas_[col])
                X_transformed[col] = transformed_col
            else:
                X_transformed[col] = shifted_data
        return X_transformed

# Create a pipeline for numerical features
numerical_pipeline = Pipeline([
    ('boxcox', BoxCoxTransformer()),
    ('scaler', StandardScaler())
])

# Create a pipeline for categorical features
categorical_pipeline = Pipeline([
    ('onehot', OneHotEncoder(handle_unknown='ignore'))
])

# Create a column transformer to combine the pipelines
preprocessor = ColumnTransformer(
    transformers=[
        ('num', numerical_pipeline, numerical_features),
        ('cat', categorical_pipeline, categorical_features)
    ],
    remainder='passthrough'
)

# Apply the transformations
transformed_data = preprocessor.fit_transform(df_selected)

# Manually construct feature names for the one-hot encoded categorical columns
ohe_categories = preprocessor.named_transformers_['cat'].named_steps['onehot'].categories_
cat_features = [f"{col}_{subcat}" for col, subcats in zip(categorical_features, ohe_categories) for subcat in subcats]

# Combining the feature names for both numerical and categorical columns
all_feature_names = numerical_features + cat_features

# Convert the sparse matrix to a dense matrix
dense_transformed_data = transformed_data.toarray()

# Create the final DataFrame
transformed_df = pd.DataFrame(data=dense_transformed_data, columns=all_feature_names, index = df.index)


```


```Python

transformed_df

```





**NOTE:** 
  - While you can use one-hot encoded variables in a GMM, the effectiveness and interpretability of the model might be compromised.

What we will do is to assign the segment to each observation and then look at the original data for profiling considerations.




## 2.3.2 Checking for Normality
A GMM model has a strong normality assumption. We will check if these fields are normally distributed and if not we will appy a box-cox[^3] transformation.



```Python

columns = df_selected.shape[1]

# Check normality assumption for numerical values (no dummies)
for c in df_selected[numerical_features].columns:
    data = df_selected[c]

    # Visual Inspection: Histogram and Q-Q plot
    plt.figure(figsize=(12, 6))

    plt.subplot(1, 2, 1)
    sns.histplot(data, kde=True)
    plt.title(f'Histogram of {c}')

    plt.subplot(1, 2, 2)
    stats.probplot(data, dist="norm", plot=plt)
    plt.title(f'Q-Q plot of {c}')

    plt.tight_layout()
    plt.show()


```


With the exception of `campaign`, which is really a more discrete variable, `age` and `balance` seems to have been normalized quite nicely. Well, allow some 'slack' here.



# (2) Generating the model


## Estimating k - the Number of Segments





```Python

def find_best_gmm(X, k_range=(2, 8)):
    best_aic = np.inf
    best_bic = np.inf
    best_k = None
    best_gmm = None
    aic_values = []
    bic_values = []

    for k in k_range:
        gmm = GaussianMixture(n_components=k, random_state=0).fit(X)
        aic = gmm.aic(X)
        bic = gmm.bic(X)

        # Store the various AICs and BICs
        aic_values.append(aic)
        bic_values.append(bic)

        if aic < best_aic:
            best_aic = aic
            best_bic = bic
            best_k = k
            best_gmm = gmm

    return best_gmm, best_k, best_aic, best_bic, aic_values, bic_values

# Example usage
# Assuming 'transformed_df' is the DataFrame from the pipeline
k_range = range(3,12)
best_gmm_model, best_k, best_aic, best_bic, aics, bics = find_best_gmm(transformed_df, k_range)
print(f"Best GMM Model: {best_k} components")
print(f"AIC: {best_aic}")
print(f"BIC: {best_bic}")


```

```Python

# Plotting AIC and BIC
plt.plot ([k for k in k_range], aics, label='AIC')
plt.plot ([k for k in k_range], bics, label='BIC')
plt.legend()
plt.xlabel('Number of Components')


```


There is a strong agreement between the measure, supporting a 5 components solution. While the AIC and BIC continue to decrease as we increase the components, we are looking to the simplest (less complex) model.

If you have two or more valleys in the graph, I would usually go with the lowest number of components as I prefer explanability over precision, meaning I will peek the least complex model.



# Generating Segmentation from the Best Model
Let's segment the original dataset using the best model.


```Python

# Let's build the model with 5 components
gmm = GaussianMixture(n_components=5, random_state=2).fit(transformed_df)

# Assigning the segments to the original DataFrame
df['Segment'] = gmm.predict(transformed_df)

```

**NOTE:** 
  - We apply the GMM model on the transformed data, but store the field `Segment` in the original dataset. This 'trick' will allow us to interpret the segments using the un-standardazed and un-transformed data.


```Python

df.head()

```


# 4. Display the Segmentation & Generating Summaries





```Python

# Set Seaborn style
sns.set(style="whitegrid")

# Prepare data
segment_counts = df['Segment'].value_counts()

# Plot
fig, ax = plt.subplots()
ax.pie(segment_counts, labels=segment_counts.index, autopct='%1.1f%%', startangle=90)
ax.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.

plt.title('Customer Segmentation')
plt.show()

```



```Python

summary_stats = pd.DataFrame()

for segment in df['Segment'].unique():
    segment_data = df[df['Segment'] == segment]

    # Summary for numerical features
    num_summary = segment_data[numerical_features].agg(['mean', 'std', 'min', 'max', 'count']).unstack()

    # Summary for categorical features
    cat_mode = segment_data[categorical_features].apply(lambda x: x.mode()[0])  # Mode
    cat_freq = segment_data[categorical_features].apply(lambda x: x.value_counts().values[0])  # Frequency of mode

    cat_mode.index = [f"{feat}_mode" for feat in categorical_features]
    cat_freq.index = [f"{feat}_freq" for feat in categorical_features]

    # Combining the summaries for both types of variables
    segment_summary = pd.concat([num_summary, cat_mode, cat_freq])

    # Adding the segment summary to the overall summary
    summary_stats = pd.concat([summary_stats, segment_summary], axis=1)

# Naming the columns after the segments
summary_stats.columns = [f"Segment_{seg}" for seg in df['Segment'].unique()]

print("Summary Statistics for Each Segment:")
print(summary_stats)


```





# 5. Describing Your Segments
One of the more critical steps is to elaborate and describe the segments and provide a high-level strategy on what to do next.

Take notice of this, as this represents the most critical step; otherwise, why did we perform a segmentation analysis in the first place?

Notice how I spent time and engaged with domain expert colleagues to write down this section of the notebook. You should do the same in a real use case.

**NOTE:** 
  - If you do not have the necessary domain understanding (yet), feel free to invite colleagues with experience in an analytical session to describe the segments and develop a strategy to move forward. **there is nothing wrong with this and it is something that is encouraged**.

## Segment_0: The Established Management Group

  - **Age Profile**: Aged around 39 years on average with a broad range (20-81 years).
  - **Financial Profile**: Highest average balance ($1755) with a large standard deviation, indicating significant variability in financial status.
  - **Demographics and Preferences**: Predominantly in management roles, married, with tertiary education, and less likely to have housing loans.
  - **Opportunities**: Offer high-value investment products, wealth management services, and retirement planning. Upsell premium credit cards and insurance products.

## Segment_1: The Retired Group

  - **Age Profile**: Significantly older (average age 53), with the oldest members up to 95 years.
  - **Financial Profile**: High average balance ($1810), suggesting accumulated wealth.
  - **Demographics and Preferences**: Mostly retired, married, with secondary education, and less inclined towards housing loans.
  - **Opportunities**: Offer estate planning, health insurance, and senior citizen savings schemes. Promote leisure and travel-related offers.

## Segment_2: The Mature Managers

  - **Age Profile**: Older (around 44 years), spanning a wide age range.
  - **Financial Profile**: Moderate average balance ($1221) with a high standard deviation.
  - **Demographics and Preferences**: Management jobs, married, secondary education, with housing loans.
  - **Opportunities**: Retirement planning services, fixed deposits, and tax-saving investment options. Also, offer refinancing options for housing loans.

## Segment_3: The Stable Middle-Aged Group

  - **Age Profile**: Middle-aged group (average age around 42).
  - **Financial Profile**: Moderate average balance ($1258) with a substantial standard deviation.
  - **Demographics and Preferences**: Predominantly blue-collar, married, with secondary education, less likely to have housing loans.
  - **Opportunities**: Target this segment with medium-term investment products, education loans for children, and life insurance.

## Segment_4: The Working-Class Savers

  - **Age Profile**: Similar to Segment_0 in age, but slightly younger on average.
  - **Financial Profile**: Lower average balance ($1088) with a moderate standard deviation.
  - **Demographics and Preferences**: Mainly blue-collar workers, married, with secondary education, and more likely to have housing loans.
  - **Opportunities**: Focus on savings accounts with better interest rates, personal loans, and home loan products. Financial literacy programs can be beneficial.



























# (6) General Insights and Opportunities:

  - **Cross-Selling and Up-Selling**: Tailored products based on life stage and financial capacity. Upsell premium services to high-balance segments.
  - **Financial Education**: Focus on segments with lower balances and less tertiary education with financial literacy programs.
  - **Personalized Marketing**: Use demographics to create targeted marketing campaigns for each segment.
  - **Digital Banking Services**: Enhance digital banking solutions for tech-savvy younger segments and simplified services for older customers.
  - **Customer Retention**: Offer loyalty programs and benefits to retain long-standing customers, especially in older and wealthier segments.
  - **Community Engagement**: Engage in community programs or sponsor events in areas with a high concentration of certain segments.




# Expanding Your Strategy
Based on the detailed profiling and analysis of the customer segments, there are several strategic opportunities for expanding the bank's business. These opportunities focus on both deepening relationships with existing customers and attracting new ones:

  - **Tailored Financial Products and Services**: Develop and offer financial products tailored to the specific needs of each segment. For example, wealth management services for the high-balance segments, affordable loan products for the working-class savers, and retirement planning for the older segments.

  - **Enhanced Digital Banking Solutions**: Invest in digital banking technologies to appeal to younger and tech-savvy customers. Simplify the digital experience for older customers to encourage adoption. Offer online financial advisory services, mobile banking apps, and easy-to-use online platforms.

  - **Financial Literacy and Education Programs**: Create programs targeting segments with lower average balances and educational levels. These programs can educate customers on saving strategies, investment options, and effective financial management, fostering a more financially literate customer base.

  - **Personalized Marketing and Customer Engagement**: Implement data-driven marketing strategies to offer personalized banking experiences. Use the insights from the segmentation to create targeted marketing campaigns, loyalty programs, and personalized offers that resonate with each segment.

  - **Community Involvement and Social Responsibility Initiatives**: Engage with the community through local events, sponsorships, and corporate social responsibility initiatives. This approach can improve brand perception and attract customers who value community involvement.

  - **Cross-Selling and Up-Selling Strategies**: Utilize customer data to identify opportunities for cross-selling and up-selling appropriate banking products and services, such as insurance, loans, and credit cards.

  - **Partnerships and Collaborations**: Form strategic partnerships with businesses, educational institutions, and other organizations. These partnerships can provide a channel for reaching new customers and offering exclusive deals or services.

  - **Expansion into New Markets or Demographics**: Explore opportunities to expand into new geographic markets or target unrepresented demographics in the current customer base.

  - **Customer Feedback and Continuous Improvement**: Regularly collect customer feedback to understand evolving needs and preferences. Use this feedback to continuously improve products, services, and customer experiences.

  - **Diversification of Investment and Savings Options**: Offer a diverse range of investment products, catering to different risk appetites and financial goals. This could include stocks, bonds, mutual funds, and retirement savings plans.

  - **Robust Customer Service and Support**: Strengthen customer service channels, providing quick and effective support. Offer financial advisory services to help customers make informed decisions.

By focusing on these areas, the bank can not only improve its offerings and customer relationships but also attract new customers, thereby expanding its business and increasing its market share.






# Congratulations
You have carried out a complete GMM analysis in Python and learned a different way of segmenting your customers.

I have spent a lot of time studying the segments and developing a strategy to improve the current situation. The strategy implementation should follow the strategy put forward by the business.





# (7) k-Means Clustering - The Elbow Method

The elbow method is a popular heuristic used in cluster analysis, particularly in determining the optimal number of clusters for k-means clustering. The basic idea behind this method is to run k-means clustering on the dataset for a range of values of k (number of clusters) and for each value of k compute the sum of squared distances from each point to its assigned center (inertia). When these overall inertias are plotted against the number of clusters, the "elbow" of the curve represents an optimal value for k.

The rationale is that as we increase k, the WCV will decrease because the points will be closer to the centroids they are assigned to. However, at some point, adding more clusters doesn't provide much better modeling of the data. This point, where the rate of decrease sharply changes, is considered the appropriate number of clusters and is called the "elbow."

In practice, the elbow might not always be clear and sharp, and the selection of the optimal k might be somewhat subjective. However, this method provides a useful guideline and a good starting point for the number of clusters. It's particularly helpful in exploratory data analysis when we don't have prior knowledge about how many clusters might be appropriate.





```Python
import matplotlib.pyplot as plt
import matplotlib.cm as cm
import numpy as np
from matplotlib.pyplot import figure
import matplotlib.colors
import pandas as pd
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_samples, silhouette_score
from sklearn.preprocessing import StandardScaler


```




```Python

# Standardize the data
df = pd.read_csv('./auto-mpg.csv').select_dtypes(include=np.number)
cols = df.select_dtypes(include=np.number).columns.tolist()
zcols = ['z_'+c for c in cols]

#Create an instance of StandardScaler
scaler = StandardScaler()

# Fit and transform the numeric columns of the DataFrame
scaled_data = scaler.fit_transform(df[cols])
scaled_df = pd.DataFrame(scaled_data, index=df.index, columns=zcols)

# Concatenate the new scaled columns with the original DataFrame
df = pd.concat([df, scaled_df], axis=1)
df.head()

```




```Python

import matplotlib.pyplot as plt
from sklearn.cluster import KMeans

def find_optimal_k(df, max_k):
    """
    Apply the elbow method to find the optimal number of clusters (k) for KMeans clustering.

    Parameters:
    df (DataFrame): The dataframe containing the data to cluster.
    max_k (int): The maximum number of clusters to try.

    Returns:
    None: This function plots a graph showing the elbow curve.
    """
    ssd = []  # Sum of squared distances

    for k in range(1, max_k + 1):
        kmeans = KMeans(n_clusters=k, n_init=10, random_state=0)
        kmeans.fit(df)
        ssd.append(kmeans.inertia_)

    plt.figure(figsize=(10, 6))
    plt.plot(range(1, max_k + 1), ssd, marker='o')
    plt.title('Elbow Method for Optimal K')
    plt.xlabel('Number of clusters (k)')
    plt.ylabel('Sum of Squared Distances')
    plt.xticks(range(1, max_k + 1))
    plt.grid(True)
    plt.show()

find_optimal_k(df[zcols], 10)



```






# (8) k-Means Clustering - Silhouette Method

A better method to estimate the optimal number of clusters K is to use the Silhouette method that provides a score [-1, +1] for the overall cluster solution.  
  
  - A value close to 1 indicates a solution with clusters well well distanced from each other
  - A value close to 0 indicates a solution with clusters that are very close up to the point that the decision to assign some data points to a specific cluster is questionable.
  - A value close to -1 indicates that data points might be assigned to the wrong cluster



```Python

##########################################################################
## CREDIT:
##    This code has been adapted from
##    https://scikit-learn.org/stable/auto_examples/cluster/plot_kmeans_silhouette_analysis.html
##########################################################################
range_n_clusters = [2, 3, 4, 5, 6, 7, 8, 9]
s_avg = []

for n_clusters in range_n_clusters:
    # Data to train the cluster model
    X = df[zcols].to_numpy()

    # Create a subplot with 1 row and 2 columns
    fig, (ax1, ax2) = plt.subplots(1, 2)
    fig.set_size_inches(18, 7)

    # The 1st subplot is the silhouette plot
    ax1.set_xlim([-0.1, 1])
    # The (n_clusters+1)*10 is for inserting blank space between silhouette
    # plots of individual clusters, to demarcate them clearly.
    ax1.set_ylim([0, len(X) + (n_clusters + 1) * 10])

    # Initialize the clusterer with n_clusters value and a random generator
    # seed of 10 for reproducibility.
    clusterer = KMeans(n_clusters=n_clusters, init='k-means++', n_init=10, random_state=12345)
    cluster_labels = clusterer.fit_predict(X)

    # The silhouette_score gives the average value for all the samples.
    # This gives a perspective into the density and separation of the formed
    # clusters
    silhouette_avg = silhouette_score(X, cluster_labels)
    s_avg.append(silhouette_avg)
    print("For n_clusters =", n_clusters, "The average silhouette_score is :", silhouette_avg)

    # Compute the silhouette scores for each sample
    sample_silhouette_values = silhouette_samples(X, cluster_labels)

    y_lower = 10
    for i in range(n_clusters):
        # Aggregate the silhouette scores for samples belonging to
        # cluster i, and sort them
        ith_cluster_silhouette_values = \
            sample_silhouette_values[cluster_labels == i]

        ith_cluster_silhouette_values.sort()

        size_cluster_i = ith_cluster_silhouette_values.shape[0]
        y_upper = y_lower + size_cluster_i

        color = cm.nipy_spectral(float(i) / n_clusters)
        ax1.fill_betweenx(np.arange(y_lower, y_upper),
                          0, ith_cluster_silhouette_values,
                          facecolor=color, edgecolor=color, alpha=0.7)

        # Label the silhouette plots with their cluster numbers at the middle
        ax1.text(-0.05, y_lower + 0.5 * size_cluster_i, str(i))

        # Compute the new y_lower for next plot
        y_lower = y_upper + 10  # 10 for the 0 samples

    ax1.set_title("The silhouette plot for the various clusters.")
    ax1.set_xlabel("The silhouette coefficient values")
    ax1.set_ylabel("Cluster label")

    # The vertical line for average silhouette score of all the values
    ax1.axvline(x=silhouette_avg, color="red", linestyle="--")

    ax1.set_yticks([])  # Clear the yaxis labels / ticks
    ax1.set_xticks([-0.1, 0, 0.2, 0.4, 0.6, 0.8, 1])

    # 2nd Plot showing the actual clusters formed
    colors = cm.nipy_spectral(cluster_labels.astype(float) / n_clusters)
    ax2.scatter(space_2d[..., 0], space_2d[..., 1], marker='.', s=30, lw=0, alpha=0.7, c=colors, edgecolor='k')

    # Labeling the clusters
    centers = clusterer.cluster_centers_
    # Draw white circles at cluster centers
    ax2.scatter(centers[:, 0], centers[:, 1], marker='o', c="white", alpha=1, s=200, edgecolor='k')

    for i, c in enumerate(centers):
        ax2.scatter(c[0], c[1], marker='$%d$' % i, alpha=1, s=50, edgecolor='k')

    ax2.set_title("The visualization of the clustered data.")
    ax2.set_xlabel("Feature space for the 1st feature")
    ax2.set_ylabel("Feature space for the 2nd feature")

    plt.suptitle(("Silhouette analysis for KMeans clustering on Auto-MPG data "
                  "with n_clusters = %d" % n_clusters), fontsize=14, fontweight='bold')

plt.show()


```





## Interpreting the Silhouette Score and Graphs
The ideal solution should have the following characteristics:  
  
  1. All clusters silhouette scores should should be above the silhouette average (all solutions are ok)
  2. All clusters should have comparable sizes (k = 2 and k>6 are discarded)
  3. All clusters silhouette scores should be consistently above zero (all of them have some points <0, except k=2)
  4. Pick the solutions with the highest silhouette average (k=3 seems to be a good choice)






## Observation & Comments
This was a tough data to cluster, but there is good support for k=3 from both the elbow and silhouette methods.  
  
  The problem why the silhouette solution was not that clean is due to the shape of the cluster to which we will come back later. So keep this comment in your mind.





























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
## Images

<div style="text-align: center;">

![alt text]( /assets/sample/coming-soon.png "Our logo")

</div>


![example {caption=Caption - changeme.}]( /assets/sample/coming-soon.png )





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






## Resources

  - [ Notebook ]( /assets/projects/wheat_seeds.html ){:target="_blank"}
  - [ nbviewer ]( https://nbviewer.org/ ){:target="_blank"}
      - A simple way to share Jupyter Notebooks

  - [ item ]





Logistic Regression is a classificaiton method which outputs a probability between 0 and 1
PCA 
Classifeir 

Price elasticity of purchase probability is the % change in purchase probability in response to a 1% change in price.




### Contact. 

Have a question? Feel free to send an [email](mailto:s.ernest@gmx.us) or if you prefer a virtual [meeting]( https://calendly.com/s-earnest/15min ){:target="_blank"}






## Footnote

[^1]: The footnote source


