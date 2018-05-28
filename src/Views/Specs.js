import React, { Component } from 'react';

class Specs extends Component {

    render() {
        return (
            <section className='specs__wrapper' id='specs'>
                <h2 className='specs__title'>EOS Brasil Specs</h2>
                <div className="card">
                    <div className="card__inner">
                        <p className='specs__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto at dicta et expedita illum magnam praesentium qui quidem, quisquam!</p>
                        <ul className='specs__list'>
                            <li className='specs__list__item'>Spec One</li>
                            <li className='specs__list__item'>Spec Two</li>
                            <li className='specs__list__item'>Spec Three</li>
                            <li className='specs__list__item'>Spec Four</li>
                            <li className='specs__list__item'>Spec Five</li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Specs;