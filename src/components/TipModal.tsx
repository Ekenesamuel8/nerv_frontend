'use client'
import { useState } from 'react'

export default function TipModal({ onClose }: { onClose: () => void }) {
  const [amount, setAmount] = useState('')

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-xl w-80">
        <h2 className="text-xl font-bold mb-4">Send a Tip</h2>
        <input
          type="number"
          placeholder="Amount in $ve"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full bg-gray-800 p-2 rounded mb-4"
        />
        <button className="w-full bg-purple-600 py-2 rounded">Send Tip</button>
        <button onClick={onClose} className="w-full text-gray-400 mt-2">Cancel</button>
      </div>
    </div>
  )
}
