import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Brain, LayoutDashboard, ActivitySquare, LogOut } from 'lucide-react'

// Import Pages
import Auth from './pages/Auth'
import Predict from './pages/Predict'
import Dashboard from './pages/Dashboard'

function Navigation() {
  const location = useLocation()
  
  // Don't show nav on auth page
  if (location.pathname === '/' || location.pathname === '/login') return null

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center border border-indigo-500/30">
              <Brain className="text-indigo-400 w-6 h-6" />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">XAI Clinic</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Link 
              to="/dashboard" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${location.pathname === '/dashboard' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
            >
              <LayoutDashboard size={18} /> Dashboard
            </Link>
            <Link 
              to="/predict" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${location.pathname === '/predict' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
            >
              <ActivitySquare size={18} /> Prediction
            </Link>
            <div className="h-6 w-px bg-slate-700 mx-2" />
            <Link 
              to="/" 
              className="px-4 py-2 rounded-lg text-sm font-medium text-rose-400 hover:bg-rose-500/10 transition-colors flex items-center gap-2"
            >
              <LogOut size={18} /> Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950">
        <Navigation />
        <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/predict" element={<Predict />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
