import "../globals.css";
export const metadata = {
  title: "About",
  description:
    "About Areo Ayomide Philip a frontend developer with little knowledge of backend",
};

export default function RootLayout({ children }) {
  return <div className={`bg-gray-950 pb-16`}>{children}</div>;
}
