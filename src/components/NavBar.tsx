import { Container, Flex } from "@radix-ui/themes";
import { FaBug } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import AuthButton from "./AuthButton";

const NavBar = () => {
  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link to="/">
              <FaBug />
            </Link>
            <Navlinks />
          </Flex>
          <AuthButton />
        </Flex>
      </Container>
    </nav>
  );
};

const Navlinks = () => {
  const links = [
    { label: "Dashboard", to: "/" },
    { label: "Issues", to: "/issues" },
  ];
  return (
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
  );
};

export default NavBar;
