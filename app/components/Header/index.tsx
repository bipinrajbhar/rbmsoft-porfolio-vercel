import clsx from "clsx";
import * as React from "react";
import Nav from "./Nav";

export default function Header() {
  const headerRef = React.useRef<HTMLHeadElement>(null);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleOnScroll = () => {
      const pageYOffset = window?.pageYOffset;
      const headerHeight =
        headerRef?.current?.getBoundingClientRect().height ?? 0;

      if (pageYOffset >= headerHeight / 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window?.addEventListener("scroll", handleOnScroll);
    window?.addEventListener("load", handleOnScroll);

    return () => {
      window?.removeEventListener("scroll", handleOnScroll);
      window?.removeEventListener("load", handleOnScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={clsx(
        "sticky top-0 z-10 mb-3 bg-white bg-opacity-75 filter backdrop-blur-sm transition",
        isScrolled ? "shadow" : ""
      )}
    >
      <div className="flex items-center justify-between px-10 py-6 mx-auto max-w-7xl">
        <h1>
          <a className="font-semibold text-gray-600" href="#">
            RBM SOFTWARE INC
          </a>
        </h1>
        <Nav />
      </div>
    </header>
  );
}
