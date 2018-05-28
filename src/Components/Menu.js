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
import Logo from '../Assets/logo.png';

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
                        <img src={Logo} alt="" className='img-fluid'/>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
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