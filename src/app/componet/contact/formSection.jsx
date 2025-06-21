"use client";
import { motion } from "framer-motion";
export default function FormSection() {
  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-xl">
      <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <motion.input
            type="text"
            id="name"
            className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Enter your name"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <motion.input
            type="email"
            id="email"
            className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Enter your email"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <motion.textarea
            id="message"
            rows="4"
            className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Your message..."
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          ></motion.textarea>
        </div>
        <motion.button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-md transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Send Message
        </motion.button>
      </form>
    </div>
  );
}
