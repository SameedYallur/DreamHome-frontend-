import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Navbar from "../../components/Navbar.jsx";
import Sidebar from "../../components/Sidebar.jsx";
import { useContext,useState } from "react";
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { BranchContext } from '../../context/branch_ctx';

function PrivateOwner() {
//
const [staffOptions, setStaffOptions] = useState([]);

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
//

  return (
    <>
      <Navbar  selectedBranch={selectedBranch} />
      <div className="formBranchContainer">
        <Sidebar />
        <div className="formBranchContainer2">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Owner Name</Form.Label>
                <Form.Control placeholder="Enter Owner Name" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} >
                <Form.Label>Registration Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group as={Col} >
                <Form.Label>Telephone No.</Form.Label>
                <Form.Control placeholder="812-411-4452" />
              </Form.Group>
            </Row>

            <Row className="">
              <Form.Group className="mb-3" >
                <Form.Label>Home Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>
            </Row>

            <Row className="mb-3">

              {/* <Form.Group as={Col} >
                <Form.Label>Registration staff</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group> */}

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
      <span>{option.staff_no}</span>
      <span>  {option.name}</span> {/* Display name */}
    </div>
  )}
/>
{/* </Form.Group> */}
              
      <Form.Group as={Col} controlId="formGridRegBranch">
      <Form.Label>Branch</Form.Label>
      <Form.Select defaultValue="Choose..." disabled>
      <option>{selectedBranch}</option>
      </Form.Select>
      </Form.Group>
              
              {/* <Form.Group as={Col} >
                <Form.Label>Registration branch</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group> */}
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} >
                <Form.Label>Type of business</Form.Label>
                <Form.Control placeholder="Optional" />
              </Form.Group>
              <Form.Group as={Col} >
                <Form.Label>Contact name</Form.Label>
                <Form.Control placeholder="Optional" />
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

export default PrivateOwner;
