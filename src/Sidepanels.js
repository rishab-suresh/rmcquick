import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';



function Sidepanels() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column" id='userlist'>
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Tab 3</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth">Tab 5</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sixth">Tab 6</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
            Commodo pariatur reprehenderit dolore et pariatur. Et aliquip excepteur laboris sunt do proident in commodo enim elit. Officia elit elit adipisicing deserunt fugiat occaecat. Lorem esse sit consectetur nulla consequat proident. Ea cillum enim duis fugiat culpa.
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              Ad laborum sit qui irure quis labore ex. Nulla laboris occaecat esse adipisicing esse duis ad adipisicing nulla magna excepteur fugiat cillum. Fugiat id nisi ullamco laboris cillum magna sunt ea sint ad.
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              Ad laborum sit qui irure quis labore ex. Nulla laboris occaecat esse adipisicing esse duis ad adipisicing nulla magna excepteur fugiat cillum. Fugiat id nisi ullamco laboris cillum magna sunt ea sint ad.
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              Ad laborum sit qui irure quis labore ex. Nulla laboris occaecat esse adipisicing esse duis ad adipisicing nulla magna excepteur fugiat cillum. Fugiat id nisi ullamco laboris cillum magna sunt ea sint ad.
            </Tab.Pane>
            <Tab.Pane eventKey="fifth">
              Ad laborum sit qui irure quis labore ex. Nulla laboris occaecat esse adipisicing esse duis ad adipisicing nulla magna excepteur fugiat cillum. Fugiat id nisi ullamco laboris cillum magna sunt ea sint ad.
            </Tab.Pane>
            <Tab.Pane eventKey="sixth">
              Ad laborum sit qui irure quis labore ex. Nulla laboris occaecat esse adipisicing esse duis ad adipisicing nulla magna excepteur fugiat cillum. Fugiat id nisi ullamco laboris cillum magna sunt ea sint ad.
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Sidepanels;