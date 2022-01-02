import * as React from "react";
import { useLocation } from "@remix-run/react";
import clsx from "clsx";

const headerNavLinks = [
  {
    content: "About",
    href: "#about",
  },
  {
    content: "Services",
    href: "#services",
  },
  {
    content: "Contact",
    href: "#contact",
  },
];

export default function Header() {
  const { hash } = useLocation();

  const isActive = React.useCallback((href) => href === hash, [hash]);

  return (
    <header className="flex items-center justify-between py-6">
      <h1>
        <a className="font-semibold text-gray-600" href="#">
          RBM SOFTWARE INC
        </a>
      </h1>
      <nav>
        <ul className="flex items-center gap-6">
          {headerNavLinks?.map(({ href, content }) => (
            <li key={content}>
              <a
                className={clsx(
                  "after:h-0.5 after:bg-gray-600 hover:text-gray-600 after:block after:w-0 hover:after:w-full transition-all after:duration-150 inline-block",
                  isActive(href)
                    ? "after:w-full text-gray-600"
                    : "text-gray-400"
                )}
                href={href}
              >
                {content}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
