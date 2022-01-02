import Nav from "./Nav";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <h1>
        <a className="font-semibold text-gray-600" href="#">
          RBM SOFTWARE INC
        </a>
      </h1>
      <Nav />
    </header>
  );
}
