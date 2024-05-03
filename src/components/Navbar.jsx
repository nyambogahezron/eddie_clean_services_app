import { Link } from "react-router-dom";
import Links from "./data";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <nav className='navbar'>
      <h2 className='logo'>
        <Link to='/'>EddieClean</Link>
      </h2>
      <input
        type='checkbox'
        checked={isNavbarOpen}
        id='menu-toggle'
        onChange={(e) => {
          const { checked } = e.target;
          setIsNavbarOpen(checked);
        }}
      />
      <label htmlFor='menu-toggle' id='hamburger-btn'>
        {!isNavbarOpen ? <FaBars /> : <FaTimes style={{ color: "#a12e2e" }} />}
      </label>

      <ul className='links'>
        {Links.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <div className='buttons'>
        <Link to='#' className='signin'>
          Sign In
        </Link>
        <Link to='#' className='signup'>
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
