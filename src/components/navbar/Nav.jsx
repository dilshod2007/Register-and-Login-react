import React from 'react'
import { NavLink} from 'react-router-dom'
import '../navbar/Nav.css'
const Nav = () => {
  return (
    <div className='nav'>
        <ul className='nav-list'  >
            <li className='nav-item'>
               <NavLink className='nav-link' to="register">Register</NavLink>
                <NavLink className='nav-link'to="login">Login</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Nav