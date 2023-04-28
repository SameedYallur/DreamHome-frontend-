import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Typeahead } from 'react-bootstrap-typeahead';

function BasicExample() {
  const [selected, setSelected] = useState([]);
  return (
    <Navbar bg="secondary" expand="lg" >
      <Container>
        <Navbar.Brand href="#home">Dream Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex justify-content-center align-items-center">
          <Typeahead
      id="basic-typeahead-single"
      labelKey="name"
      options={[
        { name: 'Action' },
        { name: 'Another action' },
        { name: 'Something else' },
      ]}
      placeholder="Branch"
      selected={selected}
      onChange={setSelected}
      renderMenuItemChildren={(option, props) => (
        <div onClick={() => props.onClick(option)}>
          {option.name}
        </div>
      )}
    />
            <NavDropdown title="Forms" id="basic-nav-dropdown">
              <NavDropdown.Item href="/staff">
                Staff
              </NavDropdown.Item>
              <NavDropdown.Item href="/staff">
                Branch
              </NavDropdown.Item>
              <NavDropdown.Item href="/client">
                Client
              </NavDropdown.Item>
              <NavDropdown.Item href="/propertyForRent">
                Property for rent
              </NavDropdown.Item>
              <NavDropdown.Item href="/privateowner">
                Private Owner
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action/3.4">
                Form
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;