import { useState } from "react";

export default function StudentForm({ onAddStudent }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    marks: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  // Validation logic
  function validate() {
    let newErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email address";
    }

    if (formData.marks === "") {
      newErrors.marks = "Marks are required";
    }

    if (
      formData.marks &&
      (Number(formData.marks) < 0 || Number(formData.marks) > 100)
    ) {
      newErrors.marks = "Enter marks between 0 - 100";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // true if no errors
  }

  // Handle submit
  function handleSubmit(e) {
    e.preventDefault();

    if (validate()) {
      onAddStudent(formData);

      setFormData({
        name: "",
        email: "",
        marks: "",
      });
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Add Student</h2>

        {/* Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>

          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>

          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Marks */}
        <div className="mb-5">
          <label
            htmlFor="marks"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Marks
          </label>

          <input
            type="number"
            name="marks"
            id="marks"
            value={formData.marks}
            onChange={handleChange}
            placeholder="Enter marks"
            className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          {errors.marks && (
            <p className="text-red-600 text-sm mt-1">{errors.marks}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Add Student
        </button>
      </form>
    </div>
  );
}
