import { Twitter, Linkedin, Facebook, Instagram } from "react-feather";

export default function Footer() {
  const fullYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-between py-6 text-gray-400 border-t">
      <p>&copy; {fullYear} RBM SOFTWARE INC. All rights reserved.</p>
      <ul className="flex items-center gap-6">
        <li>
          <a
            className="hover:text-[#1da1f2] transition"
            href="#"
            target="_blank"
          >
            <Twitter />
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#0077b5] transition"
            href="#"
            target="_blank"
          >
            <Linkedin />
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#1877f2] transition"
            href="#"
            target="_blank"
          >
            <Facebook />
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#e1306c] transition"
            href="#"
            target="_blank"
          >
            <Instagram />
          </a>
        </li>
      </ul>
    </footer>
  );
}
