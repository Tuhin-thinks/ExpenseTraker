import { useState } from "react";
import { Container } from "react-bootstrap";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <Container>
        <h1>Expense Tracker</h1>
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} />
      </Container>
    </div>
  );
};

export default ExpenseTracker;
