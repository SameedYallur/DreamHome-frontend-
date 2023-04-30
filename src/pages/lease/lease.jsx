import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Navbar from "../../components/Navbar.jsx"
import Sidebar from "../../components/Sidebar.jsx"
import { useParams } from 'react-router-dom';
import React, { useContext, useState ,useEffect } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { BranchContext } from '../../context/branch_ctx';


function Lease() {

  //
  const [isLoading, setIsLoading] = useState(false);
  const { selectedBranch, setSelectedBranch } = useContext(BranchContext);
  const [stf, setstf] = useState([]);


  const handleSearch = async (query) => {
    setIsLoading(true);
    try {

      const response = await fetch(`http://127.0.0.1:8000/api/client/${selectedBranch}/search?q=${query}`);
      const data = await response.json();
      setstf(data);
      console.log(data)
      setIsLoading(false);
      return data;
    } catch (error) {
      console.error(error);
    }
  };



  
  //@@@@@@@@@@@@@@@@@@@@@@@@@@2
  const [label_key, setLabel_key] = useState("name");
  const [boolean, setBoolean] = useState(false);

  const handleMenuItemClick = (selected) => {
    setLabel_key("client_no");
    setBoolean(true);
  }

  const handleSelect = (selected) => {
    // if(selected && selected.length > 0 && selected[0].branch_no) {
      console.log(selected)
      if (boolean) {
        setLabel_key("client_no");
        setBoolean(false);
      } else {
        setLabel_key("name");
      }
    // }
  };
  //@@@@@@@@@@@@@@@@@@@@@@@@@@2

  //

  const { propertyno } = useParams();
  return (
    <>
      <Navbar />
      <div className='formBranchContainer'>
        <Sidebar />
        <div className='formBranchContainer2'>
          <Form>
            <Row className="mb-3">
{/* 
              <Form.Group as={Col} controlId="formGridClientNo">
                <Form.Label>Client No.</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group> */}

              <Form.Group as={Col} controlId="formGridRegStaff">
  <Form.Label id="staff">Client No</Form.Label>
  <AsyncTypeahead
  id="basic-typeahead-single"
  labelKey={label_key}
  placeholder="Client no"
  isLoading={isLoading}
  onSearch={(search) => handleSearch(search)}
  onChange={handleSelect}
  options={stf}
  renderMenuItemChildren={(option) => (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => handleMenuItemClick(option)}
    >
                    <span>{option.client_no}</span>
                    <span> {option.name}</span> 
                  </div>
  )}
/>
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
