import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { Activity, Brain, Server } from 'lucide-react'

export default function Dashboard() {
  const modelMetrics = [
    { name: 'Logistic Reg.', accuracy: 82.1, f1: 80.5, type: 'Classical ML' },
    { name: 'Naive Bayes', accuracy: 76.4, f1: 74.2, type: 'Classical ML' },
    { name: 'SVM', accuracy: 84.5, f1: 83.1, type: 'Classical ML' },
    { name: 'Random Forest', accuracy: 86.8, f1: 85.9, type: 'Classical ML' },
    { name: 'LSTM', accuracy: 91.2, f1: 90.8, type: 'Deep Learning' },
    { name: 'DistilBERT', accuracy: 94.7, f1: 94.5, type: 'Deep Learning' },
  ]

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-panel px-4 py-3 !border-slate-600/50">
          <p className="text-white font-bold mb-1">{label}</p>
          {payload.map((entry, idx) => (
            <p key={idx} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}%
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-700">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 flex items-center gap-4">
          <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-xl border border-indigo-500/30">
            <Server size={24} />
          </div>
          <div>
            <p className="text-slate-400 text-sm font-medium">Active Models</p>
            <h3 className="text-2xl font-bold text-white">6 Deployed</h3>
          </div>
        </div>
        <div className="glass-panel p-6 flex items-center gap-4">
          <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/30">
            <Activity size={24} />
          </div>
          <div>
            <p className="text-slate-400 text-sm font-medium">Top Accuracy</p>
            <h3 className="text-2xl font-bold text-white">94.7% <span className="text-sm font-normal text-slate-500">(DistilBERT)</span></h3>
          </div>
        </div>
        <div className="glass-panel p-6 flex items-center gap-4">
          <div className="p-3 bg-rose-500/20 text-rose-400 rounded-xl border border-rose-500/30">
            <Brain size={24} />
          </div>
          <div>
            <p className="text-slate-400 text-sm font-medium">Dataset Size</p>
            <h3 className="text-2xl font-bold text-white">53,043 <span className="text-sm font-normal text-slate-500">records</span></h3>
          </div>
        </div>
      </div>

      <div className="glass-panel p-8">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white">Model Performance Comparison</h2>
          <p className="text-slate-400 text-sm mt-1">Evaluating Classical ML vs Deep Learning architectures on the test split.</p>
        </div>
        
        <div className="h-[400px] w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={modelMetrics} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
              <XAxis dataKey="name" tick={{fill: '#94a3b8'}} axisLine={false} tickLine={false} />
              <YAxis domain={[70, 100]} tick={{fill: '#94a3b8'}} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.02)'}} />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
              <Bar dataKey="accuracy" name="Accuracy" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={40} />
              <Bar dataKey="f1" name="F1 Score" fill="#10b981" radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
    </div>
  )
}
