import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Profile from './pages/Profile'

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow p-4 flex justify-between">
        <div className="font-bold text-xl">KANZFORCE</div>
        <div className="space-x-4">
          <Link to="/" className="text-blue-600">Home</Link>
          <Link to="/dashboard" className="text-blue-600">Dashboard</Link>
          <Link to="/login" className="text-blue-600">Login</Link>
        </div>
      </nav>
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </main>
    </div>
  )
}
