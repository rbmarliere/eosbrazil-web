import React, { Component } from 'react';
import logo from '../Assets/logo.png';
import logo_250 from '../Assets/logo_250.png';
class Footer extends Component {
    render() {
        return (
            <footer className='container-fluid d-flex justify-content-center'>
                <div className="row align-content-center">
                    <div className="col-xs-10 col-md-8">
                        <p className="text-center">EOSBrazil {(new Date().getFullYear())}</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;