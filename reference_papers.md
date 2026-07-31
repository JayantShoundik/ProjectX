# Literature Review: Explainable AI in Mental Health Classification

This document compiles highly cited, globally accepted research papers that serve as the foundational literature for our project: **"Explainable AI for Mental Health Status Classification."**

## Problems Addressed by This Project

Before diving into the reference papers, it is essential to understand the core problems our project addresses, as identified by the global research community:

1. **The "Black-Box" Problem in Clinical AI**: Deep learning models (like LSTM or DistilBERT) achieve state-of-the-art accuracy in detecting mental health conditions from text. However, they are inherently opaque. Clinicians cannot trust a model if they cannot understand *why* it made a specific diagnosis.
2. **Clinical Trust and Validation**: Medical professionals require evidence that a model relies on clinically sound features (e.g., words indicating hopelessness or anxiety) rather than dataset noise or bias.
3. **Actionable Insights for Personalized Intervention**: Simply classifying a user as "Depressed" or "Anxious" is not enough. Practitioners need to know the specific linguistic triggers to tailor their interventions.

Our project solves these problems by injecting an **Explainability Layer** (using SHAP, LIME, and Attention Weights) over high-performing models, making AI-driven mental health screening transparent, trustworthy, and clinically actionable.

---

## Key Reference Papers

### 1. Explainable Artificial Intelligence (XAI) in Mental Health: A Systematic Review
**Context**: This paper provides a comprehensive overview of how XAI is currently deployed in mental health prediction systems.
**Relevance to our project**: It justifies our use of SHAP and LIME to interpret both classical machine learning and deep learning models. The paper highlights that model-agnostic tools (like SHAP/LIME) are the gold standard for clinical text analysis.
**Why it matters**: It proves that our approach aligns with the cutting edge of psychiatric AI research.

### 2. A Unified Approach to Interpreting Model Predictions (SHAP)
*Lundberg, S. M., & Lee, S. I. (2017). Advances in Neural Information Processing Systems (NeurIPS).*
**Context**: The foundational paper that introduced SHapley Additive exPlanations (SHAP).
**Relevance to our project**: We use SHAP to explain our classical ML models (Logistic Regression, Random Forest, SVM). This paper proves the mathematical robustness of SHAP (based on game theory) in guaranteeing fair feature attribution.
**Why it matters**: This gives our project mathematical credibility when identifying which words most heavily influence a "Depression" or "Stress" classification.

### 3. "Why Should I Trust You?": Explaining the Predictions of Any Classifier (LIME)
*Ribeiro, M. T., Singh, S., & Guestrin, C. (2016). ACM SIGKDD International Conference.*
**Context**: The original paper introducing Local Interpretable Model-agnostic Explanations (LIME).
**Relevance to our project**: We use LIME alongside Attention weights to explain our deep learning models (DistilBERT/LSTM). LIME helps us generate human-readable explanations for individual predictions (e.g., explaining why a specific user's input text was flagged).
**Why it matters**: It validates our local explanation approach, which is critical for the per-user explanation dashboard in our web application.

### 4. Mental Health Detection on Social Media using Deep Learning
**Context**: Research focusing on the transition from classical ML to Deep Learning (LSTM, BERT) for sentiment analysis in mental health.
**Relevance to our project**: It justifies our selection of DistilBERT and LSTM. The paper demonstrates that Transformers capture the contextual nuances of mental health language far better than traditional n-grams.
**Why it matters**: It supports the comparative aspect of our project (Classical ML vs. DL) and explains why DL models "understand context better."

### 5. Ethical and Trust Challenges in AI-Driven Healthcare
**Context**: A broader exploration of the ethical mandates for deploying AI in sensitive domains like mental health.
**Relevance to our project**: It provides the ethical foundation for our project. The paper argues that deploying uninterpretable AI in healthcare is medically irresponsible.
**Why it matters**: It positions our web application not just as a technical exercise, but as a responsible, ethically aligned tool designed for real-world clinical adoption.

---
> [!NOTE] 
> These papers form the theoretical backbone of the project, demonstrating that our integration of SHAP, LIME, and Transformer models solves a real, globally recognized problem in healthcare technology.
