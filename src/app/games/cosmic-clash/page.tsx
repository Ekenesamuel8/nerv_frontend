"use client";

import { Button } from "@/components/ui/button";

export default function CosmicClash() {
  return (
    <div className="min-h-screen bg-black text-gray-300 px-6 md:px-20 py-10 pt-32">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white">Cosmic Clash</h1>
        <p className="text-sm text-gray-500 my-1">
          By <span className="text-white">NERV Studios</span> • Genre: <span className="text-white">Action RPG</span>
        </p>

        {/* Tabs */}
        <div className="flex gap-12 mt-9 text-sm">
          <button className="text-white border-b-2 border-white pb-1 px-2">
            Overview
          </button>
          <button className="hover:text-white">Leaderboards</button>
          <button className="hover:text-white">Quests</button>
          <button className="hover:text-white">Patch Info</button>
        </div>
      </header>

      {/* Main Layout */}
      {/* Banner */}
      <div className=" overflow-hidden my-15">
        <img
          src="/images/game1.jpg"
          alt="Cosmic Clash Banner"
          className="w-full object-cover "
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Section */}
        <section className="lg:col-span-2 space-y-10">

          {/* About */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">
              About Cosmic Clash
            </h2>
            <p className="text-gray-400 leading-relaxed">
              In a universe where strength is everything, challengers rise for glory.
              Master your skills, form alliances, and battle through cosmic realms to
              claim your place among legends.
            </p>
          </div>

          {/* Developer Notes */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">
              Developer Notes
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We’re working to enhance battle mechanics, visuals, and balance across
              classes. Future updates will focus on expanding co-op modes and refining
              the AI of key bosses.
            </p>
          </div>

          {/* Patch Logs */}
          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">
              Patch Logs (v1.2.3)
            </h2>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Improved beam cannon visuals and reduced recoil.</li>
              <li>Fixed bug causing XP resets after missions.</li>
              <li>Balanced enemy AI for fairer mid-tier combat zones.</li>
              <li>New UI for leaderboard and profile integration.</li>
            </ul>
          </div>

          {/* Reviews Section */}
          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">User Reviews</h2>

            {/* Review Form */}
            <div className="bg-gray-900 p-4 rounded-xl mb-6">
              <p className="mb-2 text-gray-400 text-sm">Write a review</p>
              <textarea
                placeholder="Share your thoughts..."
                className="w-full p-3 rounded-lg bg-black border border-gray-700 text-gray-300 focus:ring-2 focus:ring-purple-500 outline-none resize-none"
              ></textarea>
              <Button className="mt-3 bg-purple-600 hover:bg-purple-700 text-sm">
                Submit Review
              </Button>
            </div>

            {/* Example Reviews */}
            <div className="space-y-4">
              <div className="bg-gray-900 p-4 rounded-xl">
                <h4 className="font-semibold text-white">GameGod</h4>
                <p className="text-gray-400 text-sm">
                  Amazing visuals and combat system. The latest patch fixed my biggest
                  issues — love it!
                </p>
              </div>
              <div className="bg-gray-900 p-4 rounded-xl">
                <h4 className="font-semibold text-white">Donell</h4>
                <p className="text-gray-400 text-sm">
                  The multiplayer feels smoother now. Can’t wait for more quests!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Right Section */}
        <aside className="space-y-6">
          {/* Playtest */}
          <div className="bg-gray-900 rounded-xl p-5">
            <h3 className="text-white font-semibold mb-3">Game Status / Playtest</h3>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 mb-2">
              Join Test
            </Button>
            <Button variant="primary" className="w-full text-gray-400 border-gray-700">
              Re-test
            </Button>
          </div>

          {/* Feedback */}
          <div className="bg-gray-900 rounded-xl p-5">
            <h3 className="text-white font-semibold mb-3">Bug Tracker & Feedback</h3>
            <Button
              variant="primary"
              className="w-full text-gray-400 border-gray-700 hover:text-white"
            >
              Submit Report
            </Button>
          </div>

          {/* Rewards */}
          <div className="bg-gray-900 rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">Earnable Rewards</h3>
            <p className="text-gray-400 text-sm">
              1500 XP Token for completing 5 matches
            </p>
          </div>

          {/* Community */}
          <div className="bg-gray-900 rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">Community</h3>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Join Discussion
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
