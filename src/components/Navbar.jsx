import { Link } from "react-router-dom";
import { PrimaryLinks } from "./data";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <nav className='navbar'>
      <h2 className='logo'>
        <Link to='/'><img src="/logo-2.png" alt="" /></Link>
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
        {PrimaryLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <div className='buttons btn btn-secondary'>
        <a href='#contact'>
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
