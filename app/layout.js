import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Airon Jim",
  description: "Airon Jim Pingad",
  icons: {
    icon: "/logoairongwapo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={inter.className}>
        <link rel="icon" href="/logoairongwapo.png" sizes="any" />
        {children}
      </body>
    </html>
  );
}
