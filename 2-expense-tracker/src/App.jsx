import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpensesList from "./components/ExpensesList";

export default function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");

    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  function addExpense(expense) {
    setExpenses((prev) => [...prev, expense]);
  }

  function deleteExpense(expenseId) {
    setExpenses((prev) => prev.filter((expense) => expense.id !== expenseId));
  }

  function filterExpenses(category) {
    
    setExpenses(prev => {

      if(category === "all") {

      }
    })
  }

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  console.log(expenses);

  return (
    <>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpensesList expenses={expenses} onDeleteExpense={deleteExpense} />
    </>
  );
}
