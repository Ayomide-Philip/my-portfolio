"use client";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaUser,
} from "react-icons/fa";
import getIpAddress, { getLocation } from "@/lib/getIP";
const ip = await getIpAddress();
const location = await getLocation(ip);

export default function LetConnect({ name, emailAddress }) {
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
        <div className="flex items-start">
          <span className="bg-amber-600 p-2 rounded-full mr-4">
            <FaMapMarkerAlt className="w-5 h-5" />
          </span>
          <div>
            <h3 className="text-lg font-semibold">Your Location:</h3>
            <p className="text-white">{`${location.city}, ${location.region}, ${location.country}.`}</p>
          </div>
        </div>

        <div className="flex items-start">
          <span className="bg-amber-500 p-2 rounded-full mr-4">
            <FaUser className="w-5 h-5" />
          </span>
          <div>
            <h3 className="text-lg font-semibold">Your Name:</h3>
            <p className="text-white">{name === null ? "Thony Stone" : name}</p>
          </div>
        </div>

        <div className="flex items-start">
          <span className="bg-amber-500 p-2 rounded-full mr-4">
            <FaEnvelope className="w-5 h-5" />
          </span>
          <div>
            <h3 className="text-lg font-semibold">Your Email:</h3>
            <p className="text-white">
              {emailAddress === null ? "thonystone@gmail.com" : emailAddress}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex space-x-4">
        {[
          {
            link: "https://web.facebook.com/ayo.areo.90",
            label: "Facebook",
            icon: FaFacebookF,
          },
          {
            link: "https://www.instagram.com/ayomide.philip.1379/",
            label: "Instagram",
            icon: FaInstagram,
          },
          {
            link: "https://x.com/areo_ayomi70157",
            label: "Twitter",
            icon: FaTwitter,
          },
          {
            link: "https://github.com/Ayomide-Philip",
            label: "Github",
            icon: FaGithub,
          },
        ].map(({ link, label, icon: Icon }) => {
          return (
            <Link
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
            </Link>
          );
        })}
      </div>
    </div>
  );
}
