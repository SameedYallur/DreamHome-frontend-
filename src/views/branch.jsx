
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Table from '../helpers/branchTable';
// import Display_fields from "../helpers/staff_textfield"

function BranchView() {
  return (
    <>
      {/* <Container> */}
      <Navbar/>
        <Row>
          <Col sm={3}>
            <Sidebar style = {{paddingRight: 0,MarginRight: 0}} />
          </Col>
          <Col sm={9}>
            {/* <Display_fields/> */}
            <Table style = {{paddingLeft: 0,MarginLeft: 0}} />
          </Col>
        </Row>
      {/* </Container> */}
    </>
  );
}

export default BranchView;