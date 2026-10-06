export default function StudentCard({
  id,
  name,
  email,
  marks,
  onDeleteStudent,
}) {
  const isPassed = Number(marks) >= 40;

  return (
    <div className="bg-white shadow-md rounded-xl p-5 border border-gray-200 hover:shadow-lg transition-all duration-300">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>

      <p className="text-gray-600 mt-2">
        <span className="font-medium">Email:</span> {email}
      </p>

      <div className="mt-4 flex items-center gap-2 flex-wrap">
        {/* Marks Badge */}
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            marks >= 80
              ? "bg-green-100 text-green-700"
              : marks >= 50
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
          }`}
        >
          Marks: {marks}
        </span>

        {/* Pass/Fail Badge */}
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            isPassed
              ? "bg-emerald-100 text-emerald-700"
              : "bg-rose-100 text-rose-700"
          }`}
        >
          {isPassed ? "✔ Passed" : "❌ Failed"}
        </span>

        {/* delete button */}
        <button
          onClick={() => onDeleteStudent(id)}
          className="ml-auto bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-colors duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
