import * as React from "react";
import { useLocation } from "@remix-run/react";
import clsx from "clsx";

type NavItemProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavItem(props: NavItemProps) {
  const { href, children } = props;
  const { hash } = useLocation();
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    setIsActive(href === hash);
  }, [href, hash]);

  return (
    <a
      className={clsx(
        "after:h-0.5 after:bg-gray-600 hover:text-gray-600 after:block after:w-0 hover:after:w-full transition-all after:duration-150 inline-block",
        isActive ? "after:w-full text-gray-600" : "text-gray-400"
      )}
      href={href}
    >
      {children}
    </a>
  );
}
