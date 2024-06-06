const School = require('../models/School');
const User = require('../models/User');
const Class = require('../models/Class');
const Event = require('../models/Event');

// School Management
const getSchools = async (req, res) => {
  try {
    const schools = await School.find({ director: req.user.id });
    res.json(schools);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createSchool = async (req, res) => {
  const { name, address } = req.body;
  try {
    const school = new School({ name, address, director: req.user.id });
    await school.save();
    res.status(201).json(school);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateSchool = async (req, res) => {
  try {
    const school = await School.findById(req.params.id);
    if (!school || school.director.toString() !== req.user.id) {
      return res.status(404).json({ message: 'School not found' });
    }
    school.name = req.body.name || school.name;
    school.address = req.body.address || school.address;
    await school.save();
    res.json(school);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteSchool = async (req, res) => {
  try {
    const school = await School.findById(req.params.id);
    if (!school || school.director.toString() !== req.user.id) {
      return res.status(404).json({ message: 'School not found' });
    }
    await school.remove();
    res.json({ message: 'School removed' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Teacher Management
const getTeachers = async (req, res) => {
  try {
    const teachers = await User.find({ role: 'teacher', school: req.user.school });
    res.json(teachers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createTeacher = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const teacher = new User({ name, email, password, role: 'teacher', school: req.user.school });
    await teacher.save();
    res.status(201).json(teacher);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateTeacher = async (req, res) => {
  try {
    const teacher = await User.findById(req.params.id);
    if (!teacher || teacher.school.toString() !== req.user.school) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    teacher.name = req.body.name || teacher.name;
    teacher.email = req.body.email || teacher.email;
    if (req.body.password) {
      teacher.password = req.body.password;
    }
    await teacher.save();
    res.json(teacher);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteTeacher = async (req, res) => {
  try {
    const teacher = await User.findById(req.params.id);
    if (!teacher || teacher.school.toString() !== req.user.school) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    await teacher.remove();
    res.json({ message: 'Teacher removed' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Class Management
const getClasses = async (req, res) => {
  try {
    const classes = await Class.find({ school: req.user.school });
    res.json(classes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createClass = async (req, res) => {
  const { name, teacher } = req.body;
  try {
    const newClass = new Class({ name, teacher, school: req.user.school });
    await newClass.save();
    res.status(201).json(newClass);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateClass = async (req, res) => {
  try {
    const existingClass = await Class.findById(req.params.id);
    if (!existingClass || existingClass.school.toString() !== req.user.school) {
      return res.status(404).json({ message: 'Class not found' });
    }
    existingClass.name = req.body.name || existingClass.name;
    existingClass.teacher = req.body.teacher || existingClass.teacher;
    await existingClass.save();
    res.json(existingClass);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteClass = async (req, res) => {
  try {
    const existingClass = await Class.findById(req.params.id);
    if (!existingClass || existingClass.school.toString() !== req.user.school) {
      return res.status(404).json({ message: 'Class not found' });
    }
    await existingClass.remove();
    res.json({ message: 'Class removed' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Event Management
const getEvents = async (req, res) => {
  try {
    const events = await Event.find({ user: req.user.id });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createEvent = async (req, res) => {
  const { title, description, date } = req.body;
  try {
    const event = new Event({ title, description, date, user: req.user.id });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event || event.user.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Event not found' });
    }
    event.title = req.body.title || event.title;
    event.description = req.body.description || event.description;
    event.date = req.body.date || event.date;
    await event.save();
    res.json(event);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event || event.user.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Event not found' });
    }
    await event.remove();
    res.json({ message: 'Event removed' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getSchools,
  createSchool,
  updateSchool,
  deleteSchool,
  getTeachers,
  createTeacher,
  updateTeacher,
  deleteTeacher,
  getClasses,
  createClass,
  updateClass,
  deleteClass,
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
};
