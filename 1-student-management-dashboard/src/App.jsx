import { useEffect, useState } from "react";
import DashboardStats from "./components/DashboardStats";
import Navbar from "./components/Navbar";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

export default function App() {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");

    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  function addStudent(students) {
    setStudents((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...students,
      },
    ]);
  }

  function deleteStudent(id) {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  return (
    <div className="m-5">
      <Navbar />

      <hr className="my-4 border-gray-400" />

      <StudentForm onAddStudent={addStudent} />

      <hr className="my-4 border-gray-400" />

      <DashboardStats students={students} />

      <hr className="my-4 border-gray-400" />

      <StudentList students={students} onDeleteStudent={deleteStudent} />
    </div>
  );
}
