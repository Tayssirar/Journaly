const Event = require('../models/Event');
const Report = require('../models/Report');

// Dashboard
const getDashboard = async (req, res) => {
  try {
    const events = await Event.find({ user: req.user.id });
    const reports = await Report.find({ assistant: req.user.id });
    res.json({ events, reports });
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

// Report Management
const getReports = async (req, res) => {
  try {
    const reports = await Report.find({ assistant: req.user.id });
    res.json(reports);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createReport = async (req, res) => {
  const { teacher, content } = req.body;
  try {
    const report = new Report({ assistant: req.user.id, teacher, content });
    await report.save();
    res.status(201).json(report);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateReport = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report || report.assistant.toString() !== req.user.id) {
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
    if (!report || report.assistant.toString() !== req.user.id) {
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
  getReports,
  createReport,
  updateReport,
  deleteReport
};
