import React, { useState } from 'react'
import axios from 'axios'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { Activity, ShieldCheck, RefreshCw, AlertTriangle, CheckCircle2 } from 'lucide-react'

export default function Predict() {
  const [inputText, setInputText] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handlePredict = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await axios.post('http://localhost:8000/predict', {
        input_text: inputText,
        model_used: 'distilbert'
      })
      setResult(response.data)
    } catch (error) {
      console.error('Error fetching prediction:', error)
      alert('Failed to connect to backend.')
    }
    setLoading(false)
  }

  // Custom colors for classification
  const getStatusConfig = (label) => {
    switch (label.toLowerCase()) {
      case 'depression':
        return { color: 'text-rose-400', bg: 'bg-rose-400/10', border: 'border-rose-400/20', icon: AlertTriangle }
      case 'anxiety':
        return { color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20', icon: AlertTriangle }
      default:
        return { color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20', icon: CheckCircle2 }
    }
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-panel px-4 py-3 !border-slate-600/50">
          <p className="text-white font-medium">{payload[0].payload.word}</p>
          <p className="text-indigo-300 text-sm">Importance: {payload[0].value.toFixed(3)}</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="glass-panel p-8">
        <h2 className="text-2xl font-bold text-white mb-2">Clinical Text Analysis</h2>
        <p className="text-slate-400 mb-6">Enter a patient statement to classify mental health status using Explainable Deep Learning.</p>
        
        <form onSubmit={handlePredict}>
          <textarea 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600 resize-y min-h-[120px]"
            placeholder="e.g., 'I have been feeling really sad and hopeless lately, I can't sleep...'"
            required
          />
          <div className="flex justify-end mt-4">
            <button 
              type="submit" 
              disabled={loading || !inputText.trim()}
              className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-semibold py-2.5 px-6 rounded-lg transition-all shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] disabled:shadow-none flex items-center gap-2"
            >
              {loading ? <><RefreshCw className="animate-spin" size={18} /> Analyzing...</> : 'Analyze Text'}
            </button>
          </div>
        </form>
      </div>

      {result && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in zoom-in-95 duration-500">
          {/* Classification Result Card */}
          <div className="glass-panel p-6 col-span-1 flex flex-col justify-center relative overflow-hidden">
            <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl opacity-20 ${getStatusConfig(result.predicted_label).bg.replace('/10', '')}`} />
            
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">Prediction</h3>
            
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-4 rounded-2xl ${getStatusConfig(result.predicted_label).bg} ${getStatusConfig(result.predicted_label).border} border`}>
                {React.createElement(getStatusConfig(result.predicted_label).icon, { className: `w-8 h-8 ${getStatusConfig(result.predicted_label).color}` })}
              </div>
              <div>
                <h2 className={`text-3xl font-extrabold ${getStatusConfig(result.predicted_label).color}`}>
                  {result.predicted_label}
                </h2>
                <p className="text-slate-300 mt-1">
                  Confidence: <span className="font-semibold text-white">{(result.confidence * 100).toFixed(1)}%</span>
                </p>
              </div>
            </div>
          </div>

          {/* XAI Visualization Card */}
          <div className="glass-panel p-6 col-span-1 md:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="text-indigo-400" size={20} />
                  Explainability Layer
                </h3>
                <p className="text-slate-400 text-sm mt-1">Method: <span className="text-indigo-300 font-medium">{result.explanation.method}</span></p>
              </div>
            </div>
            
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={result.explanation.features} layout="vertical" margin={{ top: 0, right: 0, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#334155" />
                  <XAxis type="number" hide />
                  <YAxis dataKey="word" type="category" axisLine={false} tickLine={false} tick={{fill: '#cbd5e1', fontSize: 13}} width={80} />
                  <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                  <Bar dataKey="importance" radius={[0, 4, 4, 0]} barSize={24}>
                    {result.explanation.features.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={`url(#colorGradient)`} />
                    ))}
                  </Bar>
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
