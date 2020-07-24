import React, { Component }  from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarToggler, Collapse, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
    }

    toggleNav=() => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal=() => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }


    render() {
        return (
            <React.Fragment>
                <header>
                    <div className="overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <h1>Melanie N. Jackson</h1>
                                    <h3>Producer & Stylist</h3>
                                        <span className="navbar-text ml-auto">
                                            <Button className="button" onClick={this.toggleModal}>
                                                CONTACT
                                            </Button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </header>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}><h2>Contact Melanie</h2></ModalHeader>
                        <ModalBody>
                            <Form onSubmit={values => this.handleSubmit(values)}>
                                <div className="container-fluid">
                                    <FormGroup row>
                                            <Label htmlFor="Name" md={4}>Name</Label>
                                            <Col md={8}>
                                            <Input type="text" id="name" name="name" placeholder="Name"
                                                innerRef={input => this.name = input} />
                                            </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="Email" md={4}>Email Address</Label>
                                        <Col md={8}>
                                        <Input type="text" id="email" name="email" placeholder="Email Address"
                                            innerRef={input => this.name = input} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="Phone Number" md={4}>Phone Number</Label>
                                        <Col md={8}>
                                        <Input type="tel" id="phone" name="phone" placeholder="Phone Number"
                                            innerRef={input => this.name = input} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="Your Message" md={12}>Your Message:</Label>
                                        <Col md={12}>
                                        <Input className="form-control" rows="8" type="text area" id="message" name="message" placeholder="Your Message"
                                            innerRef={input => this.name = input} />
                                        </Col>
                                    </FormGroup>
                                    <Button type="submit" value="submit" color="dark">Send</Button>
                                </div>
                            </Form>
                        </ModalBody>
                </Modal>

                <Navbar bg="dark" dark sticky="top" expand="lg">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                    <div className="container">
                        <Nav navbar >
                                <NavItem>
                                    <NavLink href="/about" className="nav-link" to="/about" >
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/gallery" className="nav-link" to="/gallery">
                                        Ecommerce & Editorial
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/advertisements" className="nav-link" to="/advertisements">
                                        Advertisements
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/commercials" className="nav-link" to="/commercials">
                                        Commercials
                                    </NavLink>
                                </NavItem>
                        </Nav>
                    </div>
                    </Collapse>
                </Navbar>

            </React.Fragment>
        );
    }
}

export default Header;