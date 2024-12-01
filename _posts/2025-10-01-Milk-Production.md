---
title: ' Milk Production Forecasting (1) '
author: ernest
date: 2024-01-10 16:20:02 -05:00
last_modified_at: 2024-10-30
categories: [   ]
pin:     # true
math: true
mermaid: true
published: true
tags:   # or [typography, tag-01, tag-02, etc.]
  # - 
  - time-series
  - machine-learning
  - learning


# image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.

---




<!-- 

> DISCLAIMER
- The information contained in this report/article/note is meant for the purposes of information only and is not intended to be investment, legal, tax or other advice, nor is it intended to be relied upon in making an investment or other decision. This report is provided with the understanding that the authors and publishers are not providing advice on legal, economic, investment or other professional issues and services. 
- I am not responsible for the content of websites and information resources that may be referenced in the report. The access provided to these sites or the provision of such information resources does not constitute an endorsement by myself. of the information contained therein. However, unless expressly stated otherwise, the opinions, recommendations, findings, interpretations and conclusions expressed in this report represent the views of myself. 
- The inclusion of company examples does not in any way constitute an endorsement of these organisations by myself or the signatories to the Principles for Responsible Investment. While I have endeavoured to ensure that the information contained in this report has been obtained from reliable and up-to-date sources, the changing nature of statistics, laws, rules and regulations may result in delays, omissions or inaccuracies in information contained in this report. I am not responsible for any errors or omissions, or for any decision made or action taken based on information contained in this report, or for any loss or damage arising from or caused by such decision or action. All information in this report is provided “as-is”, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, expressed or implied.
{: .prompt-info }

-->




# Summary


This is a sample blog post. Lorem ipsum I can't remember the rest[^1] of lorem ipsum and don't have an internet connection right now. 



# Outline
  - (1) identifying the linear trend
  - (2) Detrending the time series
  - (3) Calculating the seasonal components
  - (4) Error component
  - (5) Building the model with additive strategy
  - (6) How good is this model?




# Methodology







Time series analysis
Prediction Milk production





# (1) Identifying the Linear Trend

  The simple linear regression will identify and model the unward linear trend in the data. The period will be the independent variable, and production will be the dependent variable also called the target. 

  

```python

## Identifying the trending line
X = tsDF['period'].values.reshape(-1, 1)  # values converts it into a numpy array
Y = tsDF['Production'].values.reshape(-1, 1)  # -1 means that calculate the dimension of rows, but have 1 column

# Instantiate a Linear Regression Object
lr_model = LinearRegression()

# Train the model
lr_model.fit(X, Y)

# Calculate the R-squared value
r_squared = lr_model.score(X, Y)

y_prediction = lr_model.predict(X)  # make predictions


```


![name of the image](  /assets/sample/coming-soon.png  )
*<small> Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1 </small>*






```python


# Access the coefficients and intercept
coef = lr_model.coef_[0][0]
intercept = lr_model.intercept_[0]

# Print the equation
print("Equation for the Trend Component")
print(f"y = {coef:.2f} * x + {intercept:.2f}")
print(f"R-squared = {r_squared:.2f}")

```


![name of the image](  /assets/sample/coming-soon.png  )
*<small> Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1 </small>*





# (2) Detrending the time series

We can use the linear model to detrend the time series, which means to subtract the linear estimations from the time series.




```python

print("Hello, world!")
for i in range(10):
    print(i)
    
```



![name of the image](  /assets/sample/coming-soon.png  )
*<small> Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1 </small>*






# (3) Calculating the Seasonal Components

Only the seasonal component is left in the data, so we are ready to account for it:

1. Calculate the average milk production for each month (**midx** column)
2. Use the averages to capture the seasonality of the data



```python

# Calculate the seasonal components
# Group all data by month and calculate the mean
mavgDF = tsDF.groupby(['midx']).mean()

#  The dataframe will contain 12 records of averages
mavgDF.head(20)


```



![name of the image](  /assets/sample/coming-soon.png  )
*<small> Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1 </small>*







