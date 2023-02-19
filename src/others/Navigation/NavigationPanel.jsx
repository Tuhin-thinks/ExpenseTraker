import { Container, Nav, Navbar } from "react-bootstrap";

// a Navigation Panel for the app using react-bootstrap
const NavigationPanel = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Expense Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/expense-tracker">Expense Tracker</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationPanel;
