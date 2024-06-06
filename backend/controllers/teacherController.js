const Class = require('../models/Class');
const Document = require('../models/Document');
const Mark = require('../models/Mark');
const Event = require('../models/Event');

// Class Management
const getClasses = async (req, res) => {
  try {
    const classes = await Class.find({ teacher: req.user.id });
    res.json(classes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Document Management
const getDocuments = async (req, res) => {
  try {
    const documents = await Document.find({ teacher: req.user.id });
    res.json(documents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createDocument = async (req, res) => {
  const { title, content } = req.body;
  try {
    const document = new Document({ title, content, teacher: req.user.id });
    await document.save();
    res.status(201).json(document);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (!document || document.teacher.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Document not found' });
    }
    document.title = req.body.title || document.title;
    document.content = req.body.content || document.content;
    await document.save();
    res.json(document);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (!document || document.teacher.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Document not found' });
    }
    await document.remove();
    res.json({ message: 'Document removed' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Mark Management
const getMarks = async (req, res) => {
  try {
    const marks = await Mark.find({ teacher: req.user.id });
    res.json(marks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createMark = async (req, res) => {
  const { student, class: classId, subject, mark } = req.body;
  try {
    const newMark = new Mark({ student, teacher: req.user.id, class: classId, subject, mark });
    await newMark.save();
    res.status(201).json(newMark);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateMark = async (req, res) => {
  try {
    const mark = await Mark.findById(req.params.id);
    if (!mark || mark.teacher.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Mark not found' });
    }
    mark.subject = req.body.subject || mark.subject;
    mark.mark = req.body.mark || mark.mark;
    await mark.save();
    res.json(mark);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteMark = async (req, res) => {
  try {
    const mark = await Mark.findById(req.params.id);
    if (!mark || mark.teacher.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Mark not found' });
    }
    await mark.remove();
    res.json({ message: 'Mark removed' });
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
  getClasses,
  getDocuments,
  createDocument,
  updateDocument,
  deleteDocument,
  getMarks,
  createMark,
  updateMark,
  deleteMark,
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
};
