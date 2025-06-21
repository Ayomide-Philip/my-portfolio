import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Page() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-extrabold mb-6">
              Let&apos;s <span className="text-amber-500">Connect</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Got a project in mind or just want to chat? I&apos;m always open
              to new ideas and opportunities.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="bg-amber-600 p-2 rounded-full mr-4">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-400">Lucknow, UP, India</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-amber-500 p-2 rounded-full mr-4">
                  <FaPhoneAlt className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-400">+91 9876543210</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-amber-500 p-2 rounded-full mr-4">
                  <FaEnvelope className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-400">
                    kuldeepprajapati2111@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-amber-500 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-amber-500 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-amber-500 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-amber-500 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-lg" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-md transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
