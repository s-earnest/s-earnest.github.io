---
title: ' Data Handling with Python '
author: ernest
date: 2024-11-10 16:20:02 -05:00
last_modified_at: 2025-10-13
categories: [  ]
pin:     # true
math: true
mermaid: true
published: true
tags:   # or [typography, tag-01, tag-02, etc.]
  - data-handling
  - python
  # - stationary
  - learning


# image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.

---


# DISCLAIMER

  - This is theory of investment strategies and presented in this example for educational purpose only. This is not intended to be, and should not be considered as, financial advice or an invitation to invest real money. Trading and investing in financial markets involve significant risks, and you should consult with a qualified financial advisor before making any investment decisions.

  - The education institution and I are not responsible for any actions taken based on the educational content of this example, including but not limited to financial losses or other types of damages. Any application of the techniques for real-world investing is at the **individual's own risk** and **discretion**. I will not be held liable for any misuse of the techniques or information provided, including any financial losses incurred. Always perform your own due diligence and consult professionals when considering any financial investments. The only purpose is to demonstrate the workflow process.



# Why I am using Python for data analysis? 
- (1) reason:

- (2) reason:

- (3) reason: 



Step-by-step process for handling data in Python, from ingestion to deployment. I’ll note common tools and short examples so you can adapt based on your use case.

# 1) Set up your environment
- Create a virtual environment and install core libraries:
- Data wrangling: pandas, pyarrow
- Numeric: numpy
- Visualization: matplotlib, seaborn, plotly
- Validation: pandera or pydantic
- Storage/IO: sqlalchemy (databases), requests (HTTP), fsspec (cloud files)
- Performance (optional): polars, duckdb

# 2) Ingest data
- Local files:
- CSV/TSV: pandas.read_csv("file.csv")
- Parquet: pandas.read_parquet("file.parquet", engine="pyarrow")
- Excel: pandas.read_excel("file.xlsx", sheet_name=0)
- Databases:
    > Use SQLAlchemy: pandas.read_sql("SELECT ...", con=engine)
- APIs/HTTP:
    > Use requests to fetch, then pd.DataFrame.from_records(json)

# 3) Validate inputs early
- Quick checks:
    > df.info(), df.head(), df.shape, df.describe(include="all")
    > assert not df.duplicated(subset=["id"]).any()
- Schema with pandera:
    > Define column types, ranges, nullability; run schema.validate(df)
    > Handle encoding, types, and missing files with try/except and explicit dtype mapping

# 4) Clean and standardize
- Column names: lowercase, snake_case
- Types: df.astype({...}) or pd.to_datetime, pd.to_numeric
- Missing values:
     > Drop rows/cols: df.dropna(...)
     > Impute: df.fillna({...}) or use statistics
     > Duplicates: df.drop_duplicates(subset=[...])
     > Whitespace/casing: df["col"] = df["col"].str.strip().str.lower()
     > Outliers: clip or winsorize depending on context

# 5) Transform and enrich
- Filtering: df.query("amount > 0 and status == 'active'")
- Feature engineering: create new columns from existing ones
- Grouping/aggregations: df.groupby([...]).agg({...}).reset_index()
- Joins: df.merge(df2, on="key", how="left")
- Reshaping: melt/pivot, wide ↔ long
- Date handling: use dt accessors (df["date"].dt.month)

# 6) Handle large data (performance)
Even Excel is a good tools for hanling data, when I have to process more 200 mb, it performances decrease drastically. So Python is the best alternative. 
- Chunked reading: for chunk in pd.read_csv(..., chunksize=100_000): ...
- Use efficient formats: Parquet with compression="snappy" or "zstd"
- Vectorize operations; avoid Python loops
- Consider polars or duckdb for bigger-than-RAM workflows

# 7) Exploratory analysis and visualization
- Summary stats: df.describe(), value_counts()
- Plots:
    > matplotlib/seaborn for static (hist, box, line, bar)
    > plotly for interactive exploration
- Check distributions, correlations (df.corr(numeric_only=True))

# 8) Persist results
- Files:
    > df.to_parquet("data.parquet", index=False)
    > df.to_csv("data.csv", index=False)
•  Databases:
      > df.to_sql("table_name", con=engine, if_exists="replace/append", index=False)
•  Versioned data:
      > Include timestamps or commit hashes in filenames/paths

# 9) Reproducibility and structure
-  Use a clear project layout:
    > data/raw, data/processed, notebooks/, src/, tests/
-  Configuration:
      > Store paths/params in a config file (YAML, TOML) or env vars
-  Notebooks for exploration; .py modules for production logic
-  Set random seeds when using stochastic steps

# 10) Logging and error handling
-  Use the logging module with INFO/WARN/ERROR levels
-  Wrap IO and key transforms with try/except and informative messages
-  Validate assumptions with asserts or pandera

# 11) Testing and data quality
-  Unit tests for transforms (pytest)
-  Golden-data tests: compare outputs to known-small fixtures
-  Data quality checks: duplicates, ranges, referential integrity, null thresholds

# 12) Automation and orchestration
-  Make tasks idempotent (safe to rerun)
-  Use a task runner: make, tox, or Python scripts with CLI (argparse/typer)
-  For pipelines: Airflow, Prefect, Dagster (optional for larger teams)

# 13) Documentation
-  README with setup and run instructions
-  Docstrings for functions; example inputs/outputs
-  Data dictionary describing fields, types, and semantics

# 14) Security and compliance
-  Never hardcode secrets; use env vars or a secret manager
-  PII handling: mask/anonymize, access controls
-  Validate external inputs; sanitize file names/paths

# 15) Deployment options
-  Package the pipeline as a CLI (typer/click)
-  Containerize (Docker) if needed
-  Schedule via cron or a workflow orchestrator
-  Monitor runs and alert on failures or data anomalies


 Example (illustrative):



```python

mport pandas as pd
from sqlalchemy import create_engine

# 1) Ingest
df = pd.read_csv("data/raw/sales.csv", dtype={"id": "int64"}, parse_dates=["order_date"])

# 2) Validate (quick)
assert df["id"].notna().all()
assert (df["amount"] >= 0).all()

# 3) Clean
df.columns = df.columns.str.strip().str.lower()
df["customer"] = df["customer"].str.strip()
df = df.drop_duplicates(subset=["id"])

# 4) Transform
df["year"] = df["order_date"].dt.year
agg = (
    df.query("status == 'completed'")
      .groupby(["year", "region"])
      .agg(total_amount=("amount", "sum"), orders=("id", "nunique"))
      .reset_index()
)

# 5) Persist
agg.to_parquet("data/processed/sales_by_year_region.parquet", index=False)

# 6) Load to DB (optional)
engine = create_engine("postgresql+psycopg2://{{USER}}:{{PASSWORD}}@localhost:5432/analytics")
# agg.to_sql("sales_by_year_region", engine, if_exists="replace", index=False)


```











