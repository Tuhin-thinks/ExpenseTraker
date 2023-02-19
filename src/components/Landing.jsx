import { Button, Card, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  console.log('Here we go again!');
  return (
    <div
      // Here use .container-fluid instead of .container because .container has one fixed width for each screen size in bootstrap (xs,sm,md,lg,xl,xxl); .container-fluid expands to fill the available width.
      className='d-flex container-fluid'
      style={{
        minHeight: '100vh',
        justifyContent: 'center',
      }}
    >
      <Row
        style={{
          alignItems: 'center',
        }}
      >
        {/* Bootstrap includes different breaking points (xs, sm, md, lg, xl, xxl). For mobile responsiveness you have to use 'xs'.*/}
        {/* Bootstrap breakpoints: https://react-bootstrap.github.io/layout/breakpoints/ */}
        <Col className='justify-content-center col-md-6 col-sm-10 col-10'>
          <Card className='border-0'>
            <Card.Body>
              <Image
                src='https://www.i1.creditdonkey.com/image/1/debts-and-expenses-graph-v2.png'
                className='img-fluid'
              ></Image>
            </Card.Body>
          </Card>
        </Col>

        <Col className='justify-content-center col-md-6 col-sm-10 col-10'>
          <Card>
            <Card.Body>
              {/* create button to take user to expense tracker page */}
              <Link to='/expense-tracker'>
                <Button className='btn btn-primary'>Expense Tracker</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LandingPage;
