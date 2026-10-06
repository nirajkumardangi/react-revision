export default function FilterExpenses({ category, setCategory }) {
  return (
    <div className="mb-6">
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
  );
}
