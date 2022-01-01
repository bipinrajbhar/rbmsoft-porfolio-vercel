export default function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <h1>
        <a className="font-semibold text-gray-700" href="#">
          RBM SOFTWARE INC
        </a>
      </h1>
      <nav>
        <ul className="flex items-center gap-6">
          <li>
            <a
              className="after:h-0.5 after:bg-gray-700 text-gray-400 hover:text-gray-700 after:block after:w-0 hover:after:w-full transition-all after:duration-150 inline-block"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="after:h-0.5 after:bg-gray-700 text-gray-400 hover:text-gray-700 after:block after:w-0 hover:after:w-full transition-all after:duration-150 inline-block"
              href="#"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="after:h-0.5 after:bg-gray-700 text-gray-400 hover:text-gray-700 after:block after:w-0 hover:after:w-full transition-all after:duration-150 inline-block"
              href="#"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="after:h-0.5 after:bg-gray-700 text-gray-400 hover:text-gray-700 after:block after:w-0 hover:after:w-full transition-all after:duration-150 inline-block"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
