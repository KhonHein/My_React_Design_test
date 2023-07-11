import { useState } from 'react'
import {Link,NavLink} from 'react-router-dom'
import {links} from '../data';
import './navbar.css';
import Logo from '../images/logo.png';
import {FcTodoList} from 'react-icons/fc'
import {AiFillCloseCircle} from 'react-icons/ai'


const Navbar = () => {
    const [isNavShowing , setNavShowing] = useState(false);
  return (
    <nav>
        <div className='container nav_container'>
            <Link to="/" className='logo'>
                <img src={Logo} alt='Nav Logo'/>
            </Link>

            <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={path} className={({isActive})=> isActive ? 'active-nav' : ''}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="nav_toggle-btn " onClick={()=>setNavShowing(!isNavShowing)}>
                {
                    isNavShowing ? <AiFillCloseCircle/> : <FcTodoList/>
                }
            </button>
        </div>
    </nav>
  )
}
export default Navbar;
