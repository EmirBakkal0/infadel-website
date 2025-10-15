import { Geist, Geist_Mono, Delius, Fugaz_One} from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const delius = Delius({
  variable: "--font-delius",
  subsets: ["latin"],
  weight: ["400"],
});

const fugaz = Fugaz_One({
  variable: "--font-fugaz",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Infadel - Nutrition for a Healthy Start",
  description: "Infadel provides reliable, science-based nutrition for babies and children.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${delius.variable} ${fugaz.variable} antialiased`}
      >

        <Navbar/>



        {children}
      </body>
    </html>
  );
}
