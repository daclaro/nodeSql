import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className='nav-container'>
          <li className='logo'>
            <Link className='children-links' to='/ '>
              Dev Connector
            </Link>
          </li>
          <li className='nav-children'>
            <a href className='children-links'>
              Developers
            </a>
          </li>
          <li className='nav-children'>
            <Link className='children-links' to='/register'>
              Register
            </Link>
          </li>
          <li className='nav-children'>
            <Link className='cnav-children' to='/login'>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
