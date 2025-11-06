"use client";

import { useState, useRef } from "react";

export default function CreateLivePage() {
  const [recording, setRecording] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Start recording: screen + camera
  const startRecording = async () => {
    try {
      // Get the screen stream
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: { frameRate: 30 },
        audio: true,
      });

      // Get camera stream (optional)
      const camStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      // Combine both
      const combinedStream = new MediaStream([
        ...screenStream.getTracks(),
        ...camStream.getTracks(),
      ]);

      // Show preview
      if (videoRef.current) {
        videoRef.current.srcObject = combinedStream;
        videoRef.current.play();
      }

      // Start recording
      const mediaRecorder = new MediaRecorder(combinedStream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "video/webm" });
        const url = URL.createObjectURL(blob);
        setPreviewUrl(url);
      };

      mediaRecorder.start();
      setRecording(true);
    } catch (err) {
      console.error("Error starting recording:", err);
    }
  };

  // Stop recording
  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 font-federant">Create Live</h1>

      <div className="flex flex-col items-center">
        <video
          ref={videoRef}
          autoPlay
          muted
          className="rounded-xl border border-gray-700 w-full max-w-3xl h-[400px] object-cover"
        ></video>

        <div className="mt-6 flex gap-4">
          {!recording ? (
            <button
              onClick={startRecording}
              className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700 transition"
            >
              Start Recording
            </button>
          ) : (
            <button
              onClick={stopRecording}
              className="bg-red-600 px-6 py-3 rounded-lg hover:bg-red-700 transition"
            >
              Stop Recording
            </button>
          )}
        </div>

        {previewUrl && (
          <div className="mt-8">
            <h2 className="text-lg mb-3">Recording Preview:</h2>
            <video
              src={previewUrl}
              controls
              className="rounded-xl border border-gray-700 w-full max-w-3xl"
            ></video>
          </div>
        )}
      </div>
    </div>
  );
}
