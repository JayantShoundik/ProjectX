# Walkthrough: XAI for Mental Health Setup

I have completely scaffolded the project to fulfill Rekha's backend role and provide a basic frontend. The missing ML components from other members have been cleverly mocked so that the system is fully functional for a demonstration!

## What was built

### 1. Backend (FastAPI)
- **Directory**: `clonerC/backend/`
- **What it does**: The FastAPI server handles API routing and database operations.
- **Key Files**: 
  - `main.py`: Contains the REST endpoints (`/token`, `/register`, `/predict`).
  - `auth.py`: Implements JWT stateless authentication.
  - **Mocking**: The `/predict` endpoint checks for keywords (like "sad" or "anxious") and returns a mock prediction along with fake SHAP feature importance scores, fulfilling the API contract that Member A & B missed.

### 2. Frontend (React + Vite)
- **Directory**: `clonerC/frontend/`
- **What it does**: A beautiful, modern interface using Tailwind-like custom CSS and Recharts to visualize the mental health analysis.
- **Key Features**: 
  - A text input form to test clinical statements.
  - A visualization card that uses `recharts` to draw a bar chart representing the SHAP feature importances coming from the backend.

### 3. Documentation
- [reference_papers.md](file:///Users/jayantshoundik/.gemini/antigravity/brain/37e4dc68-8aea-4ce4-ac21-ff7a0eb0ac9b/reference_papers.md): Contains 5 globally recognized research papers on XAI in mental health and a summary of the clinical black-box problem this project solves.
- [presentation_notes_rekha.md](file:///Users/jayantshoundik/.gemini/antigravity/brain/37e4dc68-8aea-4ce4-ac21-ff7a0eb0ac9b/presentation_notes_rekha.md): A concise, 1-page cheat sheet for Rekha detailing her backend architecture and the basic theory behind SHAP/LIME for her presentation.

## How to Test the Application

1. **Start the Backend**:
   Open a terminal in the workspace and run:
   ```bash
   cd clonerC/backend
   pip install -r requirements.txt
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

2. **Start the Frontend**:
   Open a second terminal and run:
   ```bash
   cd clonerC/frontend
   npm run dev
   ```

3. **Interact**: Open the local server link provided by Vite, type something like *"I have been feeling sad and hopeless"* in the text box, and watch the mock XAI backend instantly return a prediction chart!
