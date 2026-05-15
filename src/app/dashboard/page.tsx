"use client";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/dist/client/link";

export default function HomePage() {
  const games = [
    {
      title: "VR Games",
      image: "/images/homevr1.jpg",
      discription: "An immersive VR experience that transports players.",
    },
    {
      title: "enter in essport's",
      image: "/images/homevr2.jpg",
      discription: "A thrilling multiplayer game where players.",
    },
    {
      title: "console games",
      image: "/images/homevr3.jpg",
      discription: "A thrilling multiplayer game where players",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <Image
        src="/images/nerv_bkg-hero.jpg"
        alt="NERV gaming arena background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="px-8 md:px-20 py-10 pt-23 md:mr-100 lg:mr-195">
          <div className="mt-10 max-w-xs rounded-full border border-gray-500 bg-transparent p-3 text-center backdrop-blur-xs">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-xs uppercase tracking-widest text-white"
            >
              Join the Ultimate Gaming Experience
            </motion.h2>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-3xl leading-tight tracking-wider font-heading md:text-4xl"
          >
            <div className="pt-3">
              <span
                className="bg-cover bg-center bg-no-repeat pl-2"
                style={{
                  backgroundImage: "url('/images/play-bg.jpg')",
                }}
              >
                Play, Test{" "}
              </span>
            </div>
            <span>Rule the Game</span>
          </motion.h1>

          <p className="mt-2 max-w-md text-white-400">
            Discover early-stage Web3 games. Compete in skill-
            based tournaments. Earn badges, points, and
            reputation all on-chain.
          </p>

          <div className="mt-4 flex gap-4">
            <div className="flex-1 rounded-xl border border-gray-500 bg-transparent px-2 py-2 text-center backdrop-blur-xs hover:bg-indigo-700 lg:px-3 lg:py-3">
              <Link href="#" className="text-sm uppercase tracking-wider text-white">Enter Arena</Link>
            </div>
            <div className="flex-1 rounded-xl border border-gray-500 bg-transparent p-3 text-center backdrop-blur-xs hover:bg-indigo-700">
              <Link href="/developerforgame" className="text-sm uppercase tracking-wider text-white">Add Game</Link>
            </div>
          </div>
        </div>

        {/* Game Cards */}
        <section className="grid gap-6 px-2 pb-3 md:grid-cols-3 md:px-5">
          {games.map((game, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl"
            >
              <div className="flex justify-between p-4">
                <div>
                  <img
                    src={game.image}
                    alt={game.title}
                    className="h-30 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="bottom-4 left-4 w-50 px-4">
                  <h3 className="text-xs font-semibold uppercase">{game.title}</h3><br />
                  <p className="text-[0.625rem] uppercase text-gray-300">{game.discription}</p><br />
                  <div className="flex items-center justify-between text-[0.625rem]">
                    <div className="flex gap-2">
                      <FontAwesomeIcon icon={faHeart} />
                      <p>1.3k</p>
                    </div>
                    <p className="underline">EXPLORE</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
}
