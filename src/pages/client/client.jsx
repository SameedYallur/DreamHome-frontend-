import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Navbar from "../../components/Navbar.jsx"
import Sidebar from "../../components/Sidebar.jsx"

import React, { useContext, useState ,useEffect } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { BranchContext } from '../../context/branch_ctx';


function Client() {

  const [staffOptions, setStaffOptions] = useState([]);

  useEffect(() => {
    const fetchStaffOptions = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/preferences/');
        const data = await response.json();
        setStaffOptions(data);
        console.log(staffOptions)
      } catch (error) {
        console.error(error);
      }
    };
    fetchStaffOptions();
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const { selectedBranch, setSelectedBranch } = useContext(BranchContext);
  const [stf, setstf] = useState([]);

  const handleSearch = async (query) => {
    setIsLoading(true);
    try {

      const response = await fetch(`http://127.0.0.1:8000/api/staff/${selectedBranch}/search?q=${query}`);
      const data = await response.json();
      setstf(data);
      console.log(data)
      setIsLoading(false);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelect = (selected) => {
    // if(selected && selected.length > 0 && selected[0].branch_no) {
      console.log(selected)
      // setSelected(selected);
      // setInputClassName('my-input-class');
      // setSelectedBranch(selected[0].branch_no);
    // }
  };

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
      <Form.Select defaultValue="Choose..." disabled>
      <option>{selectedBranch}</option>
      </Form.Select>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridRegStaff">
  <Form.Label>Preference Types</Form.Label>
  <Form.Control as="select" defaultValue="Choose...">
    <option>Choose...</option>
    {staffOptions.map((staff) => (
      <option key={staff.id} value={staff.id}>
        {staff.name}
      </option>
    ))}
  </Form.Control>
</Form.Group>

      {/* <Form.Group as={Col} controlId="formGridPrefType">
      <Form.Label>Preference Type</Form.Label>
      <Form.Control  placeholder="Enter Preference" />
      </Form.Group> */}
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
  <Form.Label id="staff">Staff</Form.Label>
  <AsyncTypeahead
  id="basic-typeahead-single"
  labelKey="name" // Update labelKey to the name field
  placeholder="staff"
  isLoading={isLoading}
  onSearch={(search) => handleSearch(search)}
  onChange={handleSelect}
  options={stf}
  renderMenuItemChildren={(option) => (
    <div>
      {/* <span>{option.staff_no}</span> Display staff_no */}
      <span>  {option.name}</span> {/* Display name */}
    </div>
  )}
/>
</Form.Group>

      {/* <Form.Group as={Col} controlId="formGridRegStaff">
      <Form.Label>Staff</Form.Label>
      <Form.Select defaultValue="Choose...">
      <option>Choose...</option>
      <option>...</option>
      </Form.Select>
      </Form.Group>       */}
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