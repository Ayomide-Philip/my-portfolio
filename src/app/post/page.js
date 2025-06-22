"use client";
import { motion } from "framer-motion";
import profile from "@/public/Snapchat-626696856.jpg";
import Image from "next/image";
import {
  FaEllipsisH,
  FaThumbsUp,
  FaCommentAlt,
  FaPaperPlane,
} from "react-icons/fa";
import post from "@/lib/post";
export default function PostMessage() {
  return (
    <section className="bg-gray-900 flex items-center flex-col justify-center px-4 py-10 pb-26">
      <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
        Latest Post
      </h2>
      {post.map(
        ({ name, role, description, tag, imageURL, likes, comment, id }) => {
          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow-lg max-w-2xl w-full overflow-hidden mb-10"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-5">
                  <div className="flex items-center space-x-4">
                    <Image
                      className="w-12 h-12 rounded-full object-cover"
                      src={profile}
                      alt="User Avatar"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{name}</p>
                      <p className="text-sm text-gray-500">{role}</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-800 text-sm leading-relaxed mb-4">
                  {description}
                  <span className="text-blue-600 ml-1 hover:underline cursor-pointer">
                    #cloudnative #kubernetes #serverless #devops
                  </span>
                </p>
                {imageURL && (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
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
                  <div className="flex items-center space-x-2">
                    <span>{likes} likes</span>
                  </div>
                  <div className="space-x-3">
                    <span className="hover:underline cursor-pointer">
                      {comment} comments
                    </span>
                  </div>
                </div>

                <div className="flex justify-between border-t pt-3 text-black">
                  {[
                    { icon: <FaThumbsUp />, label: "Like" },
                    { icon: <FaCommentAlt />, label: "Comment" },
                    { icon: <FaPaperPlane />, label: "Send" },
                  ].map((item, index) => (
                    <button
                      key={index}
                      className="flex items-center space-x-2 w-full justify-center py-2 rounded hover:bg-gray-100 transition"
                    >
                      <span>{item.icon}</span>
                      <span className="text-sm">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        }
      )}
    </section>
  );
}
