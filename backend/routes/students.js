const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Get all students or filter by school and class
router.get('/', async (req, res) => {
  const { school, classe } = req.query;
  const query = {};

  if (school) {
    query.school = school;
  }

  if (classe) {
    query.classe = classe;
  }

  try {
    const students = await Student.find(query).populate('school'); // Populate school field
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a single student by ID
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate('school'); // Populate school field
    if (!student) {
      return res.status(404).send('Student not found');
    }
    res.status(200).send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Add a new student
router.post('/add', async (req, res) => {
  console.log('Request Body:', req.body); // Log request body to ensure it's received correctly
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    console.error('Error saving student:', error); // Log any errors
    res.status(400).send(error);
  }
});

// Update a student
router.put('/update/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!student) {
      return res.status(404).send('Student not found');
    }
    res.status(200).send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete a student
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedStudent = await Student.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
