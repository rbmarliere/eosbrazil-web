import React, { Component } from 'react';
import logo from '../Assets/logo.png';
import logo_250 from '../Assets/logo_250.png';
class Footer extends Component {
    render() {
        return (
            <footer className='footer d-flex justify-content-center mb-2'>
                <picture>
                    <source media="(min-width: 768px)" srcSet={logo_250} />
                    <img src={logo} alt="" className='footer__logo'/>
                </picture>
            </footer>
        )
    }
}

export default Footer;