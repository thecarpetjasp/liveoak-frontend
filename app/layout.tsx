import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";
import NavBar from "@/components/navigation/NavBar";
import Footer from "@/components/navigation/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Live Oak | Electric Natural Gas from Nebraska",
    template: "%s | Live Oak",
  },
  description:
    "Live Oak is a large-scale e-NG project near Norfolk, Nebraska producing very low-carbon natural gas from renewable electricity and biogenic CO₂ — developed by TotalEnergies, TES, Osaka Gas, Toho Gas and ITOCHU.",
  keywords: [
    "Live Oak",
    "electric natural gas",
    "e-NG",
    "e-methane",
    "low-carbon natural gas",
    "Nebraska energy",
    "TotalEnergies",
    "TES",
    "Osaka Gas",
    "renewable energy",
    "biogenic CO2",
    "FEED",
    "carbon capture",
    "decarbonisation",
  ],
  openGraph: {
    title: "Live Oak | Electric Natural Gas from Nebraska",
    description:
      "Live Oak is a large-scale e-NG project near Norfolk, Nebraska producing very low-carbon natural gas from renewable electricity and biogenic CO₂ — developed by TotalEnergies, TES, Osaka Gas, Toho Gas and ITOCHU.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Oak | Electric Natural Gas from Nebraska",
    description:
      "Live Oak is a large-scale e-NG project near Norfolk, Nebraska producing very low-carbon natural gas from renewable electricity and biogenic CO₂.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <NavBar></NavBar>
          {children}
          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
