import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

// @ts-ignore
import appStylesHref from "./app.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

export default function App() {
  return (
    <html>
    <head>
      <link
        rel="icon"
        href="data:image/x-icon;base64,AA"
      />
      <Meta />
      <Links />
    </head>
    <body>
    <div className="center-wrapper">
      <h1>Cheesebet</h1>
    </div>
    <Outlet />

    <Scripts />
    <LiveReload />
    </body>
    </html>
  );
}