// A list to display all the expenses in a table
import { Card, Col, Row, Table } from "react-bootstrap";

const ExpenseList = ({ expenses }) => {
  return expenses.length ? (
    <Row style={{ justifyContent: "center" }}>
      <Col className="col-md-10">
        <Card className="table-responsive">
          <Table
            bordered
            hover
            style={{ marginTop: "1rem", borderRadius: "15px" }}
            responsive
          >
            <thead>
              <tr>
                <th>Item</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.item}</td>
                  <td>
                    {expense.cost.toLocaleString("en-In", {
                      style: "currency",
                      currency: "INR",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </Col>
    </Row>
  ) : (
    <div style={{ marginTop: "1rem", color: "gray" }}>
      No expenses to display
    </div>
  );
};

export default ExpenseList;
