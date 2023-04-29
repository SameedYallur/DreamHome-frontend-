import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import MatchTable from '../helpers/matchTable';
import { useParams } from 'react-router-dom';

function MatchView() {
  const { propertyno } = useParams();
  return (
    <>
      <Navbar/>
      <Row>
        <Col sm={3}>
          <Sidebar style={{ paddingRight: 0, marginRight: 0 }} />
        </Col>
        <Col sm={9}>
          {propertyno ? (
            <MatchTable propertyNo={propertyno} style={{ paddingLeft: 0, marginLeft: 0 }} />
          ) : (
            <p>Please choose a property</p>
          )}
        </Col>
      </Row>
    </>
  );
}

export default MatchView;
