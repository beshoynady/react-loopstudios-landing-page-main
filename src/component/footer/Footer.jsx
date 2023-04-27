import React from 'react'
import face from '../../images/icon-facebook.svg'
import inst from '../../images/icon-instagram.svg'
import twit from '../../images/icon-twitter.svg'
import pint from '../../images/icon-pinterest.svg'
import logo from '../../images/logo.svg';
import './Footer.css'
const Footer = () => {
    const icons =[face, twit,pint,inst]
  return (
    <footer>
        <div className="container">
            <div className="footer">
            <div className='left'>
                <img src={logo}/>
                <div className="link">
                    <ul className='footer-nav'>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
            </div>
            <div className="right">
                <div className='social'>
                    <ul className='icon-list'>
                        {
                            icons.map((icon,i)=>{
                                return(
                                    <li><img src={icon}alt="icon" key={i}/></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <p>&copy; 2021 Loopstudios. All rights reserved.</p>
            </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer