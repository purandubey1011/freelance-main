import { Hahmlet } from "next/font/google";
import "./globals.css";
import Theme from "@/components/Themeprovider";

const hahmlet = Hahmlet({ subsets: ["latin"] });

export const metadata = {
  title: "Tint & Wrap",
  description: "Generated by create next app",
  // links: [
  //   {
  //     rel: "icon",
  //     href: "/favicon.ico",
  //   },
  //   {
  //     rel: "preconnect",
  //     href: "https://fonts.googleapis.com",
  //   },
  //   {
  //     rel: "preconnect",
  //     href: "https://fonts.gstatic.com",
  //   },
  //   {
  //     rel: "stylesheet",
  //     href:
  //       "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",
  //   },
  // ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={hahmlet.className} suppressHydrationWarning>
        {/* <Providers> */}
          <Theme>{children}</Theme>
        {/* </Providers> */}
      </body>
    </html>
  );
}
