"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
export default function LetConnect() {
  const MotionLink = motion.create(Link);
  return (
    <div>
      <h2 className="text-4xl font-extrabold mb-6">
        Let&apos;s <span className="text-amber-500">Connect</span>
      </h2>
      <p className="text-lg text-white mb-8">
        Got a project in mind or just want to chat? I&apos;m always open to new
        ideas and opportunities.
      </p>
      <div className="space-y-6">
        <motion.div
          className="flex items-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-amber-600 p-2 rounded-full mr-4">
            <FaMapMarkerAlt className="w-5 h-5" />
          </span>
          <div>
            <h3 className="text-lg font-semibold">Location</h3>
            <p className="text-white">Lucknow, UP, India</p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="bg-amber-500 p-2 rounded-full mr-4">
            <FaPhoneAlt className="w-5 h-5" />
          </span>
          <div>
            <h3 className="text-lg font-semibold">Phone</h3>
            <p className="text-white">+91 9876543210</p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="bg-amber-500 p-2 rounded-full mr-4">
            <FaEnvelope className="w-5 h-5" />
          </span>
          <div>
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-white">kuldeepprajapati2111@gmail.com</p>
          </div>
        </motion.div>
      </div>

      <div className="mt-10 flex space-x-4">
        {[
          {
            link: "https://web.facebook.com/ayo.areo.90",
            label: "Facebook",
            icon: FaFacebookF,
          },
          { link: "#", label: "Instagram", icon: FaInstagram },
          { link: "#", label: "Twitter", icon: FaTwitter },
          { link: "#", label: "Github", icon: FaGithub },
        ].map(({ link, label, icon: Icon }) => {
          return (
            <MotionLink
              key={label}
              href={link}
              target="_blank"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-amber-500 flex items-center justify-center transition-colors"
              aria-label={label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Icon className="text-lg" />
            </MotionLink>
          );
        })}
      </div>
    </div>
  );
}
