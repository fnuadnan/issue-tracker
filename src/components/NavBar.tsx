import { FaBug } from "react-icons/fa";
import { NavLink } from "react-router-dom";

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
          <li key={index}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-zinc-900"
                  : "text-zinc-500 hover:text-zinc-800 transition-colors"
              }
              to={link.to}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
