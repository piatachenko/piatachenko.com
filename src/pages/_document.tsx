import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-black text-zinc-100 touch-pan-x">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