```Python

# Let's add and repeat these averages throughout the dataset (13 years) so that we can de-seasonalize the data
years = 13
mavgDF = pd.concat([mavgDF]*years)['detrended']

```


![name of the image](  /assets/sample/coming-soon.png  )
*<small> Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1 </small>*






# (4) Error component

Because $ data = seasonal + linear + error $ then $ error = data - linear - seasonal $

Because $ detrended = data - linear $ we have that $ error = detrended - seasonal $



```python

tsDF['error'] = tsDF['detrended']-tsDF['scomponent']
    
```


![name of the image](  /assets/sample/coming-soon.png  )
*<small> Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1 </small>*




```python

with plt.style.context('ggplot'):
    plt.figure(figsize=(8,6))
    plt.plot(tsDF['error'], label='Error Component')
    plt.legend(loc=2)
    
```


```python

print("Hello, world!")
for i in range(10):
    print(i)
    
```


# (5) Building the model with Additive Strategy.

We have everything in place to build our forecasting model. In this case we will use and **Additive** strategy as the seasonal volume of production does not seems to be proportional with the passing of time.



```python

tsDF['prediction'] = tsDF['lc']+tsDF['scomponent']
    
```



![name of the image](  /assets/sample/coming-soon.png  )
*<small> Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1 </small>*





```python

with plt.style.context('ggplot'):
    plt.figure(figsize=(8,6))
    plt.plot(tsDF['Production'], label='Production')
    plt.plot(tsDF['prediction'], label='prediction')
    plt.legend(loc=2)

```




## Forecasting


```python

periods = np.array([p for p in range(tsDF['period'].max(),tsDF['period'].max()+13)])
linear_component = lr_model.predict(periods.reshape(-1, 1)).flatten().tolist()
print(linear_component)
    
```

Because we included the last period in the data (period 156), we will need to start adding the seasonal component starting from December and adding an addition year (index 11 to 11+13=24)



![name of the image](  /assets/sample/coming-soon.png  )
*<small> Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1 </small>*




```python

tsDF['error'] = tsDF['detrended']-tsDF['scomponent']
    
```


```python

seasonal_component = tsDF['scomponent'].iloc[11:24]
print(seasonal_component.to_list())


```




```python
forecast = linear_component+seasonal_component


```




```python

with plt.style.context('ggplot'):
    plt.figure(figsize=(8,6))
    plt.plot(tsDF['Production'], label='Production')
    plt.plot(tsDF['prediction'], label='Model')
    plt.plot(periods, forecast, label='Forecast', color='darkred', linestyle=':')
    plt.legend(loc=2)

    
```




# (6) How good is this model?



```python

MAD = tsDF['error'].abs().mean()
print (f"MAD:{MAD:.2f}")


```


![name of the image](  /assets/sample/coming-soon.png  )
*<small> Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1 </small>*





```python

# Calculate the MAPE
# Note: we filter out rows where 'actual' is zero to avoid division by zero
non_zero_actuals = tsDF[tsDF['Production'] != 0]
MAPE = 100 * (non_zero_actuals['error'].abs() / non_zero_actuals['Production']).mean()
print (f"MAPE:{MAPE:.2f}")


```

```python

MSE = np.mean(list(tsDF['error']**2))
print (f"MSE:{MSE:.2f}")


```





![name of the image](  /assets/sample/coming-soon.png  )
*<small> Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1 </small>*







![name of the image](  /assets/sample/coming-soon.png  )
*<small> Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1 </small>*










> All statements are my own, and do not necessarily reflect the opinion(s) of the past or current employer, or previous or current educational institution. The information contained in this report/article/note/case study is meant for the purposes of information only and is not intended to be investment, legal, tax or other advice, nor is it intended to be relied upon in making an investment or other decision. This information provided with my own understanding which the authors and publishers are not providing advice on legal, economic, investment or other professional issues and services. 
{: .prompt-info }





## Footnote

[^1]: The footnote source


