import "../styles/globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "../components/ui/ThemeProvider";
import Navbar from "../components/nav/Navbar";
import Header from "@frontend/components/Header"
import Footer from "@frontend/components/Footer"

export const metadata = {
  title: "CCARRE",
  description: "Design & Développement web moderne",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1 max-w-7xl mx-auto px-6 py-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
