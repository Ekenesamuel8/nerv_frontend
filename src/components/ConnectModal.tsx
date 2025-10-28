"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConnectModal({ isOpen, onClose }: ConnectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ash/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Box */}
          <motion.div
            className="bg-black text-white rounded-2xl shadow-2xl p-8 text-center max-w-sm w-full mx-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <span className="text-lg font-bold tracking-wider">NERV</span>
            </div><br />

            <h2 className="text-md font-semibold mb-6">Connect to Nerv</h2><br />

            <Button
              variant="secondary"
              className="w-full border border-gray-500 hover:bg-white hover:text-black transition"
              onClick={() => alert('Connecting wallet...')}
            >
              Connect onechain wallet
            </Button><br />

            <button
              onClick={onClose}
              className="mt-6 text-sm text-gray-400 hover:text-gray-200"
            >
              Cancel
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
