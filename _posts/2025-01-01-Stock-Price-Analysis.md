---
title: ' Stock Price Analysis (3) '
author: ernest
date: 2024-01-10 16:20:02 -05:00
last_modified_at: 2024-11-30
categories: [  ]
pin:     # true
math: true
mermaid: true
published: false
tags:   # or [typography, tag-01, tag-02, etc.]
  - time-series
  - stock-price
  - stationary
  - learning


# image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.

---


# DISCLAIMER
  - This is theory of investment strategies presented in this educational purpose only. They are not intended to be, and should not be considered as, financial advice or an invitation to invest real money. Trading and investing in financial markets involve significant risks, and you should consult with a qualified financial advisor before making any investment decisions.

  - The education institution and I are not responsible for any actions taken based on the educational content, including but not limited to financial losses or other types of damages. Any application of the techniques for real-world investing is at the individual's own risk and discretion. will not be held liable for any misuse of the techniques or information provided, including any financial losses incurred. Always perform your own due diligence and consult professionals when considering any financial investments. The only purpose is to demonstrate the workflow process.






<!-- 

> All content provided is for informational purposes only and shown case studies examples for open source data resources. The articles, notes and case study on this website are my own the way on seen opportunities and problem-solving but don’t necessarily represent the positions, strategies, or opinions of my past or current employer or its subsidiaries. I make no representations as to the accuracy or completeness of any information found here or by following any links. I will not be liable for any errors or omissions in this information nor for the availability of this information. I will not be liable for any losses, injuries, or damages from the display or use of this information.
{: .prompt-info }

> All statements are my own, and do not necessarily reflect the opinion(s) of the past or current employer, or previous or current educational institution. The information contained in this report/article/note/case study is meant for the purposes of information only and is not intended to be investment, legal, tax or other advice, nor is it intended to be relied upon in making an investment or other decision. This information provided with my own understanding which the authors and publishers are not providing advice on legal, economic, investment or other professional issues and services. 
{: .prompt-info }

-->








### Summary


This is a sample blog post. Lorem ipsum I can't remember the rest of lorem ipsum and don't have an internet connection right now. 


# Introduction 
  Business task
  Problem statement





# Outline

  - (1) Stationary Time Series
  - (2) Random Walk as Quasi stationary model
  - (3) Differencing
  - (4) Predicting Stock price using a Simple Model
  - (5) Calculating the model's performances
  - (6) Modifying the SMA
  - (7) Using SMA as Trading Strategy
  - (8) SMA and the Lag issue
  - (9) SMA and the Lag issue
  - (10) SMA and the Lag issue
  - (11) SMA and the Lag issue
  - (12) SMA and the Lag issue
  - (13) SMA and the Lag issue
  - (14) SMA and the Lag issue
  - (15) SMA and the Lag issue





# (1) Stationary[^1] Time Series


Without using any formal test, let's use the definition of stationary time-series to verify this is indeed a stationary time series. We can split the time series into multiple sub-series and then calculate their mean and variance.




```python

# Split the stationary_series into 4 equal parts
chunks = np.array_split(stationary_series, 4)

# Calculate mean and variance for each chunk
means = [np.mean(chunk) for chunk in chunks]
variances = [np.var(chunk) for chunk in chunks]

print("Means:", means)
print("Variances:", variances)


```






While the mean and variances are not the same, we can see that they are quite close. The last thing to check is the autocorrelation and for this we have a very useful Pandas function.






```python

from pandas.plotting import autocorrelation_plot

# Convert stationary_series to pandas Series
stationary_series_pd = pd.Series(stationary_series)

# Plot autocorrelation
autocorrelation_plot(stationary_series_pd)
plt.show()

```






![name of the image](  /assets/sample/coming-soon.png  )
*<small> Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1 </small>*





Because the autoregression plot diminishes over time tending to zero, this is a visual clue that no autocorrelation is present.

While it is possible to check for a stationary time series, you have probably noticed that **everything is left to your judgement**. When can you consider the means and variances of the various segment to be **"close enough"**?

For this reason it is preferable to use formal testing to definitively say whether these differences are acceptable or not. The Augmented Dickey-Fuller (ADF) test, is often used to check the stationarity of a time series.

In practical terms, these small differences in mean and variance might be considered negligible depending on the specific application and how sensitive it is to such changes. In strict statistical terms, however, even slight differences could suggest that the series is not perfectly stationary.



```python

def check_stationarity(series):
  # Perform Augmented Dickey-Fuller test
  result = adfuller(series)
  p_value = result[1]
  if p_value <= 0.05:
    msg = 'The series is likely stationary.'
  else:
    msg = 'The series is likely non-stationary.'
  return p_value, msg

result = check_stationarity(stationary_series)
print(f'{result[1]} - (p-value: {result[0]:.5f})')

```


If the p-value is less than or equal to a chosen alpha level (commonly 0.05), you can reject the null hypothesis in favor of the alternative hypothesis, which says the time series is stationary.

