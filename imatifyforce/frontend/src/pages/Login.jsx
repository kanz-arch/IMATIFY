import React from 'react'
export default function Login(){
  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold">Login / Signup (Demo)</h2>
        <p className="text-sm text-gray-600 mt-2">Firebase Auth placeholders — paste your Firebase config in .env.local</p>
        <div className="mt-4">
          <button className="w-full py-2 bg-blue-600 text-white rounded">Sign in with Google (placeholder)</button>
        </div>
      </div>
    </div>
  )
}
