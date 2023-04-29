import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar'
import ReportTable from '../helpers/reportTable';
import Property_textfield from '../helpers/report_textfield';


function ReportView() {
  return (
    <>
      <Navbar/>
      <Row>
        <Col sm={3}>
          <Sidebar style={{ paddingRight: 0, marginRight: 0 }} />
        </Col>
        <Col sm={9}>
          <Property_textfield />
          <ReportTable propertyNo="P00001" style={{ paddingLeft: 0, marginLeft: 0 }} />
        </Col>
      </Row>
    </>
  );
}

export default ReportView;
