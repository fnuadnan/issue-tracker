import { FaBug } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const links = [
    { label: "Dashboard", to: "/" },
    { label: "Issues", to: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <div>
        <FaBug />
      </div>
      <ul className="flex space-x-6">
        {links.map((link, index) => (
          <Link to={link.to}>
            <li
              key={index}
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
            >
              {link.label}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
