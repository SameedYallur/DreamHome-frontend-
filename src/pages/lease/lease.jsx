import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Navbar from "../../components/Navbar.jsx"
import Sidebar from "../../components/Sidebar.jsx"
import { useParams } from 'react-router-dom';


function Lease() {
  const { propertyno } = useParams();
  console.log({propertyno})
  console.log("____________________________________________________________________________________________")
  return (
    <>
      <Navbar />
      <div className='formBranchContainer'>
        <Sidebar />
        <div className='formBranchContainer2'>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridClientNo">
                <Form.Label>Client No.</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPropertyNo">
                <Form.Label>Property No.</Form.Label>
                <Form.Select defaultValue={propertyno}>
                  <option>{propertyno}</option>  
                  <option>...</option>
                  
                </Form.Select>
              </Form.Group> 
              <Form.Group as={Col} controlId="formGridRent">
                <Form.Label>Rent</Form.Label>
                <Form.Control  placeholder="Enter Rent" />
              </Form.Group>           
            </Row>
      
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPaymentMethod">
                <Form.Label>Payment Method</Form.Label>
                <Form.Control  placeholder="Enter Payment Method" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridDepositPaid">
                <Form.Label>Deposit Paid</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>            
            </Row>  

            <Row className='mb-3'>
              <Form.Group as={Col} controlId="formGridRentStart">
                <Form.Label>Rent Start</Form.Label>
                <Form.Control  placeholder="Rent Start" />
              </Form.Group> 
              <Form.Group as={Col} controlId="formGridDuration">
                <Form.Label>Duration (in days)</Form.Label>
                <Form.Control  placeholder="Enter Duration" />
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
  
export default Lease;
