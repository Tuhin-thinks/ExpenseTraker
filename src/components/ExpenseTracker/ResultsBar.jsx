// component to take in the total expenses and total income and display them in a bar chart using chart.js
import { Chart, registerables } from "chart.js";
import { useEffect, useRef, useState } from "react";
import { Bar } from "react-chartjs-2";
Chart.register(...registerables);
/**
 *
 * @param {Array} expenses array of expenses
 * @param {Number} income monthly or yearly income
 * @param {String} incomeFreq  monthly or yearly
 * @returns
 */
function calcData(expenses, income, incomeFreq) {
  const totalExpenses = expenses.reduce((acc, curr) => {
    console.log(acc, curr.cost);
    return acc + curr.cost;
  }, 0);

  console.log("Total Expenses", totalExpenses);

  const _data = {
    labels: ["Total Expenses", "Total Income"],
    datasets: [
      {
        label: "Expenses",
        data: [totalExpenses, incomeFreq === "monthly" ? income : income / 12],
        backgroundColor: ["#ff0000", "#00ff00"],
      },
    ],
  };
  return _data;
}

const ResultsBar = ({ expenses = [], income = 0, incomeFreq }) => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const [data, setData] = useState({
    labels: ["Total Expenses", "Total Income"],
    datasets: [
      {
        label: "Expenses",
        data: [0, 0],
        backgroundColor: ["#ff0000", "#00ff00"],
      },
    ],
  });

  const chartRef = useRef();

  useEffect(() => {
    setData(calcData(expenses, income, incomeFreq));
    if (chartRef.current?.ChartInstance?.canvas?.parentNode?.style) {
      chartRef.current.ChartInstance.canvas.parentNode.style.height = "30vh";
    }
  }, [expenses, income, incomeFreq]);
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1rem",
        width: "100%",
        height: "100%",
      }}
    >
      <Bar
        data={data}
        options={options}
        style={{
          width: "100vw",
          height: "30vh",
        }}
        ref={chartRef}
      />
    </div>
  );
};

export default ResultsBar;
