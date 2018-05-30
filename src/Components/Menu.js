import * as React from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import Logo from '../Assets/logo-header-25.png';
import Logo50 from '../Assets/logo-header-50.png';
import ReactGA from 'react-ga';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleClick() {
        ReactGA.event({
            category: 'Navigation',
            action: 'Clicked Link',
        });
    }

    onClick() {
        this.toggle;
        this.handleClick;
    }

    render() {
        return (
            <div>
                <Navbar light expand="md">
                    <NavbarBrand href="/">
                        <picture>
                            <source srcSet={Logo50} media="(min-width: 768px)" />
                            <img src={Logo} alt="" className='img-fluid'/>
                        </picture>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.onClick} role="presentation"/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar role="menu">
                            <NavItem>
                                <Link to="/" className='nav-link' onClick={this.onClick}>Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/team" className='nav-link' onClick={this.onClick}>Team</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/specs" className='nav-link' onClick={this.onClick}>Specs</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/roadmap" className='nav-link' onClick={this.onClick}>Roadmap</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Menu;
