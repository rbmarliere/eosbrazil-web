import * as React from 'react';

import { NavLink } from 'react-router-dom';

import { TransitionGroup, CSSTransition } from "react-transition-group";


class Menu extends React.Component {
    render() {
        /**
         * @description props from parent component
         */
        const { toggleMenu, closeMenu } = this.props;

        /**
         * @description current links to pages
         * @type {string[]}
         */
        const menuItems = ['home', 'team', 'specs', 'roadmap', 'contact'];

        /**
         * @description add menu_open when toggleMenu prop is true
         * @returns {string}
         */
        const openOuterMenu = () => {
            return 'menu_open';
        };

        /**
         * @description add menu when toggleMenu prop is false
         * @returns {string}
         */
        const closeOuterMenu = () => {
            return 'menu';
        };

        /**
         * @description add menu__inner_open when toggleMenu prop is true
         * @returns {string}
         */
        const openInnerMenu = () => {
            return 'menu__inner_open';
        };

        /**
         * @description add menu__inner when toggleMenu prop is false
         * @returns {string}
         */
        const closeInnerMenu = () => {
            return 'menu__inner';
        };

        /**
         * @description add {item}_open when toggleMenu prop is true
         * @param item - menuItems
         * @returns {string}
         */
        const openLinksMenu = (item) => {
            return `menu__link ${item}_open`;
        };

        /**
         * @description add {item} when toggleMenu prop is false
         * @param item - menuItems
         * @returns {string}
         */
        const closeLinksMenu = (item) => {
            return `menu__link ${item}`;
        };

        const onCloseMenu = () => {
            closeMenu();
        };

        return (
            <nav className={toggleMenu ? openOuterMenu() : closeOuterMenu()}>
                <ul className={toggleMenu ? openInnerMenu() : closeInnerMenu()}>
                    <TransitionGroup>
                        {menuItems.map((item) =>
                            <CSSTransition key={item} timeout={{enter: 500, exit: 700}}>
                                <li className={toggleMenu ? openLinksMenu(item) : closeLinksMenu(item)}>
                                    <NavLink
                                        exact
                                        to={item === 'home' ? '/' : `/${item}`}
                                        onClick={onCloseMenu}>
                                        {item}
                                    </NavLink>
                                </li>
                            </CSSTransition>)}
                    </TransitionGroup>
                </ul>
            </nav>
        );
    }
}

export default Menu;