---
title: ' Movie Sentiment Analysis  '
author: ernest
date: 2025-04-25 16:20:02 -05:00
last_modified_at: 2023-11-30
categories: [ Notes ]
pin:     # true
math: true
mermaid: true
published: false
tags:   # or [typography, tag-01, tag-02, etc.]
  - notes
  # - tamplate-tag-2
  # - template-tag-3

image: 
   path: /assets/sample/coming-soon.png
   # image: /assets/sample/coming-soon.png
   alt: Expected publishing date: May 2025

# image: 
  # path: /assets/sample/coming-soon.png
  # image: /assets/sample/coming-soon.png
  # alt: Responsive rendering of Chirpy theme on multiple devices.

---


<!-- 


10. Name project
  - Description: 
      objective of the project 
  - Technologies used: 
      tools used / algorithms used and why 
  - Results: 
      what I learnt

Bank Customer Churn Prediction
Description: The main objective of the Bank Customer Churn Prediction project is to analyze the demographics in order to predict whether a customer will leave the bank or not.
Technologies Used: The notebooks uses Random Forest Classifier and Decision Tree Classifier
Results: The Random Forest Classifier and Decision Tree Classifier performed equally well with an accuracy of 87%




NOTES

Large Movie Review Dataset v1.0

Overview

This dataset contains movie reviews along with their associated binary sentiment polarity labels. It is intended to serve as a benchmark for sentiment classification. This document outlines how the dataset was gathered, and how to use the files provided. 

Dataset 

The core dataset contains 50,000 reviews split evenly into 25k train and 25k test sets. The overall distribution of labels is balanced (25k pos and 25k neg). We also include an additional 50,000 unlabeled documents for unsupervised learning. 

In the entire collection, no more than 30 reviews are allowed for any given movie because reviews for the same movie tend to have correlated ratings. Further, the train and test sets contain a disjoint set of movies, so no significant performance is obtained by memorizing movie-unique terms and their associated with observed labels.  In the labeled train/test sets, a negative review has a score <= 4 out of 10, and a positive review has a score >= 7 out of 10. Thus reviews with more neutral ratings are not included in the train/test sets. In the unsupervised set, reviews of any rating are included and there are an even number of reviews > 5 and <= 5.

Files

There are two top-level directories [train/, test/] corresponding to the training and test sets. Each contains [pos/, neg/] directories for the reviews with binary labels positive and negative. Within these directories, reviews are stored in text files named following the convention [[id]_[rating].txt] where [id] is a unique id and [rating] is the star rating for that review on a 1-10 scale. For example, the file
[test/pos/200_8.txt] is the text for a positive-labeled test set
example with unique id 200 and star rating 8/10 from IMDb. The
[train/unsup/] directory has 0 for all ratings because the ratings are omitted for this portion of the dataset.

We also include the IMDb URLs for each review in a separate
[urls_[pos, neg, unsup].txt] file. A review with unique id 200 will have its URL on line 200 of this file. Due the ever-changing IMDb, we are unable to link directly to the review, but only to the movie's review page.

In addition to the review text files, we include already-tokenized bag of words (BoW) features that were used in our experiments. These are stored in .feat files in the train/test directories. Each .feat file is in LIBSVM format, an ascii sparse-vector format for labeled data.  The feature indices in these files start from 0, and the text tokens corresponding to a feature index is found in [imdb.vocab]. So a line with 0:7 in a .feat file means the first word in [imdb.vocab] (the) appears 7 times in that review.

LIBSVM page for details on .feat file format:
http://www.csie.ntu.edu.tw/~cjlin/libsvm/

We also include [imdbEr.txt] which contains the expected rating for each token in [imdb.vocab] as computed by (Potts, 2011). The expected rating is a good way to get a sense for the average polarity of a word in the dataset.

Citing the dataset

When using this dataset please cite our ACL 2011 paper which
introduces it. This paper also contains classification results which you may want to compare against.


@InProceedings{maas-EtAl:2011:ACL-HLT2011,
  author    = {Maas, Andrew L.  and  Daly, Raymond E.  and  Pham, Peter T.  and  Huang, Dan  and  Ng, Andrew Y.  and  Potts, Christopher},
  title     = {Learning Word Vectors for Sentiment Analysis},
  booktitle = {Proceedings of the 49th Annual Meeting of the Association for Computational Linguistics: Human Language Technologies},
  month     = {June},
  year      = {2011},
  address   = {Portland, Oregon, USA},
  publisher = {Association for Computational Linguistics},
  pages     = {142--150},
  url       = {http://www.aclweb.org/anthology/P11-1015}
}

References

Potts, Christopher. 2011. On the negativity of negation. In Nan Li and David Lutz, eds., Proceedings of Semantics and Linguistic Theory 20, 636-659.

Contact

For questions/comments/corrections please contact Andrew Maas
amaas@cs.stanford.edu




-->




# Data dictionnary


Variable Name | Description | Type (In Data File) | Measure (Actual) | Value labels | 
--- | --- | --- | --- | --- | --- | ---
`ids` | ID number | Numeric | Numeric |  | 
`bday` | Date of birth (mm/dd/yyyy)| Date, mm/dd/yyyy | Scale |  | 
`enrolldate` | Date of college enrollment (mm/dd/yyyy) | String| Scale |  | 
`expgradate` | Expected date of college graduation (mm/dd/yyyy) | String | Scale |  |
`Rank` | Class rank | Numeric | Ordinal | 1=Freshman <br> 2=Sophomore <br> 3=Junior <br> 4=Senior |
`Major` | Major | String | Nominal |  |
`Gender` | Gender | Numeric | Nominal | 0=Male / 1=Female |
`Athlete` | Is student an athlete? | Numeric | Nominal | 0 = Non-athlete <br> 1 = Athlete |
`Height` | Height (inches) | Numeric | Scale |  |
`Weight` | Weight (pounds) | Numeric | Scale |  |
`Smoking` | Does student smoke? | Numeric | Nominal | 0 = Nonsmoker <br> 1 = Past smoke <br> 2 = Current smoker |
`print` | 35-meter sprint time (seconds) | Numeric | Scale |  |
`MileMinDur` | Mile run time (hh:mm:ss) | Datetime | Scale |  |
`English` | Score on English placement test (out of 100 points) | Numeric | Scale |  |
`Reading` | Score on Reading placement test (out of 100 points) | Numeric | Scale |  |
`Math` | Score on Math placement test (out of 100 points) | Numeric | Scale |  |
`Writing` | Score on Writing placement test (out of 100 points) | Numeric | Scale |  |
`State` | Is student in-state or out-of-state resident? | String | Nominal |  |
`LiveOnCampus` | Does student live on campus? | Numeric | Nominal | 0 = Off-campus <br> 1 = On-campus |
`LiveOnCampus` | Does student live on campus? | Numeric | Nominal | 0 = Off-campus <br> 1 = On-campus |
`HowCommute` | How does student commute to campus? | Numeric| Nominal | 1 = Walk  <br> 2  = Bike  <br> 3 = Car <br> 4 = Public transit <br> 5 = Other |
`CommuteTime` | How long does it take you to commute to campus? (minutes) | Numeric | Scale |  |
`SleepTime` | About how many hours of sleep do you get per night? | Numeric | textScale |  |
`StudyTime` | About how many hours per week do you study? | Numeric | Scale |  |












## Reference

  - [Codebook](/assets/docs/paper1.pdf){:target="_blank"}
  - item 





