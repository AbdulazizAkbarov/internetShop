import { Geist, Geist_Mono } from "next/font/google";
import Banner from "@/components/Banner";
import Card from "@/pages/Card";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
   <Banner/>
    <Card/>
    </div>
  );
}
