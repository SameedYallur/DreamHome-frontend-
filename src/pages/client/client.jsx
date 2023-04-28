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
      <Form.Group as={Col} controlId="formGridFname">
      <Form.Label>First Name</Form.Label>
      <Form.Control  placeholder="Enter First Name" />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridLname">
      <Form.Label>Last Name</Form.Label>
      <Form.Control  placeholder="Enter Last Name" />
      </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridRegBranch">
      <Form.Label>Branch</Form.Label>
      <Form.Select defaultValue="Choose...">
      <option>Choose...</option>
      <option>...</option>
      </Form.Select>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridPrefType">
      <Form.Label>Preference Type</Form.Label>
      <Form.Control  placeholder="Enter Preference" />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridMaxRent">
      <Form.Label>Max. Rent</Form.Label>
      <Form.Control  placeholder="Enter Max. Rent" />
      </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col}controlId="formGridRegDate">
      <Form.Label>Registration Date</Form.Label>
      <Form.Control type="date"  />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridRegStaff">
      <Form.Label>Staff</Form.Label>
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