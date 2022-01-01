import { LiveReload, Outlet, Links } from "@remix-run/react";
import { LinksFunction } from "remix";
import tailwindUrl from "./styles/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindUrl },
];

export default function App() {
  return (
    <html lang="eng">
      <head>
        <meta charSet="utf-8"></meta>
        <title>RMB SOFTWARE INC</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <Links />
      </head>
      <body className="px-10 text-gray-900 font-roboto">
        <Outlet />
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}
