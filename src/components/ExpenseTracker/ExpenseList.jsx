// A list to display all the expenses in a table
import { useEffect, useRef } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";

const ExpenseList = ({ expenses }) => {
  const tableRef = useRef(null);
  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  }, [expenses]);

  return expenses.length ? (
    <div style={{ marginTop: "1rem" }} className="container">
      <Row
        style={{
          justifyContent: "center",
          overflowY: "scroll",
          height: "300px",
        }}
      >
        <Col className="col-md-10">
          <Card className="table-responsive mt-5">
            <Table
              hover
              striped
              style={{ marginTop: "1rem", borderRadius: "15px" }}
              className="table-responsive-xs table-borderless"
              ref={tableRef}
            >
              <thead className="thead-dark">
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
    </div>
  ) : (
    <div style={{ marginTop: "1rem", color: "gray" }}>
      No expenses to display
    </div>
  );
};

export default ExpenseList;