While the generated data should theoretically be stationary (being independent and identically distributed samples from a normal distribution), it's crucial to understand that empirical tests might occasionally fail to confirm this due to random fluctuations, finite sample size, or other idiosyncrasies in the data.

If the ADF test confirms that the series is stationary and given that the mean and variances are relatively close, it would be reasonable to proceed with analyses that assume stationarity for most practical purposes.






# (2) Random Walk as Quasi stationary model





```python

print("Hello, world!")
for i in range(10):
    print(i)

```



![name of the image](  /assets/sample/coming-soon.png  )
*<small> Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1 </small>*



# (3) Differencing


# Random Walk[^2] as Quasi-Stationary Model
## Differencing
A random walk is a series where each point is derived from the previous point with some random increment or decrement. When we calculate the difference between successive points, the new series becomes "quasi-stationary," meaning it has a constant mean and variance over time.





```python

# Initialize parameters
n_points = 1000
initial_value = 0
random_seed = 42

# Create a random walk
np.random.seed(random_seed)
random_increments = np.random.randn(n_points)  # Normally distributed random numbers
random_walk = np.cumsum(random_increments)  # Cumulative sum to generate a random walk
random_walk = np.insert(random_walk, 0, initial_value)  # Insert the initial value at the beginning

# Calculate differences between points
differences = np.diff(random_walk)

# Plot random walk and differences
plt.figure(figsize=(12, 6))

plt.subplot(1, 2, 1)
plt.title("Random Walk")
plt.xlabel("Time")
plt.ylabel("Value")
plt.plot(random_walk)

plt.subplot(1, 2, 2)
plt.title("Differences between Points")
plt.xlabel("Time")
plt.ylabel("Difference Value")
plt.plot(differences)

plt.tight_layout()
plt.show()

# Print out some statistics
print(f"Mean of random walk: {np.mean(random_walk):.2f}")
print(f"Variance of random walk: {np.var(random_walk):.2f}")
print(f"Mean of differences: {np.mean(differences):.2f}")
print(f"Variance of differences: {np.var(differences):.2f}")


```



```python

# Calculate differences between points to make it quasi-stationary
differences = np.diff(random_walk)

# Naive forecast: y(t+1) = t
naive_forecast = differences[:-1]

# Actual values for t+1
actual_values = differences[1:]

# Calculate the Mean Absolute Error (MAE)
mae = np.mean(np.abs(naive_forecast - actual_values))

# Calculate the Mean Squared Error (MSE)
mse = np.mean((naive_forecast - actual_values) ** 2)

print(f"Mean Absolute Error (MAE/MAD): {mae:.4f}")
print(f"Mean Squared Error (MSE): {mse:.4f}")

```



![name of the image](  /assets/sample/coming-soon.png  )
*<small> Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1 </small>*



Indeed, the performances are quite good.

We could have also use the MAPE metric; however MAPE might not be the best choice for evaluating the naive forecast in your example:

  1. Non-Normalized Data: MAPE is most useful when the data series is normalized or at least centered around zero. High MAPE values could be misleading if the actual values in the series are small, leading to exaggerated percentages.

  2. Quasi-Stationary Data: You're working with a quasi-stationary random walk, where the differences between time steps are random and centered around zero. A large MAPE might simply reflect the stochastic nature of the data rather than poor forecasting performance.

  3. Divide-by-Zero: MAPE can be skewed or undefined when actual values are close to zero, which is quite possible in a random walk with differences.

  4. Not Symmetric: MAPE does not distinguish between over-forecasts and under-forecasts. If this distinction is important for your application, then MAPE may not be suitable.







# (4) Predicting Stock price using a Simple Model


# Predicting Stock Price Using Simple Moving Average (SMA)[^3]
In this lab we will use the Microsoft's stock price to predict the stock price using the Simple Moving Average or SMA.





```python

## Load Stock Data
# We'll use Microsoft's stock for demonstration. You can replace 'MSFT' with any other stock symbol.
symbol = 'MSFT'
stock_data = yf.download(symbol, start='2022-01-01', end='2022-09-01')

```




```python

## Calculate Simple Moving Average
def simple_moving_average(data, window_size):
    return data['Close'].rolling(window=window_size).mean()

```



![name of the image](  /assets/sample/coming-soon.png  )
*<small> Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1 </small>*




```Python

## Plot Stock Price and SMA
plt.figure(figsize=(12, 6))
plt.plot(stock_data['Close'], label='Actual Price', color='blue')
plt.plot(stock_data['SMA_20'], label=f'SMA {window_size} days', color='red')
plt.title(f'{symbol} Stock Price and {window_size}-Day SMA')
plt.xlabel('Date')
plt.ylabel('Price (in USD)')
plt.legend()
plt.show()

```



# (5) Calculating the model's performances










