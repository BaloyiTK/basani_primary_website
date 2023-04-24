import React, { useState } from "react";
import axios from "axios";

const grades = [
  { value: "", label: "Select Grade" },
  { value: "1", label: "Grade 1" },
  { value: "2", label: "Grade 2" },
  { value: "3", label: "Grade 3" },
  { value: "SGB", label: "SGB" },
  { value: "Teachers", label: "Teachers" },
  { value: "Other staff members", label: "Other staff members" },
];

const ContactNumber = () => {
  const [number, setNumber] = useState("");
  const [selectedGrades, setSelectedGrades] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
   await axios
      .post("http://localhost:3001/api/contact/add", {
        number: number,
        grade: selectedGrades,
      })
      .then((response) => {
        console.log(response.data);
        // handle success response
      })
      .catch((error) => {
        console.log(error);
        // handle error response
      });
  };

  const handleGradeChange = (event) => {
    setSelectedGrades(event.target.value);
  };

  return (
    <div className="grid justify-center shadow">
      <div className="rounded-lg pb-5 pt-2">
        <h1 className="text-2xl font-bold mb-4">Add Contact number</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="number" className="block font-medium mb-2">
              Phone Number
            </label>
            <input
              id="number"
              name="number"
              type="text"
              value={number}
              onChange={(event) => setNumber(event.target.value)}
              placeholder ="Contact number"
              className=" border-gray-300 shadow-md rounded-lg p-2 outline-none hover:shadow-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="grade" className="block font-medium mb-2">
              Grade Level
            </label>
            <select
              id="grade"
              name="grade"
              value={selectedGrades}
              onChange={handleGradeChange}
              className=" border-gray-300 rounded-lg p-2"
              required
            >
              {grades.map((grade) => (
                <option key={grade.value} value={grade.value}>
                  {grade.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-purple-500 text-white rounded-lg py-2 px-4 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
            >
              Add Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactNumber;
