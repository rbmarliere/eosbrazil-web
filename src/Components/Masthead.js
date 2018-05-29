import React, { Component } from 'react';

// import Logo from '../Assets/EOS-Brazil_LogoMark_2_Color_250_text_shadow.webp';
//
// import Logo_300 from '../Assets/EOS-Brazil_LogoMark_2_Color_300_text_shadow.webp';
// import Logo_400 from '../Assets/EOS-Brazil_LogoMark_2_Color_400_text_shadow.webp';
// import Logo_500 from '../Assets/EOS-Brazil_LogoMark_2_Color_500_text_shadow.webp';

class Masthead extends Component {
    render() {
        return (
            <section className='jumbotron'>
                <picture>
                    {/*<source media="(min-width: 1440px)" srcSet={Logo_500} />*/}
                    {/*<source media="(min-width: 1024px)" srcSet={Logo_400} />*/}
                    {/*<source media="(min-width: 768px)" srcSet={Logo_300} />*/}
                    {/*<img src={Logo} alt="" className='logo logo-big'/>*/}
                </picture>
            </section>
        )
    }
}

export default Masthead;