```python

def evaluate_sma_prediction(sma_series, actual_price_series):
    # Filter out NaN values (SMA can have NaN for the first few points)
    sma_series = sma_series.dropna()
    actual_price_series = actual_price_series.loc[sma_series.index]

    # 1. Calculate differences between predicted and actual prices
    differences = sma_series - actual_price_series

    # 2. Calculate MAD (Mean Absolute Deviation)
    mad = differences.abs().mean()

    # 3. Calculate MAPE (Mean Absolute Percentage Error)
    mape = (differences.abs() / actual_price_series * 100).mean()

    return differences, mad, mape


```




```python

sma_series = stock_data['SMA_20']
actual_price_series = stock_data['Close']

differences, mad, mape = evaluate_sma_prediction(sma_series, actual_price_series)

print(f"Differences between SMA and actual prices: \n{differences.head()}")  # Displaying only the first 5 for brevity
print(f"Mean Absolute Deviation (MAD): {mad:.2f}")
print(f"Mean Absolute Percentage Error (MAPE): {mape:.2f}%")


```



![name of the image](  /assets/sample/coming-soon.png  )
*<small> Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1 </small>*





# Using SMA as Trading Strategy
The SMA can be used to inform on possible buying and selling of stocks.

- **Buy Signal (Golden Crossover)**: A buy signal is generated when the stock's closing price crosses above its SMA line. This is often referred to as a "golden crossover." The rationale is that the stock is gaining momentum and it might be a good time to buy.
- **Sell Signal (Death Crossover)**: A sell signal is generated when the stock's closing price crosses below its SMA line. This is commonly known as a "death crossover." The logic here is that the stock is losing momentum and it may continue to decline, so it might be a good time to sell.

The Simple Moving Average (SMA) is calculated by taking the arithmetic mean of a stock's price over a specific number of past periods or days. Because the SMA is an average of past prices, lag is unavoidable, meaning it does not reflect current or future price movements but provides a smoothed historical perspective. The lag in SMA is the delay between the actual price movement of the stock and the time it takes for this movement to be reflected in the SMA indicator.








```python

print("Hello, world!")
for i in range(10):
    print(i)

```




# (6) Modifying the SMA





```python

print("Hello, world!")
for i in range(10):
    print(i)

```



![name of the image](  /assets/sample/coming-soon.png  )
*<small> Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1 </small>*





```python

print("Hello, world!")
for i in range(10):
    print(i)

```




# (7) Using SMA as Trading Strategy



# SMA and the Lag Issue
The Simple Moving Average (SMA) is calculated by taking the arithmetic mean of a stock's price over a specific number of past periods or days. Because the SMA is an average of past prices, lag is unavoidable, meaning it does not reflect current or future price movements but provides a smoothed historical perspective. The lag in SMA is the delay between the actual price movement of the stock and the time it takes for this movement to be reflected in the SMA indicator.




```python

import pandas as pd
import yfinance as yf
import matplotlib.pyplot as plt
from scipy.signal import find_peaks

# Fetch historical data for Microsoft stock
msft_data = yf.download('MSFT', start='2022-01-01', end='2023-01-01')

# Calculate 53-day SMA
msft_data['53_SMA'] = msft_data['Close'].rolling(window=53).mean()

# Detecting crossings
crossings = ((msft_data['Close'].shift(1) < msft_data['53_SMA'].shift(1)) & (msft_data['Close'] > msft_data['53_SMA'])) | \
            ((msft_data['Close'].shift(1) > msft_data['53_SMA'].shift(1)) & (msft_data['Close'] < msft_data['53_SMA']))

# Find indices where crossings occur
crossing_indices = crossings[crossings].index

# Remove crossings that are closer than 3 days to each other
valid_crossing_indices = []
for i in range(1, len(crossing_indices)):
    if (crossing_indices[i] - crossing_indices[i - 1]).days > 3:
        valid_crossing_indices.append(crossing_indices[i - 1])
# Add the last index if it's far enough from the second to last
if (crossing_indices[-1] - valid_crossing_indices[-1]).days > 3:
    valid_crossing_indices.append(crossing_indices[-1])

# Plot
plt.figure(figsize=(14, 7))
plt.plot(msft_data['Close'], label='MSFT Closing Price', color='blue')
plt.plot(msft_data['53_SMA'], label='53-Day SMA', color='orange')

# Highlight valid crossings
for date in valid_crossing_indices:
    plt.axvline(x=date, color='green', linestyle='--')

# Annotations
for idx, date in enumerate(valid_crossing_indices):
    plt.annotate('TP', (date, msft_data.loc[date, '53_SMA']), textcoords="offset points", xytext=(0,10), ha='center')

plt.title('Microsoft Stock Price and 53-Day SMA with Turning Points')
plt.xlabel('Date')
plt.ylabel('Price')
plt.legend()
plt.show()



```



![name of the image](  /assets/sample/coming-soon.png  )
*<small> Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1 </small>*








