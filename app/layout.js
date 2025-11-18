import "./globals.css";
import { NavBar } from "./componet/navBar";
export const metadata = {
  title: {
    template: "Areo Ayomide Philip | %s",
    default: "Areo Ayomide Philip | Home",
  },
  description:
    "Home page of my portfolio where you would see details about me, what i can do and which framework i can use",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
        <NavBar />
      </body>
    </html>
  );
}
