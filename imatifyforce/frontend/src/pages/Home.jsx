import React from 'react'
export default function Home(){
  return (
    <div className="max-w-4xl mx-auto">
      <header className="text-center my-12">
        <h1 className="text-4xl font-extrabold">IMATIFY (KANZFORCE) — Starter</h1>
        <p className="mt-4 text-gray-600">Ready-to-use starter: React + Tailwind + Firebase placeholders. Replace demo JSONs in /questions with your full bank later.</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded shadow">
          <h3 className="font-semibold text-lg">Daily Challenge</h3>
          <p className="mt-2 text-sm text-gray-600">Placeholder daily 5-question challenge box. Connect to backend to serve daily quizzes per timezone.</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h3 className="font-semibold text-lg">Full Mocks</h3>
          <p className="mt-2 text-sm text-gray-600">Start full-length mocks (60 Qs each). Demo mock files available in /questions/mocks.</p>
        </div>
      </section>
    </div>
  )
}