# (8) SMA and the Lag issue


```python

print("Hello, world!")
for i in range(10):
    print(i)

```





# (9) Beyond SMA
In this notebook, I will provide you with several other techniques used to better model the quick changes in prices to avoid the delayed decisions inherent of SMA-based models.



# (9) Double Simple Moving Average
The Double Simple Moving Average (SMA) strategy is a classic trading technique used in stock trading and other financial markets. This strategy employs two moving averages: a short-term SMA and a long-term SMA.

  - **Short-term SMA**: A shorter period, such as 20 days, is commonly used for this SMA. It reacts more quickly to recent price changes.
  - **Long-term SMA**: A longer period, such as 50 days or 200 days, is commonly used for this SMA. It reacts more slowly and smoothens out price data over a longer time frame.

The two simple moving averages are then used to identify buy and sell signals in the time series.

  - **Buy Signal (Golden Cross)**
   When the short-term SMA crosses above the long-term SMA, it's generally seen as a bullish sign, indicating that the stock's price has gained momentum and may continue to rise. This crossover suggests it might be a good time to buy.

  - **Sell Signal (Death Cross)**
   When the short-term SMA crosses below the long-term SMA, it's seen as a bearish sign, suggesting that the stock's price momentum is slowing down or reversing. This crossover may be a signal to sell or short-sell the stock.



```Python

import yfinance as yf
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 1. Retrieve Data for 2022
data = yf.download('MSFT', start="2022-01-01", end="2022-12-31")

# 2. Set Long and Short Moving Averages
best_short_sma = 15
best_long_sma = 50

# 3. Identify crossovers using optimal SMA values
data['Short_SMA'] = data['Close'].rolling(window=best_short_sma, min_periods=1, center=False).mean()
data['Long_SMA'] = data['Close'].rolling(window=best_long_sma, min_periods=1, center=False).mean()

data['Signal'] = 0.0
data.loc[data['Short_SMA'] > data['Long_SMA'], 'Signal'] = 1.0
data['Position'] = data['Signal'].diff()

# 4. Plot
plt.figure(figsize=(15,10))
plt.plot(data['Close'], label='Price')
plt.plot(data['Short_SMA'], label=f'Short SMA - {best_short_sma} days', alpha=0.8)
plt.plot(data['Long_SMA'], label=f'Long SMA - {best_long_sma} days', alpha=0.8)

# Plot buy signals
buy_signals = data[data['Position'] == 1]
plt.scatter(buy_signals.index, buy_signals['Close'], marker='^', color='g', alpha=1, label='Buy Signal')

# Plot sell signals
sell_signals = data[data['Position'] == -1]
plt.scatter(sell_signals.index, sell_signals['Close'], marker='v', color='r', alpha=1, label='Sell Signal')

plt.title('MSFT Price & SMA Crossovers 2022')
plt.legend()
plt.show()


```





# (10) Slope Analysis

```Python

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import matplotlib.colors as mcolors

# Download historical data for Microsoft
msft_data = yf.download('MSFT', start='2022-01-01', end='2023-01-01')

# Define short-term and long-term windows
short_window = 15
long_window = 50

# Calculate short-term and long-term SMA
msft_data['Short_SMA'] = msft_data['Close'].rolling(window=short_window).mean()
msft_data['Long_SMA'] = msft_data['Close'].rolling(window=long_window).mean()

# Calculate the slope of the short-term SMA
msft_data['Short_SMA_Slope'] = (msft_data['Short_SMA'] - msft_data['Short_SMA'].shift(short_window)) / short_window
# Calculate the slope of the long-term SMA
msft_data['Long_SMA_Slope'] = (msft_data['Long_SMA'] - msft_data['Long_SMA'].shift(long_window)) / long_window

# Find crossovers
cross_up = (msft_data['Short_SMA'] > msft_data['Long_SMA']) & (msft_data['Short_SMA'].shift(1) <= msft_data['Long_SMA'].shift(1))
cross_down = (msft_data['Short_SMA'] < msft_data['Long_SMA']) & (msft_data['Short_SMA'].shift(1) >= msft_data['Long_SMA'].shift(1))

# Replace any infinite or NaN slope values with zero (or some negligible number)
msft_data['Short_SMA_Slope'].replace([np.inf, -np.inf], np.nan, inplace=True)
msft_data['Short_SMA_Slope'].fillna(0, inplace=True)

# Normalize the slope values to a 0-1 scale for color mapping
min_slope = msft_data['Short_SMA_Slope'].min()
max_slope = msft_data['Short_SMA_Slope'].max()
slope_norm = mcolors.Normalize(vmin=min_slope, vmax=max_slope)

# Create a new plot
plt.figure(figsize=(14, 7))

# Plot the stock price and SMAs
plt.plot(msft_data.index, msft_data['Close'], label='MSFT Close', alpha=0.5)
plt.plot(msft_data.index, msft_data['Short_SMA'], label=f'Short SMA ({short_window})')
plt.plot(msft_data.index, msft_data['Long_SMA'], label=f'Long SMA ({long_window})')

# Mark the slope direction for Short SMA with color and size
for index, row in msft_data.iterrows():
    if not np.isnan(row['Short_SMA_Slope']):
        slope_value = slope_norm(row['Short_SMA_Slope'])  # Normalize slope for color mapping
        color = plt.cm.viridis(slope_value)  # Get color from colormap

        # Adjust the size of the marker based on the absolute slope value
        size = np.abs(row['Short_SMA_Slope']) * 100  # Scale factor for visibility

        plt.scatter(index, row['Short_SMA'], color=color, s=size, alpha=0.7)

# Add a colorbar to show the slope strength
plt.colorbar(plt.cm.ScalarMappable(norm=slope_norm, cmap='viridis'), ax=plt.gca(), label='Slope Strength')

# Set plot labels and title
plt.title('Microsoft Stock Price and SMA Slope Analysis')
plt.xlabel('Date')
plt.ylabel('Price')
plt.legend()
plt.show()



```




