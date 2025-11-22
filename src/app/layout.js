import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // normal et bold
  variable: "--font-lato",
});

export const metadata = {
  title: "Banguissa Store",
  description: "Sourcing | Quality control",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.variable}>
        {children}
      </body>
    </html>
  );
}
