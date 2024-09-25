import "./globals.css";
import Loading from "./loading";
import { Suspense } from "react";

export const metadata = {
  title: "mobility scooter",
  description: "Client homepage",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
