const User = require('../models/User');
const Event = require('../models/Event');
const Report = require('../models/Report');

// Dashboard
const getDashboard = async (req, res) => {
  try {
    const events = await Event.find({ user: req.user.id });
    const reports = await Report.find({ inspector: req.user.id });
    const assistants = await User.find({ role: 'assistant', inspector: req.user.id });
    res.json({ events, reports, assistants });
  } catch (err) {
    res.status(500).json({ message: err.message });
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

// Assistant Management
const getAssistants = async (req, res) => {
  try {
    const assistants = await User.find({ role: 'assistant', inspector: req.user.id });
    res.json(assistants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createAssistant = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const assistant = new User({ name, email, password, role: 'assistant', inspector: req.user.id });
    await assistant.save();
    res.status(201).json(assistant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateAssistant = async (req, res) => {
  try {
    const assistant = await User.findById(req.params.id);
    if (!assistant || assistant.inspector.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Assistant not found' });
    }
    assistant.name = req.body.name || assistant.name;
    assistant.email = req.body.email || assistant.email;
    if (req.body.password) {
      assistant.password = req.body.password;
    }
    await assistant.save();
    res.json(assistant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteAssistant = async (req, res) => {
  try {
    const assistant = await User.findById(req.params.id);
    if (!assistant || assistant.inspector.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Assistant not found' });
    }
    await assistant.remove();
    res.json({ message: 'Assistant removed' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Report Management
const getReports = async (req, res) => {
  try {
    const reports = await Report.find({ inspector: req.user.id });
    res.json(reports);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createReport = async (req, res) => {
  const { teacher, content } = req.body;
  try {
    const report = new Report({ inspector: req.user.id, teacher, content });
    await report.save();
    res.status(201).json(report);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateReport = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report || report.inspector.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Report not found' });
    }
    report.content = req.body.content || report.content;
    await report.save();
    res.json(report);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteReport = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report || report.inspector.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Report not found' });
    }
    await report.remove();
    res.json({ message: 'Report removed' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getDashboard,
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  getAssistants,
  createAssistant,
  updateAssistant,
  deleteAssistant,
  getReports,
  createReport,
  updateReport,
  deleteReport
};
