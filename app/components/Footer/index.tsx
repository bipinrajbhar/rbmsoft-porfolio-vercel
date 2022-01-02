import { Twitter, Linkedin, Facebook, Instagram } from "react-feather";

export default function Footer() {
  const fullYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-between py-6 text-gray-400 border-t">
      <p>&copy; {fullYear} RBM SOFTWARE INC. All rights reserved.</p>
      <ul className="flex items-center gap-6">
        <li>
          <a className="" href="#" target="_blank">
            <Twitter className="hover:stroke-[rgba(29,161,242,1)] hover:fill-[rgba(29,161,242,.1)] transition" />
          </a>
        </li>
        <li>
          <a className="" href="#" target="_blank">
            <Linkedin className="hover:stroke-[rgba(0,119,181,1)] hover:fill-[rgba(0,119,181,0.1)] transition" />
          </a>
        </li>
        <li>
          <a className="" href="#" target="_blank">
            <Facebook className="hover:stroke-[rgba(24,119,242,1)] hover:fill-[rgba(24,119,242,0.1)] transition" />
          </a>
        </li>
        <li>
          <a className="" href="#" target="_blank">
            <Instagram className="hover:stroke-[rgba(225,48,108,1)] hover:fill-[rgba(225,48,108,0.1)] transition" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