# (11) EMA( Exponential Moving Average)[^4]
The class below will estimate the optimal short and long windows for EMA using the first five months of data, then apply those to trade the stock for the last seven months of the year. I've also included plotting and performance measurement.

**NOTE:** The symbol for the gold/death crossovers are placed on the actual stock price used for the transaction. This will make the model more transparent.


```Python


# Download historical data for Microsoft
data = yf.download('MSFT', start='2022-01-01', end='2023-01-01')

# Define short-term and long-term windows
short_window = 15
long_window = 50

data['Short_EMA'] = talib.EMA(data['Close'], timeperiod=short_window)
data['Long_EMA'] = talib.EMA(data['Close'], timeperiod=long_window)

data['Signal'] = 0.0
data.loc[data['Short_EMA'] > data['Long_EMA'], 'Signal'] = 1.0
data['Position'] = data['Signal'].diff()

# 4. Plot
plt.figure(figsize=(15,10))
plt.plot(data['Close'], label='Price')
plt.plot(data['Short_EMA'], label=f'Short EMA - {best_short_sma} days', alpha=0.8)
plt.plot(data['Long_EMA'], label=f'Long EMA - {best_long_sma} days', alpha=0.8)

# Plot buy signals
buy_signals = data[data['Position'] == 1]
plt.scatter(buy_signals.index, buy_signals['Close'], marker='^', color='g', alpha=1, label='Buy Signal')

# Plot sell signals
sell_signals = data[data['Position'] == -1]
plt.scatter(sell_signals.index, sell_signals['Close'], marker='v', color='r', alpha=1, label='Sell Signal')

plt.title('MSFT Price & EMA Crossovers 2022')
plt.legend()
plt.show()

```




# (12) DEMA (Double Exponential Moving Average)[^6]
 Below is a Python class that uses the Double Exponential Moving Average (DEMA) trading strategy. The class includes methods for estimating the best short and long window parameters using the first five months of the data, as well as for applying the DEMA strategy and plotting the stock prices, DEMA lines, and buy/sell signals.


```Python

def dema(series, window):
    ema = series.ewm(span=window).mean()
    dema = 2 * ema - ema.ewm(span=window).mean()
    return dema


# Download historical data for Microsoft
data = yf.download('MSFT', start='2022-01-01', end='2023-01-01')

# Define short-term and long-term windows
short_window = 15
long_window = 50

data['Short_DEMA'] = dema(data['Close'], short_window)
data['Long_DEMA'] =  dema(data['Close'], long_window)

data['Signal'] = 0.0
data.loc[data['Short_DEMA'] > data['Long_DEMA'], 'Signal'] = 1.0
data['Position'] = data['Signal'].diff()

# 4. Plot
plt.figure(figsize=(15,10))
plt.plot(data['Close'], label='Price')
plt.plot(data['Short_DEMA'], label=f'Short DEMA - {best_short_sma} days', alpha=0.8)
plt.plot(data['Long_DEMA'], label=f'Long DEMA - {best_long_sma} days', alpha=0.8)

# Plot buy signals
buy_signals = data[data['Position'] == 1]
plt.scatter(buy_signals.index, buy_signals['Close'], marker='^', color='g', alpha=1, label='Buy Signal')

# Plot sell signals
sell_signals = data[data['Position'] == -1]
plt.scatter(sell_signals.index, sell_signals['Close'], marker='v', color='r', alpha=1, label='Sell Signal')

plt.title('MSFT Price & DEMA Crossovers 2022')
plt.legend()
plt.show()

```



# (13) Hull Moving Average (HMA)[^7]
The Hull Moving Average (HMA) is a type of moving average that is designed to be more responsive to recent price movements, making it faster than a Simple Moving Average (SMA) or an Exponential Moving Average (EMA). The HMA aims to reduce lag in moving averages, which can improve its effectiveness for both trend-following and mean-reversion strategies.

