import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Navbar from "../../components/Navbar.jsx";
import Sidebar from "../../components/Sidebar.jsx";

function privateOwner() {
  return (
    <>
      <Navbar />
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
              <Form.Group as={Col} >
                <Form.Label>Registration staff</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} >
                <Form.Label>Registration branch</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
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

export default privateOwner;
