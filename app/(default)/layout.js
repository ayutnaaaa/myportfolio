
import Header from "@/components/layout/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";
import { DataContextProvider } from "@/context/data";
import NewNav from "@/app/(default)/components/layout/newNav";
import NewHeader from "@/app/(default)/components/layout/newHeader";
import TopLeftImg from "./components/layout/TopLeftImg";
import { Provider as NextUIProvider } from "@/lib/next-ui";
import Providers from "@/lib/providers";


const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", '200' , "300" , "400" , "500", "600" , "700" ,"800"] 
});

export const metadata = {
  title: "Ayutnaa",
  description: "My work",
};

export default function DefaultLayout({ children }) {
  return (
    <main className="page relative">
      <DataContextProvider>
        <Providers>
          <NextUIProvider>
              <TopLeftImg/>
              <NewNav/>
              <NewHeader/>
              {children} 
            </NextUIProvider>
          </Providers>
      </DataContextProvider>
    </main>
  );
}

