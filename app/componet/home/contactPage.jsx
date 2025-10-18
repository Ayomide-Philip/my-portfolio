"use client";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function ContactPage() {
  return (
    <section className="text-gray-600 body-font relative  ">
      <motion.div
        className="absolute inset-0 bg-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.526250131031!2d4.520188674004603!3d7.517431392495406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10383709244c6427%3A0x930bcf60a44908e7!2sObafemi%20Awolowo%20University!5e0!3m2!1sen!2sng!4v1750406967524!5m2!1sen!2sng"
        ></iframe>
      </motion.div>

      <div className="container px-5 py-24 mx-auto flex">
        <motion.div
          className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.h2
            className="text-gray-900 text-lg mb-1 font-medium title-font"
            variants={fadeIn}
          >
            Contact Me
          </motion.h2>
          <motion.p
            className="leading-relaxed mb-5 text-gray-600"
            variants={fadeIn}
          >
            Write a message for me.
          </motion.p>

          <motion.div className="relative mb-4" variants={fadeIn}>
            <label htmlFor="email" className="leading-7 text-sm text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </motion.div>

          <motion.div className="relative mb-4" variants={fadeIn}>
            <label htmlFor="message" className="leading-7 text-sm text-black">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </motion.div>

          <motion.button
            className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeIn}
          >
            Message
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
