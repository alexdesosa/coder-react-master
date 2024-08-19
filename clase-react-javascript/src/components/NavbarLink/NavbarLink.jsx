import { Link, NavLink } from "react-router-dom";

const NavbarLink = ({ category }) => {
  return (
    <NavLink to={`/category/${category}`} className="navbarLink">
      {category}
    </NavLink>
  );
};

export default NavbarLink;
