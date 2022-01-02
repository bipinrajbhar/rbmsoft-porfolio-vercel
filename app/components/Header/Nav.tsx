import NavItem from "./NavItem";

const navLinks = [
  {
    content: "About",
    href: "#about",
  },
  {
    content: "Services",
    href: "#services",
  },
  {
    content: "Works",
    href: "#works",
  },
  {
    content: "Contact",
    href: "#contact",
  },
];

export default function Nav() {
  return (
    <nav>
      <ul className="flex items-center gap-6">
        {navLinks?.map(({ href, content }) => (
          <NavItem key={href} href={href}>
            {content}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}
