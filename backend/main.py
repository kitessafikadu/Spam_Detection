from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib

model = joblib.load('spam_detection.pkl')
vectorizer = joblib.load('vectorizer.pkl')

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # You can specify specific domains for security
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)

class Email(BaseModel):
    email_text: str

@app.post('/predict')
def predict_spam(email: Email):
    email_vector = vectorizer.transform([email.email_text])
    
    prediction = model.predict(email_vector)

    return {"prediction": "Spam" if prediction[0] == 1 else "Not Spam"}
