import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import FilterExpenses from "./FilterExpenses";

export default function ExpensesList({ expenses, onDeleteExpense }) {
  const [category, setCategory] = useState("all");

  const filteredExpenses =
    category === "all"
      ? expenses
      : expenses.filter((expense) => expense.category === category);

  return (
    <div className="mx-auto max-w-2xl p-6">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">Expenses List</h2>

      <h3 className="mb-6 text-xl font-semibold text-gray-900">
        Total Expense: {filteredExpenses.length}
      </h3>

      <FilterExpenses category={category} setCategory={setCategory} />

      <div className="space-y-4">
        {filteredExpenses.length > 0 ? (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              {...expense}
              onDelete={onDeleteExpense}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No expenses found.</p>
        )}
      </div>
    </div>
  );
}
