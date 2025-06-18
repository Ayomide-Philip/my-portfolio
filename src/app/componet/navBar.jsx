"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const navItems = [
  {
    href: "/",
    label: "Home",
    icon: (
      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
    ),
  },
  {
    href: "/about",
    label: "About",
    icon: (
      <path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z" />
    ),
  },
  {
    href: "/#",
    label: "Post",
    icon: (
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 1v16M1 9h16"
      />
    ),
  },
  {
    href: "/search",
    label: "Search",
    icon: (
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
      />
    ),
  },
  {
    href: "/settings",
    label: "Settings",
    icon: (
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
      />
    ),
  },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="fixed bottom-4 left-1/2 z-50 w-full max-w-md -translate-x-1/2 px-4"
    >
      <div className="grid grid-cols-5 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl overflow-hidden">
        {navItems.map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className={`group flex flex-col items-center justify-center py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition ${
              pathname === href ? "bg-gray-100 dark:bg-gray-800" : ""
            }`}
          >
            <motion.svg
              whileHover={{ scale: 1.2 }}
              className="w-6 h-6 text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              {icon}
            </motion.svg>
            <span className="text-xs mt-1 text-gray-500 dark:text-gray-400">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
