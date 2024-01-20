// * Next Js Components
import { Inter } from "next/font/google";

// * Styles
import "./globals.css";

// * Redux
import { StoreProvider } from "@/redux/stores/store-provider";

// * Components
import Footer from "@/components/footer";
import NavbarHeader from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

// * Metadata
export const metadata = {
  authors: ["Ercan Çimen"],
  title: "The News",
  description: "The News",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <NavbarHeader />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
