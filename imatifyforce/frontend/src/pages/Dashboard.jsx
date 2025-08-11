import React from 'react'
export default function Dashboard(){
  const now = new Date()
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold">Exam Countdown</h3>
          <p className="mt-2">Your exam is in: <strong>-- days</strong> (uses local timezone)</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold">Progress</h3>
          <p className="mt-2">You have attempted: <strong>0</strong> mocks</p>
        </div>
      </div>
    </div>
  )
}
