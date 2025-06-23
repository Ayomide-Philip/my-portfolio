"use client";
import { motion } from "framer-motion";
import profile from "@/public/Snapchat-626696856.jpg";
import Image from "next/image";
import Link from "next/link";
import {
  FaEllipsisH,
  FaThumbsUp,
  FaCommentAlt,
  FaPaperPlane,
} from "react-icons/fa";
import post from "@/lib/post";

export default function PostMessage() {
  return (
    <section className="bg-gray-900 flex flex-col items-center justify-center px-4 py-16 min-h-screen">
      <h2 className="text-4xl font-bold text-white mb-8">Latest Posts</h2>
      {post.map(
        ({
          id,
          name,
          role,
          description,
          tag,
          imageURL,
          likes,
          comment,
          websiteLink,
        }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-2xl shadow-md max-w-2xl w-full overflow-hidden mb-10 transition"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-5">
                <div className="flex items-center gap-4">
                  <Image
                    className="w-12 h-12 rounded-full object-cover"
                    src={profile}
                    alt="User Avatar"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{name}</p>
                    <p className="text-sm text-gray-500">{role}</p>
                    <p className="text-xs text-gray-400 mt-0.5">1d • Edited</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-black">
                  <FaEllipsisH />
                </button>
              </div>

              <p className="text-gray-800 text-sm leading-relaxed mb-4">
                {description}
              </p>
              {websiteLink && (
                <p className="text-blue-800 text-sm leading-relaxed mb-4">
                  <Link
                    href={websiteLink}
                    className="hover:underline"
                    target="_blank"
                  >
                    {websiteLink}
                  </Link>
                </p>
              )}

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { staggerChildren: 0.05 },
                  },
                }}
                className="flex flex-wrap gap-2 mb-4"
              >
                {tag.map((t) => (
                  <motion.span
                    key={t}
                    variants={{
                      hidden: { opacity: 0, y: 5 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="rounded-full bg-orange-500/90 hover:bg-orange-600 hover:cursor-pointer px-3 py-1 text-xs font-medium text-white transition"
                  >
                    #{t}
                  </motion.span>
                ))}
              </motion.div>

              {imageURL && (
                <motion.div
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-lg overflow-hidden mb-4"
                >
                  <img
                    src={imageURL}
                    alt="Post content"
                    className="w-full object-cover"
                  />
                </motion.div>
              )}

              <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
                <span>{likes} likes</span>
                <span className="hover:underline cursor-pointer">
                  {comment} comments
                </span>
              </div>

              <div className="border-t pt-3 flex justify-between gap-2 text-gray-700 text-sm">
                {[
                  { icon: <FaThumbsUp />, label: "Like" },
                  { icon: <FaCommentAlt />, label: "Comment" },
                  { icon: <FaPaperPlane />, label: "Send" },
                ].map((item, index) => (
                  <button
                    key={index}
                    className="flex items-center justify-center gap-2 py-2 w-full rounded-md hover:bg-gray-100 transition"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )
      )}
    </section>
  );
}
