import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Barra() {
    return (
        <Navbar expand="lg" className="navbar navbar-dark bg-success" >
            <Container>
                <Navbar.Brand href="#home"><img 
                        src="assets/images/logo/Logo Tienda de Frutas y Verduras Circular Verde.png" 
                        alt="Huerto Hogar Logo"
                        width="40"
                        height="40"
                        className="d-inline-block align-top me-2"
                    />Huerto Hogar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Productos</Nav.Link>
                        <Nav.Link href="#link">Carrito</Nav.Link>
                        <Nav.Link href="#link">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Barra;