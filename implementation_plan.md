# XAI for Mental Health Project Setup

This plan outlines the steps to build the backend (Rekha's responsibility), a basic frontend, and the necessary documentation for the presentation and literature review.

## User Review Required

> [!IMPORTANT]
> Since the other team members haven't provided the ML models (SHAP/LIME, LSTM, etc.), I will mock the model prediction and explanation endpoints in the backend so that the API contract is fulfilled and the frontend has data to display. Please confirm if mocking the ML models is acceptable for now.

## Proposed Changes

### Backend (FastAPI)
The backend will be built using FastAPI, satisfying Rekha's role (Member C).
- Initialize a Python project in `backend/`
- `main.py`: Set up the FastAPI app with CORS middleware.
- `routes/auth.py`: JWT-based authentication (Mocked for simplicity).
- `routes/predict.py`: Endpoints for `/predict` and `/explain` that return mock SHAP/LIME explanation data and classifications.
- `database.py`: SQLAlchemy setup for PostgreSQL (can use SQLite locally for easy testing).
- `requirements.txt`: Dependencies like `fastapi`, `uvicorn`, `sqlalchemy`, `pydantic`.

### Frontend (React + Vite)
A basic React interface to demonstrate the backend integration (Member D's role).
- `frontend/`: Initialize via Vite (`npm create vite@latest frontend -- --template react`).
- Create basic components for Authentication (Login/Register).
- Create a Prediction form component where users can submit text.
- Create a visualization component (using Recharts) to display the mock SHAP explanations.

### Documentation Artifacts
- **Reference Papers**: I will compile a list of worldwide-accepted research papers on XAI in Mental Health, detailing the problems this project solves (black-box models in healthcare, building clinical trust).
- **Presentation Notes for Rekha**: A 1-page document tailored for Rekha to explain her backend architecture, the API design, JWT auth, database schemas, and how her work bridges the gap between the ML models and the user interface.

## Verification Plan
- Run the FastAPI server and verify the `/predict` and `/explain` endpoints return the expected JSON structures.
- Run the Vite dev server and ensure the frontend can communicate with the backend API.
- Verify the documentation artifacts cover all requirements for Rekha's presentation.
