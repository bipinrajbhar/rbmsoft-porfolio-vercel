import NavItem from "./NavItem";

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

export default function NavList() {
  return (
    <nav>
      <ul className="flex items-center gap-6">
        {headerNavLinks?.map(({ href, content }) => (
          <NavItem key={href} href={href}>
            {content}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}