Here's how the HMA is typically used for trading:

Golden Cross and Death Cross

   - Golden Cross: A Golden Cross is said to occur when the HMA crosses above the closing price of the stock. This is usually taken as a bullish signal, indicating that it might be a good time to buy or to go long.

   - Death Cross: A Death Cross is said to occur when the HMA crosses below the closing price of the stock. This is usually taken as a bearish signal, indicating that it might be a good time to sell or to go short.

Overall Strategy in the Given Code

  - Optimization Phase: The code first divides the data into two parts. It uses the first five months of data to find the "best" window size for the HMA. This is done by running a loop over possible window sizes and finding the one that would have produced the highest return if used to trade over the first five months. This is considered the "best" window size.

  - Trading Phase: The code then applies this "best" window size to the next seven months of data. It calculates the HMA with this window size and then:
    - Buys when a Golden Cross occurs (HMA crosses above Close Price)
    - Sells when a Death Cross occurs (HMA crosses below Close Price)

  - Performance Measurement: At the end, it calculates the final value of an initial $10,000 investment based on this strategy and also plots the Close Price, HMA, and points where Golden and Death Crosses occur.

It's important to note that this is a simplified backtesting strategy and has various limitations, such as ignoring transaction costs, slippage, risk management, etc. Always conduct more comprehensive tests and analysis before actually trading.






```Python

def WMA(series, window):
    weights = np.arange(1, window + 1)
    return series.rolling(window).apply(lambda x: np.dot(x, weights)/weights.sum(), raw=True)

def HMA(series, window):
    wma_half = WMA(series, int(window / 2))
    wma_full = WMA(series, window)
    hma = WMA(2 * wma_half - wma_full, int(np.sqrt(window)))
    return hma

# Download historical data for Microsoft
data = yf.download('MSFT', start='2022-01-01', end='2023-01-01')

# Define short-term and long-term windows
short_window = 15
long_window = 50

data['Short_HMA'] = HMA(data['Close'], short_window)
data['Long_HMA'] =  HMA(data['Close'], long_window)

data['Signal'] = 0.0
data.loc[data['Short_HMA'] > data['Long_HMA'], 'Signal'] = 1.0
data['Position'] = data['Signal'].diff()

# 4. Plot
plt.figure(figsize=(15,10))
plt.plot(data['Close'], label='Price')
plt.plot(data['Short_HMA'], label=f'Short HMA - {best_short_sma} days', alpha=0.8)
plt.plot(data['Long_HMA'], label=f'Long HMA - {best_long_sma} days', alpha=0.8)

# Plot buy signals
buy_signals = data[data['Position'] == 1]
plt.scatter(buy_signals.index, buy_signals['Close'], marker='^', color='g', alpha=1, label='Buy Signal')

# Plot sell signals
sell_signals = data[data['Position'] == -1]
plt.scatter(sell_signals.index, sell_signals['Close'], marker='v', color='r', alpha=1, label='Sell Signal')

plt.title('MSFT Price & HMA Crossovers 2022')
plt.legend()
plt.show()


```



![name of the image](  /assets/sample/coming-soon.png  )
*<small> Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1 </small>*






# (14) Directional Moving Index (DMI)[^8] or Average Directional Index (ADX)[^5] / are name the same 

The Average Directional Index (ADX) is a technical indicator that quantifies the strength of a trend in a financial instrument. It doesn't provide information on the direction of the trend, but it can help traders to identify strong trends that are likely to continue.

In the provided Python class using the ADX model, the overall strategy is as follows:
1. Calculation Phase

  - First, we calculate the True Range (TR), Positive Directional Movement (+DM), and Negative Directional Movement (-DM) based on the high, low, and close prices of the stock.

  - Next, we calculate the Positive Directional Indicator (+DI) and Negative Directional Indicator (-DI) based on the rolling sum of TR, +DM, and -DM.

  - Finally, we calculate the ADX based on the +DI and -DI. This gives us an idea of the strength of the trend. Generally, an ADX above 25 indicates a strong trend.

2. Signal Generation

  - A signal to "Go Long" (+1) is generated when +DI is greater than -DI and ADX is greater than a given threshold (25 by default).

  - A signal to "Go Short" (-1) is generated when +DI is less than or equal to -DI and ADX is greater than the threshold (25 by default).

3. Applying the Strategy

  - Daily returns of the stock are calculated based on closing prices.

  - Strategy returns are calculated by multiplying the daily returns by the previous day’s signal (either +1 for long or -1 for short).

  - Cumulative strategy returns are then calculated to understand how the strategy performs over time.

4. Visualization and Performance Measurement

  - The closing prices of the stock are plotted over time.

  - Points where the strategy goes long are marked with a green up-arrow.
  - Points where the strategy goes short are marked with a red down-arrow.

  - Finally, the code calculates the final value of an initial $10,000 investment based on the cumulative strategy returns. This value is printed out to measure the performance of the strategy.

