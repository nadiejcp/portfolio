import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import SideBar from "@/components/SideBar";
import { ProjectProvider } from "@/components/ProjectContext";

const geistSans = Merriweather({
  variable: "--font-merriweather-sans",
  subsets: ["latin"],
  weight: "300"
});

export const metadata: Metadata = {
  title: "Jairo Cabrera",
  description: "This is my portfolio, contains all my skills and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <LanguageProvider>
          <ProjectProvider>
            <div className="flex flex-col lg:flex-row relative">
              <SideBar />
              <div className="w-full flex-1 max-w-[100vw] overflow-x-hidden">
                {children}
              </div>
            </div>
          </ProjectProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
