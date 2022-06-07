import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/calc",
      text: "Calculator",
    },
    {
      id: 3,
      path: "/quote",
      text: "Quote",
    },
  ];
  return (
    <nav className="navBar">
      <h1> Math Magicians </h1>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path}>
              {link.text} {link === links[links.length - 1] ? "" : "|"}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
