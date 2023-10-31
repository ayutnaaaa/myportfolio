import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { DataContextProvider } from "@/context/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ayutnaa",
  description: "My work",
};

export default function DefaultLayout({ children }) {
  return (
    <main>
      <DataContextProvider>
        <Header />
        {children}
        
        <Footer />
      </DataContextProvider>
    </main>
  );
}
// background: linear-gradient( #dedcdc , #989daa, #7b919c, #57707a, #191d23);
