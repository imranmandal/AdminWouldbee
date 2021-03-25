import { useContext } from "react";
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const TopNavBar = () => {
    const { authState: { accessToken }, dispatch } = useContext(AuthContext);
    
    const handleClick = () => {
        console.log('logout clicked');
        dispatch({
            type: "LOG_OUT"
        });
    }
    
    return <Navbar className="container-fluid p-3 top-nav" bg="light" expand="lg">
        <Navbar.Brand href="#home">Would Bee Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        {/* <Link to="/">Home</Link>
        <Link to="/dash">Dashboard</Link> */}

            {/* <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav> */}
        

            {accessToken
                ? <Nav className="ml-auto">
                    <Form inline>
                        <FormControl type="text" placeholder="Search User" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Nav>
                : null}

            {accessToken
                ? <Nav className="ml-auto">
                    <Button onClick={handleClick}>
                        Log Out
                    </Button>
                </Nav>
                : null}
            
            
        </Navbar.Collapse>
    </Navbar>;
}

export default TopNavBar;
