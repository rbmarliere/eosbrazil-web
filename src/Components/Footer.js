import React, { Component } from 'react';
import logo from '../Assets/logo.webp';
import logo_250 from '../Assets/logo_250.webp';
class Footer extends Component {
    render() {
        return (
            <footer className='container-fluid'>
                <div className="row d-flex justify-content-center pt-2">
                    <div className="col-xs-12">
                        <picture>
                            <source media="(min-width: 768px)" srcSet={logo_250} />
                            <img src={logo} alt="" className='logo logo-big'/>
                        </picture>
                    </div>
                </div>
                <div className="row d-flex justify-content-center pb-2">
                    <div className="col-xs-12">
                        <p className="text-center">{(new Date().getFullYear())} &copy;</p>
                    </div>
                </div>

            </footer>
        )
    }
}

export default Footer;