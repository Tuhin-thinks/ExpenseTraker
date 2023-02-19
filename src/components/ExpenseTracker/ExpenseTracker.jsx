import { useState } from "react";
import { Container } from "react-bootstrap";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import ResultsBar from "./ResultsBar";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState(45000);
  const [incomeFreq, setIncomeFreq] = useState("monthly");

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <Container>
        <h1>Expense Tracker</h1>
        <ExpenseForm addExpense={addExpense} />
        <div className="container">
          <ExpenseList expenses={expenses} />
          <ResultsBar
            expenses={expenses}
            income={income}
            incomeFreq={incomeFreq}
          />
        </div>
      </Container>
    </div>
  );
};

export default ExpenseTracker;
