import { useState } from "react";

export default function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("all");

  const [errors, setErrors] = useState({});

  // Validate logic
  function validate() {
    const newErrors = {};

    if (title.trim().length < 3) {
      newErrors.title = "Title must be atleast 3 characters";
    }

    if (amount < 0) {
      newErrors.amount = "Amount must be greater than 0";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  const newExpense = {
    id: Date.now(),
    title,
    amount: amount,
    category,
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (validate()) {
      onAddExpense(newExpense);

      setTitle("");
      setAmount("");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 rounded-2xl bg-white p-6 shadow-lg border border-gray-200"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Expense Form</h2>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Enter amount"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          >
            <option value="all">All</option>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
            <option value="shopping">Shopping</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>

        {(errors.title || errors.amount) && (
          <p className="text-red-600 m-2">
            {errors.name} & {errors.amount}
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-2.5 font-medium text-white transition hover:bg-blue-700 active:scale-[0.98]"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
}
