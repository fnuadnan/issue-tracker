import { FaBug } from "react-icons/fa";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <div>
        <FaBug />
      </div>
      <ul className="flex space-x-6">
        {links.map((link, index) => (
          <li
            key={index}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            {link.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
