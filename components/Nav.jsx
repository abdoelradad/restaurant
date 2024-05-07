import { Link as ScrollLink } from "react-scroll";

const links = [
  {
    path: "home",
    name: "home",
    offset: -50,
  },
  {
    path: "menu",
    name: "menu",
    offset: -50,
  },
  {
    path: "about",
    name: "about",
    offset: -50,
  },
  {
    path: "contact",
    name: "contact",
    offset: -50,
  },
];

const Nav = ({ containerStyles, linkStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <ScrollLink
            key={index}
            to={link.path}
            spy={true}
            smooth={true}
            offset={link.offset}
            duration={500}
            className={`${linkStyles}`}
          >
            {link.name}
          </ScrollLink>
        );
      })}
    </nav>
  );
};

export default Nav;
