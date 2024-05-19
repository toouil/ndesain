import Layout from "@/layouts/Layout";
import "@/styles/globals.css";

export const metadata = {
  title: "NDESAIN",
  description: "ndesain Coded by KYROS / Zakaria TOUIL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
