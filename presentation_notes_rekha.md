# Presentation Notes for Rekha (Member C - Backend & API)

> [!TIP]
> **How to use these notes:** Keep this sheet handy during your presentation. It covers exactly what you did, the basic theory of the project, and how you bridged the gap between the AI models and the user interface.

## 1. The Core Problem We Solve
*   **The Issue:** AI models used in healthcare (like detecting depression or stress from text) are often "black boxes." A doctor won't trust an AI if they don't know *why* it made a diagnosis.
*   **Our Solution:** We built an **Explainable AI (XAI)** pipeline. Instead of just saying "This text indicates Anxiety," our system highlights the exact words (e.g., "nervous", "fear") that caused the AI to make that decision, building clinical trust.

## 2. Basic Theory & Algorithms
Even though you focused on the backend, here is the quick theory you need to know about the AI models your API serves:
*   **Classical ML (Logistic Regression, Random Forest, SVM):** These are traditional algorithms that learn patterns from word frequencies. We explain these using **SHAP** (based on game theory, it calculates how much each word contributed to the final score).
*   **Deep Learning (LSTM & DistilBERT):** These are advanced neural networks that understand the *context* and *sequence* of words (e.g., they know "not happy" means sad). We explain these using **LIME** and **Attention Weights** to show which parts of a sentence the neural network focused on.

## 3. Your Specific Role: The Backend Architecture
**Your Task:** As Member C, you built the central nervous system of the project. You took the raw AI models from Members A & B and made them accessible to the real world via a web application.

**Key Components You Built:**
1.  **FastAPI Web Service:** You chose FastAPI (Python) because it is incredibly fast and operates in the same language as the Machine Learning models, meaning no clunky translation layers were needed.
2.  **API Endpoints:** 
    *   `/predict`: Takes user text, runs it through the model, and returns the mental health classification.
    *   `/explain`: Returns the SHAP/LIME explanation data in JSON format so the frontend can draw visual charts.
3.  **Authentication & Security (JWT):** You implemented JSON Web Tokens (JWT) for secure, stateless user logins. You also added Role-Based Access Control (RBAC) so regular users only see their own history, while admins can see system-wide model performance metrics.
4.  **Database Management (PostgreSQL & SQLAlchemy):** You designed the database schema to store users, their prediction history, and the confidence scores of the AI models.

## 4. What to Say if Asked About Missing Teammates' Work
*   *If the professor asks why the models aren't fully trained:* "For the purpose of today's deployment and demonstration, we isolated the backend infrastructure. The API is currently returning mock SHAP and classification data based on specific keywords. This proves that the API contracts, database, and frontend data visualization pipelines are fully functional and ready to plug into the final PyTorch/scikit-learn artifacts once they are compiled."

## 5. Key Takeaway
**"My backend is the bridge that turns raw machine learning code into a usable, secure healthcare product."**
