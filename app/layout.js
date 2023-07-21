import Header from "@/components/Header";
import "./globals.css";
import "@/styles/styles.css";

export const metadata = {
  title: "Postopia",
  description: "Write and share posts with postopia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white p-3">
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
