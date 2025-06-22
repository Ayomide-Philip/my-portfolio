"use client";
import { motion } from "framer-motion";
import {
  FaEllipsisH,
  FaThumbsUp,
  FaCommentAlt,
  FaRetweet,
  FaPaperPlane,
} from "react-icons/fa";

export default function PostMessage() {
  return (
    <section className="bg-gray-900 flex items-center flex-col justify-center px-4 py-10 pb-26">
      <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
        Latest Post
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-lg max-w-2xl w-full overflow-hidden mb-10"
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-5">
            <div className="flex items-center space-x-4">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                alt="User Avatar"
              />
              <div>
                <p className="font-semibold text-gray-900">
                  Areo Ayomide Philip
                </p>
                <p className="text-sm text-gray-500">Frontend Developer</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-black">
              <FaEllipsisH />
            </button>
          </div>

          {/* Post Text */}
          <p className="text-gray-800 text-sm leading-relaxed mb-4">
            Excited to share some insights from the recent Cloud Native
            Conference! Key takeaways revolved around improved Kubernetes
            security practices and the growing adoption of serverless
            architectures.
            <span className="text-blue-600 ml-1 hover:underline cursor-pointer">
              #cloudnative #kubernetes #serverless #devops
            </span>
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-lg overflow-hidden mb-4"
          >
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=870&q=80"
              alt="Post content"
              className="w-full object-cover"
            />
          </motion.div>

          <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
            <div className="flex items-center space-x-2">
              <span>👍 235</span>
            </div>
            <div className="space-x-3">
              <span className="hover:underline cursor-pointer">
                41 comments
              </span>
              <span className="hover:underline cursor-pointer">18 reposts</span>
            </div>
          </div>

          <div className="flex justify-between border-t pt-3 text-black">
            {[
              { icon: <FaThumbsUp />, label: "Like" },
              { icon: <FaCommentAlt />, label: "Comment" },
              { icon: <FaRetweet />, label: "Repost" },
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

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-lg max-w-2xl w-full overflow-hidden"
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-5">
            <div className="flex items-center space-x-4">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                alt="User Avatar"
              />
              <div>
                <p className="font-semibold text-gray-900">Michael Chen</p>
                <p className="text-sm text-gray-500">
                  Lead Engineer • 1d • Edited
                </p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-black">
              <FaEllipsisH />
            </button>
          </div>

          {/* Post Text */}
          <p className="text-gray-800 text-sm leading-relaxed mb-4">
            Excited to share some insights from the recent Cloud Native
            Conference! Key takeaways revolved around improved Kubernetes
            security practices and the growing adoption of serverless
            architectures.
            <span className="text-blue-600 ml-1 hover:underline cursor-pointer">
              #cloudnative #kubernetes #serverless #devops
            </span>
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-lg overflow-hidden mb-4"
          >
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=870&q=80"
              alt="Post content"
              className="w-full object-cover"
            />
          </motion.div>

          <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
            <div className="flex items-center space-x-2">
              <span>👍 235</span>
            </div>
            <div className="space-x-3">
              <span className="hover:underline cursor-pointer">
                41 comments
              </span>
              <span className="hover:underline cursor-pointer">18 reposts</span>
            </div>
          </div>

          <div className="flex justify-between border-t pt-3 text-black">
            {[
              { icon: <FaThumbsUp />, label: "Like" },
              { icon: <FaCommentAlt />, label: "Comment" },
              { icon: <FaRetweet />, label: "Repost" },
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
    </section>
  );
}
