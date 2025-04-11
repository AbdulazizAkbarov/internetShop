import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Footer from "@/components/layout/Footer";
import NavbarBottom from "@/components/layout/Navbar/NavbarBottom";
import NavbarCenter from "@/components/layout/Navbar/NavbarCenter";
import NavbarTop from "@/components/layout/Navbar/NavbarTop";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (<div>
    <NavbarTop />,
    <NavbarCenter/>
    <NavbarBottom/>
    
    <Component {...pageProps}/>
  </div>
  )
  ;
}
