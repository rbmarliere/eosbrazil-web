import React, { Component } from 'react';
import Logo from '../Assets/EOS-Brazil_LogoMark_2_Color_250_text_shadow.png';
import Logo_300 from '../Assets/EOS-Brazil_LogoMark_2_Color_300_text_shadow.png';
import Logo_500 from '../Assets/EOS-Brazil_LogoMark_2_Color_500_text_shadow.png';
class Masthead extends Component {
    render() {
        return (
            <section className='masthead'>
                <picture>
                    <source media="(min-width: 1440px)" srcSet={Logo_500} />
                    <source media="(min-width: 768px)" srcSet={Logo_300} />
                    <img src={Logo} alt="" className='logo logo-big'/>
                </picture>
            </section>
        )
    }
}

export default Masthead;