The ADX-based strategy aims to capitalize on strong trends by going long or short based on the directional indicators (+DI and -DI).





```Python

class ADXInvestment:
    def __init__(self, ticker, start_date, end_date):
        self.stock_data = yf.download(ticker, start=start_date, end=end_date)
        self.initial_investment = 10000.0
        self.final_value = 0.0

    def calculate_ADX(self, window=14):
        df = self.stock_data.copy()
        df['High_Low'] = df['High'] - df['Low']
        df['High_Close'] = np.abs(df['High'] - df['Close'].shift())
        df['Low_Close'] = np.abs(df['Low'] - df['Close'].shift())
        df['TR'] = df[['High_Low', 'High_Close', 'Low_Close']].max(axis=1)
        df['+DM'] = df['High'] - df['High'].shift()
        df['-DM'] = df['Low'].shift() - df['Low']
        df.loc[df['+DM'] < 0, '+DM'] = 0
        df.loc[df['-DM'] < 0, '-DM'] = 0
        df['+DM'] = df['+DM'].where(df['+DM'] > df['-DM'], 0)
        df['-DM'] = df['-DM'].where(df['-DM'] > df['+DM'], 0)
        TR_rolling = df['TR'].rolling(window=window).sum()
        DM_positive_rolling = df['+DM'].rolling(window=window).sum()
        DM_negative_rolling = df['-DM'].rolling(window=window).sum()
        df['+DI'] = 100 * DM_positive_rolling / TR_rolling
        df['-DI'] = 100 * DM_negative_rolling / TR_rolling
        df['DX'] = 100 * np.abs((df['+DI'] - df['-DI']) / (df['+DI'] + df['-DI']))
        df['ADX'] = df['DX'].rolling(window=window).mean()
        return df.dropna()

    def apply_strategy(self, ADX_threshold=25):
        df = self.calculate_ADX()
        df['Signal'] = 0.0
        df['Signal'][df['+DI'] > df['-DI']] = 1.0  # Go long
        df['Signal'][df['+DI'] <= df['-DI']] = -1.0  # Go short
        df = df[df['ADX'] > ADX_threshold]  # Filter by ADX
        df['Daily_Return'] = df['Close'].pct_change()
        df['Strategy_Return'] = df['Signal'].shift() * df['Daily_Return']
        df.dropna(inplace=True)

        long_signals = df.index[df['Signal'] == 1.0].intersection(df.dropna().index)
        short_signals = df.index[df['Signal'] == -1.0].intersection(df.dropna().index)

        plt.figure(figsize=(15,10))
        plt.subplot(2,1,1)
        plt.title('ADX Investment Strategy')
        plt.xlabel('Date')
        plt.ylabel('Price')
        plt.plot(df['Close'], label='Close Price', color='black')
        plt.scatter(long_signals, df.loc[long_signals, 'Close'], label='Go Long', marker='^', color='g')
        plt.scatter(short_signals, df.loc[short_signals, 'Close'], label='Go Short', marker='v', color='r')
        plt.legend()

        # Second plot for +DI, -DI, ADX, and baseline
        plt.subplot(2, 1, 2)
        plt.title('Directional Indicators and ADX')
        plt.plot(df['+DI'], label='+DI', color='g')
        plt.plot(df['-DI'], label='-DI', color='r')
        plt.plot(df['ADX'], label='ADX', color='b')
        plt.axhline(y=ADX_threshold, color='c', linestyle='--', label='ADX baseline at 25')
        plt.xlabel('Date')
        plt.ylabel('Value')
        plt.legend()

        plt.tight_layout()
        plt.show()

        df['Cumulative_Strategy_Returns'] = (1 + df['Strategy_Return']).cumprod()
        self.final_value = self.initial_investment * df['Cumulative_Strategy_Returns'][-1]
        print(f"Final value of investment: ${self.final_value:.2f}")

if __name__ == '__main__':
    adx_investment = ADXInvestment('MSFT', '2022-01-01', '2023-01-01')
    adx_investment.apply_strategy()


```




![name of the image](  /assets/sample/coming-soon.png  )
*<small> Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1 </small>*





