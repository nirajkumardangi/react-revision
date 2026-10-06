export default function DashboardStats({ students }) {
  const totalStudents = students.length;

  const passedStudents = students.filter(
    (student) => Number(student.marks) >= 40,
  ).length;

  const failedStudents = students.filter(
    (student) => Number(student.marks) < 40,
  ).length;

  const averageMarks =
    totalStudents > 0
      ? (
          students.reduce((sum, student) => sum + Number(student.marks), 0) /
          totalStudents
        ).toFixed(2)
      : 0;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
      <div className="bg-blue-100 p-4 rounded-lg text-center">
        <h3 className="font-semibold">Total Students</h3>
        <p className="text-2xl font-bold">{totalStudents}</p>
      </div>

      <div className="bg-green-100 p-4 rounded-lg text-center">
        <h3 className="font-semibold">Passed</h3>
        <p className="text-2xl font-bold">{passedStudents}</p>
      </div>

      <div className="bg-red-100 p-4 rounded-lg text-center">
        <h3 className="font-semibold">Failed</h3>
        <p className="text-2xl font-bold">{failedStudents}</p>
      </div>

      <div className="bg-yellow-100 p-4 rounded-lg text-center">
        <h3 className="font-semibold">Average Marks</h3>
        <p className="text-2xl font-bold">{averageMarks}</p>
      </div>
    </div>
  );
}
