import React, { Component } from 'react';

import Logo from '../Assets/logo-masthead-150.png';
import Logo_300 from '../Assets/logo-masthead-300.png';
import Logo_400 from '../Assets/logo-masthead-400.png';

class Masthead extends Component {
    render() {
        return (
            <section className='jumbotron text-center'>
                <picture>
                    <source media="(min-width: 1024px)" srcSet={Logo_400} />
                    <source media="(min-width: 768px)" srcSet={Logo_300} />
                    <img src={Logo} alt="" className='logo logo-big'/>
                </picture>
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <h2 className='logo-text eos text-center'>EOS</h2>
                        <h2 className='logo-text brazil text-center'>BRAZIL</h2>
                    </div>
                </div>
            </section>
        )
    }
}

export default Masthead;