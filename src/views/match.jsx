import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import MatchTable from '../helpers/matchTable';

function MatchView() {
  return (
    <>
      <Navbar/>
      <Row>
        <Col sm={3}>
          <Sidebar style={{ paddingRight: 0, marginRight: 0 }} />
        </Col>
        <Col sm={9}>
          <MatchTable propertyNo="P00001" style={{ paddingLeft: 0, marginLeft: 0 }} />
        </Col>
      </Row>
    </>
  );
}

export default MatchView;
