import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [emailText, setEmailText] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setEmailText(event.target.value);
  };

  const handleSubmit = async () => {
    if (!emailText) {
      alert("Please enter an email text!");
      return;
    }

    setLoading(true);
    try {
      // Send a POST request to the FastAPI backend
      const response = await axios.post("http://127.0.0.1:8000/predict", {
        email_text: emailText,
      });

      // Update the prediction state based on the response
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("There was an error!", error);
      alert("Error in predicting spam.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-500">
        Spam Email Detection
      </h1>
      <textarea
        value={emailText}
        onChange={handleInputChange}
        rows="5"
        cols="50"
        placeholder="Enter the email text here"
        className="p-4 mb-4 border-2 border-gray-300 rounded-md shadow-sm w-4/5 md:w-1/2"
      />
      <br />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`py-2 px-6 rounded-md text-white ${
          loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-700"
        }`}
      >
        {loading ? "Loading..." : "Check if Spam"}
      </button>
      {prediction && (
        <div className="mt-6 text-xl font-semibold">
          <h3 className="text-green-600">
            {prediction === "Spam" ? "Spam" : "Not Spam"}
          </h3>
        </div>
      )}
    </div>
  );
};

export default App;
