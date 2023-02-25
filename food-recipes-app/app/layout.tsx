import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

export const metadata = {
  title: "recipes",
  description: "recipes home page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="page">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
