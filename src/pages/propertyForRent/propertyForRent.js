import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Navbar from "../../components/Navbar.jsx"
import Sidebar from "../../components/Sidebar.jsx"

function Client() {
    return (
      <>
      <Navbar />
      <div className='formBranchContainer'>
      <Sidebar />
      <div className='formBranchContainer2'>
      <Form>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridPropType">
      <Form.Label>Property Type</Form.Label>
      <Form.Control  placeholder="Enter Property Type" />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridRooms">
      <Form.Label>Rooms</Form.Label>
      <Form.Control  placeholder="Rooms" />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridRent">
      <Form.Label>Rent</Form.Label>
      <Form.Control  placeholder="Rent" />
      </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridAdress">
      <Form.Label>Address</Form.Label>
      <Form.Control  placeholder="Enter Address" />
      </Form.Group>
      <Form.Group as={Col}controlId="formGridRegDate">
      <Form.Label>Registration Date</Form.Label>
      <Form.Control type="date"  />
      </Form.Group>
      </Row>      

      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridRegOwner">
      <Form.Label>Owner</Form.Label>
      <Form.Select defaultValue="Choose...">
      <option>Choose...</option>
      <option>...</option>
      </Form.Select>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridRegStaff">
      <Form.Label>Staff</Form.Label>
      <Form.Select defaultValue="Choose...">
      <option>Choose...</option>
      <option>...</option>
      </Form.Select>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridRegBranch">
      <Form.Label>Branch</Form.Label>
      <Form.Select defaultValue="Choose...">
      <option>Choose...</option>
      <option>...</option>
      </Form.Select>
      </Form.Group>            
      </Row>   
      
      
      <Button variant="primary" type="submit">
      Submit
      </Button>
      </Form>
      </div>
      </div>
      </>
      );
  }
  
  export default Client;