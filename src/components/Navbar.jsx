import { Link } from "react-router-dom";
import Links from "./data";
const Navbar = () => {
  return (
    <nav className='navbar'>
      <h2 className='logo'>
        <Link to='/'>EddieClean</Link>
      </h2>
      <input type='checkbox' id='menu-toggle' />
      <label htmlFor='menu-toggle' id='hamburger-btn'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24'
          viewBox='0 0 24 24'
          width='24'
        >
          <path
            d='M3 12h18M3 6h18M3 18h18'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
          />
        </svg>
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
