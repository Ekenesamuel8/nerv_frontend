'use client'
import { X } from 'lucide-react'
import { useState } from 'react'

export default function ChatSidebar({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input])
      setInput('')
    }
  }

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-gray-900 p-4 flex flex-col z-40 border-l border-gray-700 py-15 pt-20">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">Live Chat</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2 mb-3">
        {messages.map((msg, i) => (
          <p key={i} className="bg-gray-800 rounded p-2">{msg}</p>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 bg-gray-800 rounded p-2 text-sm"
          placeholder="Type message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage} className="bg-purple-600 px-3 rounded">Send</button>
      </div>
    </div>
  )
}
