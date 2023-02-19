import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const LandingPage = () => {
  console.log("Here we go again!");
  return (
    <div
      className="d-flex container"
      style={{
        minHeight: "100vh",
        justifyContent: "center",
      }}
    >
      <Row
        style={{
          alignItems: "center",
        }}
      >
        <Col className="justify-content-center col-md-6 col-sm-10">
          <Card className="border-0">
            <Card.Body>
              <Image
                src="https://www.i1.creditdonkey.com/image/1/debts-and-expenses-graph-v2.png"
                className="img-fluid"
              ></Image>
            </Card.Body>
          </Card>
        </Col>

        <Col className="justify-content-center col-md-6 col-sm-6">
          <Card>
            <Card.Body>
              {/* create button to take user to expense tracker page */}
              <Link to="/expense-tracker">
                <Button className="btn btn-primary">Expense Tracker</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LandingPage;
