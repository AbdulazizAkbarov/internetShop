import NavbarBottom from "@/components/layout/Navbar/NavbarBottom";
import NavbarCenter from "@/components/layout/Navbar/NavbarCenter";
import NavbarTop from "@/components/layout/Navbar/NavbarTop";
import { store } from "@/components/layout/store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NavbarTop />,
      <NavbarCenter />
      <NavbarBottom />
      <Component {...pageProps} />
      <Toaster richColors position="top-center"/>
    </Provider>
  );
}
