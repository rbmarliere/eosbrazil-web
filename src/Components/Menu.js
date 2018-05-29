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
import Logo from '../Assets/logo-header-25.webp';
import Logo50 from '../Assets/logo-header-50.webp';

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
                    <NavbarToggler onClick={this.toggle} role="presentation"/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar role="menu">
                            <NavItem>
                                <Link to="/" className='nav-link' onClick={this.toggle}>Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/team" className='nav-link' onClick={this.toggle}>Team</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/specs" className='nav-link' onClick={this.toggle}>Specs</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/roadmap" className='nav-link' onClick={this.toggle}>Roadmap</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Menu;