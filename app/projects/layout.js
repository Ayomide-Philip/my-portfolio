import "../globals.css";
export const metadata = {
  title: "Projects",
  description:
    "Here are few project which i have worked on and more can be found on my github repo",
};

export default function RootLayout({ children }) {
  return <div className={`bg-gray-950 `}>{children}</div>;
}
