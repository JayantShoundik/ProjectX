# Explainable AI for Mental Health & Sentiment Analysis (Clinical AI Platform)

Welcome to the **Explainable AI Mental Health Platform**. This project bridges the gap between state-of-the-art Deep Learning models and clinical trustworthiness by providing **Explainable AI (XAI)** visualizations alongside sentiment analysis and mental health status predictions.

> **Note**: This README describes the **complete, final architecture** of the project upon its full completion.

---

## 🎯 Project Overview
In critical domains like healthcare and psychiatry, "black box" deep learning models are insufficient. Clinicians need to understand *why* a model made a specific prediction. This project leverages natural language processing (NLP) to classify patient text for mental health conditions (like Depression, Anxiety, or Neutral) and provides mathematically grounded explanations (LIME, SHAP) for every prediction.

## 🚀 Key Features (Full Implementation)
1. **Multi-Model Architecture**: A diverse ensemble of Classical Machine Learning and Deep Learning architectures for robust comparative analysis.
2. **Explainability Layer**: Real-time feature importance visualization using SHAP and LIME to highlight exactly which words/phrases led to a diagnosis.
3. **Clinical Dashboard**: A premium, glassmorphism-inspired UI to track model performance (Accuracy, Precision, Recall, F1-Score).
4. **Secure Backend API**: A FastAPI-driven microservice handling the heavy inference workload.

---

## 🧠 Algorithms & Theoretical Foundation

This project rigorously compares traditional machine learning against advanced deep learning.

### 1. Classical Machine Learning Models
*   **Logistic Regression**: Uses the sigmoid function to map feature probabilities. Provides a strong, inherently interpretable baseline.
*   **Naive Bayes (Multinomial)**: Based on Bayes' Theorem ($P(A|B) = \frac{P(B|A)P(A)}{P(B)}$), assuming conditional independence between textual features (TF-IDF vectors).
*   **Support Vector Machines (SVM)**: Finds the optimal hyperplane that maximizes the margin between mental health classes in a high-dimensional feature space.
*   **Random Forest**: An ensemble method utilizing bagging and decision trees to reduce overfitting and capture non-linear relationships.

### 2. Deep Learning Models
*   **Long Short-Term Memory (LSTM)**: A specialized Recurrent Neural Network (RNN) that mitigates the vanishing gradient problem using input, output, and forget gates, allowing it to capture sequential context in long patient transcripts.
*   **DistilBERT**: A distilled version of Bidirectional Encoder Representations from Transformers (BERT). It utilizes multi-head self-attention mechanisms to deeply understand bidirectional context and semantics in clinical language.

### 3. Explainable AI (XAI) Theorems Used
*   **LIME (Local Interpretable Model-agnostic Explanations)**: Approximates any black-box model locally by perturbing the input text and training a sparse linear model around the prediction space to isolate word importance.
*   **SHAP (SHapley Additive exPlanations)**: Grounded in cooperative game theory (Shapley values). It computes the marginal contribution of each word toward the final prediction, ensuring theoretical guarantees like local accuracy and consistency.

---

## 📊 Data Collection & Datasets

The final models are trained on highly curated, anonymized datasets:
1.  **DAIC-WOZ Database**: Clinical interviews and transcripts designed for diagnosing psychological stress, anxiety, and depression.
2.  **Sentiment140**: For baseline sentiment polarity pre-training.
3.  **Reddit Mental Health Dataset**: Curated posts from subreddits like `r/depression` and `r/anxiety`, meticulously labeled to train the model on colloquial mental health expressions.

*(All data goes through rigorous preprocessing: tokenization, stop-word removal, stemming/lemmatization, and TF-IDF/Word2Vec embedding generation).*

---

## 💻 Tech Stack

### Frontend (User Interface)
*   **Framework**: React (Vite)
*   **Styling**: Tailwind CSS v3 (Custom Dark Mode & Glassmorphism)
*   **Data Visualization**: Recharts (for SHAP/LIME rendering & Dashboard analytics)
*   **Routing**: React Router DOM
*   **HTTP Client**: Axios

### Backend (API & Inference)
*   **Framework**: FastAPI (Python 3.12)
*   **Machine Learning**: Scikit-Learn, PyTorch, Transformers (Hugging Face)
*   **XAI Libraries**: `shap`, `lime`
*   **Server**: Uvicorn

---

## 🛠 Setup & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/JayantShoundik/ProjectX.git
cd ProjectX
```

### 2. Backend Setup
```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```
*The backend API will be available at `http://localhost:8000/docs`.*

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
*The frontend React app will be available at `http://localhost:5173`.*

---

## 👥 Team Responsibilities (Mental Health AI Project)

*   **Member A (Team Leader)**: Project management, GitHub repository setup, overall system architecture, and final presentation coordination.
*   **Member B**: Data collection, cleaning, preprocessing (NLP pipelines), and exploratory data analysis (EDA).
*   **Member C**: Model training (Classical ML + Deep Learning), hyperparameter tuning, and implementation of SHAP/LIME Explainable AI algorithms.
*   **Member D (Frontend/Backend Integration)**: Developed the React/Tailwind frontend, the FastAPI backend, and integrated the XAI outputs into visual dashboards for clinical users.

---

*This project is designed to push the boundaries of how AI can be safely and transparently deployed in psychiatric and psychological clinical settings.*
