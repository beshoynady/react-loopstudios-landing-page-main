import React,{useState} from 'react';
import './Header.css';
import burger from '../../images/icon-hamburger.svg';
import close from '../../images/icon-close.svg';

const Header = () => {
    const [isOpen, setisOpen] = useState(false)

    const handelmobile = ()=>{
        setisOpen(!isOpen);
    };

    return (
        <div className='header'>
            <div className='logo'>
            </div>
            <nav className='nav'>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </nav>
            <div className='nav-mobile'>
                <div className='menu-logo' onClick={handelmobile}>
                    <img src={burger} alt="logo" />
                </div>
                <div className={`open-menu ${isOpen? 'show':''}`}>
                    <div className='mob-header'>
                        <div className='mob-logo'></div>
                        <div className='close-logo' onClick={handelmobile} >
                            <img src={close} alt='close'/>
                        </div>
                    </div>
                    <ul className='mobile-menu'>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
               
            </div>
        </div>
    )
}

export default Header