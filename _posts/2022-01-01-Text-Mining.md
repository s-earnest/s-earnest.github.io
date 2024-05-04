---
title: ' Text Mining '
author: ernest
date: 2024-01-10 16:20:02 -05:00
last_modified_at: 2023-11-30
categories: [ Notes ]
pin:     # true
math: true
mermaid: true
published: false
tags:   # or [typography, tag-01, tag-02, etc.]
  - text-mining
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



This workflow demonstrates how to perform text mining in Designer, using a NASA PDF document about pioneering space as data.

1. Run the workflow (Ctrl+R) so you can see what each tool does. 

2. Use Image Input to bring in the data for use with other tools. You have to provide the full path to the directory that contains the image or the full path to the iamge file itself. If you specify a directory, the tool brings in all images contained within the directory. (To package the image file as an asset in the YXZP, we had to use the Input, Select, and Sample tools to import the path name, select the path name as a column to include, and then sample only the first row of data. Unless you plan to package a PDF in a YXZP, you can ignore those tools for purposes of this One Model Example.)

3. Use Image to Text to read text into the Text Mining tools. Make sure to identify the language of the text in the image.

4. Use Sentiment Analysis to determine the sentiment of the text you're analyzing. The tool requires you to select an algorithm to perform the analysis and the column you want to analyze. The other parameters are optional, but can improve performance. If you select the connected Browse tool, you can see that the algorithm has determined that the language in the PDF is primarily neutral.

5. Before you perform any text analyses other than sentiment analysis, use Text Pre-processing to clean up the data. (We recommend that you don't clean up data for sentiment analysis because many sentiment-analysis algorithms rely on features found in unprocessed data.) You have to specify the language and text you want to process. The other parameters are optional. However, converting words to their roots and filtering out unwanted characters are usually helpful, but if you do convert words to their roots, don't remove punctuation because the algorithm relies on punctuation to identify sentences. The Stop Words option filters a list of default stop words (available on the Help site). You can filter other stop words by entering them into the text field.

6. Use the Topic Modeling tool to identify topics in the data. You have to identify the data you want to analyze, the number of topics you want to extract from the data, and what kind of output you want to create as a report. The other options in the tool are predefined. In this example, the R anchor shows an interactive chart that allows you to explore the data.

7. Use the word cloud to quickly analyze text input. You have to specify what data you want to use to create the word cloud. All other parameters are predefined or optional.









