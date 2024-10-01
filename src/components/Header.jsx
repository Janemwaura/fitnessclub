import React from 'react';
import './Header.css'
import logo from '/home/janewmwaura/personalprojectportfolio/FitClub-Starter/src/assets/logo.png'
import { Link } from 'react-scroll';
const Header = () => {
    return (
        <div className="header">

            <img src={logo} alt="" className='logo'/>

            <ul className='header-menu'>
                <li><Link
                to='Hero'
                span={true}
                smooth={true}
                >Home</Link></li>
                <li><Link
                to='Programs'
                span={true}
                smooth={true}
                >Programs</Link></li>
                <li><Link
                to='Reasons'
                span={true}
                smooth={true}
                >Why us</Link></li>
                <li><Link
                to='Programs'
                span={true}
                smooth={true}
                >Plans</Link></li>
                <li><Link
                to='Testimonials'
                span={true}
                smooth={true}
                >Testimonials</Link></li>
                
            </ul>
        </div>
    )
     
}
export default Header;