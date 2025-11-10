import type { Metadata } from "next";
import Header from "./components/Header"; 
import Footer from "./components/Footer";
import ThemeRegistry from "./components/ThemeRegistry";
import "./globals.css";

export const metadata: Metadata = {
  title: "Transforma3",
  description: "Conectando empresas con la economía circular.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body style={{ fontFamily: 'Plaid Sans, Cern, "Avenir Next", Avenir, "Proxima Nova", "Jakarta Plus Sans", Futura, "Avant Garde", Montserrat, "Helvetica Neue", Helvetica, "Nimbus Sans", system-ui, -apple-system, BlinkMacSystemFont, Arial, "Segoe UI", Roboto, Oxygen, sans-serif' }}>
        <ThemeRegistry>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}