import React from 'react';

const BurgerIcon = ({ open, ...props }) => (
    <div className={open ? 'burger__menu open' : 'burger__menu'} {...props}>
        <div className='bar1' key='b1'></div>
        <div className='bar2' key='b2'></div>
        <div className='bar3' key='b3'></div>
    </div>
);

export default BurgerIcon