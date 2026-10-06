import { useState } from "react";
import StudentCard from "./StudentCard";

export default function StudentList({ students, onDeleteStudent }) {
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const isPassed = Number(student.marks) >= 40;

    let matchesStatus;

    if (statusFilter === "all") {
      matchesStatus = true;
    } else if (statusFilter === "passed") {
      matchesStatus = isPassed;
    } else {
      matchesStatus = !isPassed;
    }
    
    return matchesSearch && matchesStatus;
  });

  return (
    <>
      <h2 className="font-bold text-2xl text-center mb-6">Student List</h2>

      {/* Search */}
      <div className="max-w-md mx-auto mb-4">
        <input
          type="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search by name..."
          className="w-full border px-4 py-2 rounded-lg"
        />
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-6 mb-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="status"
            value="all"
            checked={statusFilter === "all"}
            onChange={(e) => setStatusFilter(e.target.value)}
          />
          All
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="status"
            value="passed"
            checked={statusFilter === "passed"}
            onChange={(e) => setStatusFilter(e.target.value)}
          />
          Passed
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="status"
            value="failed"
            checked={statusFilter === "failed"}
            onChange={(e) => setStatusFilter(e.target.value)}
          />
          Failed
        </label>
      </div>

      {/* Results */}
      <p className="text-center text-gray-600 mb-4">
        Showing {filteredStudents.length} student(s)
      </p>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 m-5">
        {filteredStudents.map((student) => (
          <StudentCard key={student.id} {...student} onDeleteStudent={onDeleteStudent} />
        ))}
      </div>
    </>
  );
}
