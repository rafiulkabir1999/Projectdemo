import { Inter } from "next/font/google";
import "../globals.css";
import Sidenav from "../components/dashboard/Sidenav";
import Header from "../components/dashboard/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="pt-10 flex">
          <Sidenav />
          <div className="p-6 ml-64 w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}