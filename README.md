# Email Spam Detection

This project implements an Email Spam Detection System using machine learning techniques, 
specifically Logistic Regression and TF-IDF Vectorization for text processing. 
The model is trained to classify emails as spam or not spam based on their content.

## Tech Stack
- Frontend: React & Tailwind CSS
- Backend: FastAPI

## Data
The dataset used for this project is [here on kaggle](https://www.kaggle.com/datasets/meruvulikith/190k-spam-ham-email-dataset-for-classification)

### The dataset should have the following columns:

- text: The content of the email.
- label: The label indicating whether the email is spam (1) or not spam (0).

## Usage
### Data Preprocessing:

- The text data is preprocessed by removing stopwords using TF-IDF Vectorizer.
- The text is then converted into numerical features suitable for machine learning.
### Training the Model:

- The Logistic Regression model is trained on the processed data to classify emails as spam or not.
### Making Predictions:

- After training, the model can be used to predict the classification of new emails.
