'use client'
import { useEffect, useRef, useState } from 'react'
import ChatSidebar from '@/components/ChatSidebar'
import TipModal from '@/components/TipModal'
import { Camera, Mic, MicOff, MonitorUp, X } from 'lucide-react'

export default function LivePage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [micEnabled, setMicEnabled] = useState(true)
  const [chatOpen, setChatOpen] = useState(false)
  const [showTip, setShowTip] = useState(false)
  const [viewerCount] = useState(45)
  const [isCamera, setIsCamera] = useState(false)

  // stop stream when leaving page
  useEffect(() => {
    return () => stream?.getTracks().forEach((t) => t.stop())
  }, [stream])

  const startStream = async (type: 'camera' | 'screen') => {
    try {
      const newStream =
        type === 'screen'
          ? await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true })
          : await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: true })

      if (videoRef.current) {
        videoRef.current.srcObject = newStream
        videoRef.current.muted = true // prevent feedback
        videoRef.current.play().catch(console.error)
      }
      setStream(newStream)
      setIsCamera(type === 'camera')
    } catch (err) {
      console.error('Stream error:', err)
      alert('Could not access your camera or screen. Please allow permissions.')
    }
  }

  const stopStream = () => {
    stream?.getTracks().forEach((t) => t.stop())
    setStream(null)
    setIsCamera(false)
  }

  const toggleMic = () => {
    if (stream) {
      stream.getAudioTracks().forEach((track) => (track.enabled = !track.enabled))
      setMicEnabled(!micEnabled)
    }
  }

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-black text-white overflow-hidden md:py-20 md:px-15">
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className={`w-full h-full object-contain ${!stream ? 'opacity-20' : 'opacity-100'} transition`}
      />

      {/* Live badge & viewers */}
      {stream && (
        <div className="absolute top-25 left-6 flex gap-3 items-center">
          <span className="bg-purple-700 text-white px-3 py-1 rounded-full text-sm">Live</span>
          <span className="text-gray-300 flex items-center gap-1 text-sm">👁 {viewerCount}</span>
        </div>
      )}

      {/* Controls */}
      <div className="absolute bottom-5 w-full flex flex-col items-center gap-3">
        {/* Stream options */}
        <div className="flex gap-4">
          {!stream && (
            <>
              <button
                onClick={() => startStream('camera')}
                className="bg-purple-600 p-3 rounded-full hover:bg-purple-700"
                title="Start camera"
              >
                <Camera />
              </button>
              <button
                onClick={() => startStream('screen')}
                className="bg-purple-600 p-3 rounded-full hover:bg-purple-700"
                title="Share screen"
              >
                <MonitorUp />
              </button>
            </>
          )}

          {stream && (
            <>
              <button
                onClick={toggleMic}
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700"
                title="Toggle microphone"
              >
                {micEnabled ? <Mic /> : <MicOff />}
              </button>
              <button
                onClick={stopStream}
                className="bg-red-600 p-3 rounded-full hover:bg-red-700"
                title="End stream"
              >
                <X />
              </button>
            </>
          )}
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between w-full px-4">
          <button
            onClick={() => setShowTip(true)}
            className="bg-purple-700 px-4 py-1 rounded text-sm"
          >
            Stream tip: 1k $ve
          </button>

          <button
            onClick={() => setChatOpen(!chatOpen)}
            className="bg-purple-700 px-4 py-1 rounded text-sm"
          >
            {chatOpen ? 'Close Chat' : 'Open Chat'}
          </button>
        </div>
      </div>

      {/* Chat Panel */}
      {chatOpen && (
        // @ts-ignore: allow onClose prop for ChatSidebar until component props are typed
        <ChatSidebar onClose={() => setChatOpen(false)} />
      )}

      {/* Tip Modal */}
      {showTip && <TipModal onClose={() => setShowTip(false)} />}
    </div>
  )
}
