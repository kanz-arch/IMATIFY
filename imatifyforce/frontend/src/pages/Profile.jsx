import React from 'react'
export default function Profile(){
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="bg-white p-4 rounded shadow">
        <p><strong>Name:</strong> Kanz (editable)</p>
        <p className="mt-2"><strong>Bio:</strong> This is a demo bio. Users can edit their profile and upload a photo.</p>
      </div>
    </div>
  )
}
