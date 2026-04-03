// import Express (framework create the server)
const express = require("express");

// import mongoose (to connect MongoDB)
const mongoose = require("mongoose");

// import cors (to allow the frontend communicate to backend)
const cors = require('cors')

// create the express app
const app = express()

// middleware → allows cross-origin requests (React → Backend)
app.use(cors)

// middleware → convert JSON data from frontend into JS object
app.use(express.json())

// connect to mangodb
mongoose.connect("mongodb://127.0.0.1:27017/employeeDB")
.then(()=>console.log("Mango Connected"))
.catch((err)=> console.log(err))

// CREATE SCHEMA (structure of data)
const employeeSchema = new mongoose.Schema({
  name: String,
  role: String,
  email: String,
  department: String
});

// CREATE MODEL (collection name: employees)
const Employee = mongoose.model("Employee", employeeSchema)

// TEST API (check server working)
app.get('/', (req, res) => {
    res.send("API is Working")
})


// 🔵 POST API (save employee data)
app.post("/add-employee", async (req, res) => {

  try {
    // get data from frontend
    const { name, role, email, department } = req.body;

    // create new employee object
    const newEmployee = new Employee({
      name: name,
      role: role,
      email: email,
      department: department
    });

    // save data into MongoDB
    await newEmployee.save();

    // send success response
    res.status(201).json({ message: "Employee added successfully" });

  } catch (error) {
    // if error occurs
    res.status(500).json({ error: error.message });
  }
});


// START SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

