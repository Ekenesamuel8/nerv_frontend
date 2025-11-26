"use client";

import { useState } from "react";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function RegisterGamePage() {
  const [video, setVideo] = useState<File | null>(null);
  const [files, setFiles] = useState<File[]>([]);

  const [uploadProgress, setUploadProgress] = useState(75);

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setVideo(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles(selectedFiles);
  };

  const isImage = (file: File) => {
  return file.type.startsWith("image/");
  };

  const isSecondImage = (file: File) => {
  return file.type.startsWith("image/");
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-20 py-16 pt-32">
      <h1 className="font-fancy text-4xl mb-2">Register Your Game</h1>
      <p className="text-gray-400 mb-10">
        Submit your game to our platform. It’s fast and easy.
      </p>

      <form className="space-y-8">
        {/* Name + Genre */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-sm">Firstname</label>
            <input
              type="text"
              placeholder="Game Clash"
              className="w-full rounded-md bg-zinc-900 border border-zinc-700 px-4 py-3 outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Genre</label>
            <input
              type="text"
              placeholder="Combat"
              className="w-full rounded-md bg-zinc-900 border border-zinc-700 px-4 py-3 outline-none"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 text-sm">Description</label>
          <textarea
            rows={5}
            placeholder="Tell us about your game..."
            className="w-full rounded-md bg-zinc-900 border border-zinc-700 px-4 py-3 outline-none"
          ></textarea>
        </div>

        {/* Platform + Release date */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-sm">Platform</label>
            <div className="space-y-2">
              {["Pc", "Mobile", "Mac", "Linux"].map((platform) => (
                <label key={platform} className="flex items-center space-x-2">
                  <input type="checkbox" className="accent-indigo-600" />
                  <span>{platform}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm">Release date</label>
            <input
              type="date"
              className="w-full rounded-md bg-zinc-900 border border-zinc-700 px-4 py-3 outline-none"
            />
          </div>
        </div>

        {/* Game asset upload */}
        <div>
          <label className="block mb-2 text-sm">Game asset</label>

          {files.length > 0 ? (
            <div className="space-y-3">
              {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between">
                   {/* Image Preview if image */}
                  {isImage(file) ? (
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                  ) : (
                    <div className="w-20 h-20 flex items-center justify-center bg-zinc-800 rounded-md text-gray-400 text-xs">
                      {file.type || "FILE"}
                    </div>
                  )}
                  <button
                    type="button"
                    className="text-red-500 text-sm"
                    onClick={() => setFiles(prev => prev.filter((_, i) => i !== index))}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-zinc-700 rounded-md cursor-pointer hover:border-indigo-600 transition">
              <FontAwesomeIcon icon={faCloudArrowUp} />
              <p className="text-gray-400 text-sm">
                Drag and drop your files here or <span className="text-indigo-600">browse</span>
              </p>
              <input type="file" className="hidden" onChange={handleFileChange} multiple />
            </label>
          )}
        </div>

        {/* Project logo upload */}
        <div>
          <label className="block mb-2 text-sm">Game logo</label>
          {video ? (
            <div className="flex items-center justify-between">
                  {/* Image Preview if image */}
              {isSecondImage(video) ? (
                <img
                  src={URL.createObjectURL(video)}
                  alt={video.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
              ) : (
                <div className="w-20 h-20 flex items-center justify-center bg-zinc-800 rounded-md text-gray-400 text-xs">
                  {video.type || "FILE"}
                </div>
              )}
              <button
                type="button"
                onClick={() => setVideo(null)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-zinc-700 rounded-md cursor-pointer hover:border-indigo-600 transition">
                    <FontAwesomeIcon icon={faCloudArrowUp} />
              <p className="text-gray-400 text-sm">
                Drag and drop your file here or <span className="text-indigo-600">browse</span>
              </p>
              <input type="file" className="hidden" onChange={handleVideoChange} />
            </label>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 rounded-md bg-zinc-700 hover:bg-zinc-600 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
