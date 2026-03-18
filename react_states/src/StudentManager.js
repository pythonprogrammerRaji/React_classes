import React, { useState } from "react";

function StudentManager() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);

  const addStudent = () => {
    if (name !== "") {
      setStudents([...students, name]);
      setName("");
    }
  };

  const deleteStudent = (index) => {
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
  };

  return (
    <div>
      <h3>Student Manager</h3>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addStudent}>Add</button>

      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student}
            <button onClick={() => deleteStudent(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentManager;