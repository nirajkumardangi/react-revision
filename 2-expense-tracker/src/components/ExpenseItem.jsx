export default function ExpenseItem({ id, title, amount, category, onDelete }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{category}</p>
      </div>

      <div className="flex items-center gap-4">
        <p className="text-lg font-bold text-green-600">₹{amount}</p>

        <button
          onClick={() => onDelete(id)}
          className="rounded-md cursor-pointer bg-red-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