# (15) Moving Average Convergence Divergence (MACD)[^4]
The Moving Average Convergence Divergence (MACD) is a trend-following momentum indicator that shows the relationship between two moving averages of a security’s price. The MACD is calculated by subtracting the 26-period Exponential Moving Average (EMA) from the 12-period EMA. A nine-day EMA of the MACD, called the "signal line," is then plotted on top of the MACD line, which can function as a trigger for buy and sell signals.
Strategy:

  - Signal Line Crossover: The basic MACD trading strategy involves looking at where the MACD line crosses the signal line:
      - Buy (or Go Long): When the MACD line crosses above the signal line, it generates a bullish signal, suggesting that it may be a good time to buy.
      - Sell (or Go Short): Conversely, when the MACD line crosses below the signal line, it generates a bearish signal, suggesting that it might be a good time to sell.

  - Zero Line Crossovers: The MACD line crossing above or below the zero line is another signal:
      - Above Zero: When MACD is above the zero line, it suggests the stock is in an upward trend (bullish).
      - Below Zero: Conversely, being below the zero line is a bearish indicator.

  - Divergence: When the stock price diverges from the MACD, it signals the end of the current trend:
      - Bullish Divergence: When the price makes a new low but MACD doesn't, it may be a bullish signal.
      - Bearish Divergence: When the price makes a new high but the MACD doesn't, it may be a bearish signal.

  - Overbought or Oversold Conditions: Though not a standalone feature of MACD, traders often use MACD values to identify overbought or oversold conditions in the trading of an asset.

The MACD indicator is often used in combination with other indicators to provide more robust trading signals. Traders may use different periods for the EMAs based on their trading goals and the asset's behavior. Like all indicators, the MACD is not foolproof and should be used in conjunction with other analyses and indicators.






```Python

class MACDInvestment:
    def __init__(self, ticker, start_date, end_date, initial_investment=10000):
        self.ticker = ticker
        self.start_date = start_date
        self.end_date = end_date
        self.initial_investment = initial_investment
        self.data = yf.download(self.ticker, self.start_date, self.end_date)

    def calculate_MACD(self):
        self.data['12_EMA'] = self.data['Close'].ewm(span=12, adjust=False).mean()
        self.data['26_EMA'] = self.data['Close'].ewm(span=26, adjust=False).mean()
        self.data['MACD'] = self.data['12_EMA'] - self.data['26_EMA']
        self.data['Signal_Line'] = self.data['MACD'].ewm(span=9, adjust=False).mean()
        return self.data

    def apply_strategy(self):
        df = self.calculate_MACD()
        df['Signal'] = 0.0
        df['Signal'][df['MACD'] > df['Signal_Line']] = 1.0
        df['Signal'][df['MACD'] <= df['Signal_Line']] = -1.0
        df['Daily_Return'] = df['Close'].pct_change()
        df['Strategy_Return'] = df['Signal'].shift() * df['Daily_Return']
        df.dropna(inplace=True)

        # Plot of stock price and buy/sell signals
        plt.figure(figsize=(15, 10))
        plt.subplot(2, 1, 1)
        plt.title('MACD Investment Strategy')
        plt.plot(df['Close'], label='Close Price', color='black')

        # Plot only where signals exist in df
        buy_signals = df.loc[df['Signal'] == 1.0]
        sell_signals = df.loc[df['Signal'] == -1.0]
        plt.scatter(buy_signals.index, buy_signals['Close'], label='Go Long', marker='^', color='g')
        plt.scatter(sell_signals.index, sell_signals['Close'], label='Go Short', marker='v', color='r')

        plt.xlabel('Date')
        plt.ylabel('Price')
        plt.legend()

        # Create a subplot of MACD indicators
        plt.subplot(2, 1, 2)
        plt.plot(df['MACD'], label='MACD Line', color='blue')
        plt.plot(df['Signal_Line'], label='Signal Line', color='orange')
        plt.axhline(0, linestyle='--', color='black', linewidth=0.8, label='Zero Line')

        plt.scatter(buy_signals.index, buy_signals['MACD'], label='Go Long', marker='^', color='g')
        plt.scatter(sell_signals.index, sell_signals['MACD'], label='Go Short', marker='v', color='r')

        plt.title(f'MACD and Signal Line for {self.ticker}')
        plt.xlabel('Date')
        plt.ylabel('MACD Value')
        plt.legend()

        plt.tight_layout()
        plt.show()

        df['Cumulative_Strategy_Returns'] = (1 + df['Strategy_Return']).cumprod()
        self.final_value = self.initial_investment * df['Cumulative_Strategy_Returns'].iloc[-1]
        print(f"Final value of investment: ${self.final_value:.2f}")

if __name__ == '__main__':
    macd_investment = MACDInvestment('MSFT', '2022-01-01', '2023-01-01')
    macd_investment.apply_strategy()


```






![name of the image](  /assets/sample/coming-soon.png  )
*<small> Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1. Logistic Regression is a classificaiton method which outputs a probability between 0 and 1 </small>*









# Footnote

[^1]: Stationary
[^2]: A random walk is a series where each point is derived from the previous point with some random increment or decrement.
[^3]: Simple Moving Average (SMA)
[^4]: EMA(Exponential Moving Average)
[^5]: The Average Directional Index (ADX) is a technical indicator that quantifies the strength of a trend in a financial instrument.
[^6]: DEMA (Double Exponential Moving Average)
[^7]: Hull Moving Average (HMA)
[^8]: Directional Moving Index (DMI)
[^9]:
[^10]:
[^11]:
[^12]:








