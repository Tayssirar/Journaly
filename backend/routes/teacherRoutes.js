const express = require('express');
const router = express.Router();
const {
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
} = require('../controllers/teacherController');
const auth = require('../middleware/auth');

router.get('/classes', auth(['teacher']), getClasses);

router.get('/documents', auth(['teacher']), getDocuments);
router.post('/documents', auth(['teacher']), createDocument);
router.put('/documents/:id', auth(['teacher']), updateDocument);
router.delete('/documents/:id', auth(['teacher']), deleteDocument);

router.get('/marks', auth(['teacher']), getMarks);
router.post('/marks', auth(['teacher']), createMark);
router.put('/marks/:id', auth(['teacher']), updateMark);
router.delete('/marks/:id', auth(['teacher']), deleteMark);

router.get('/events', auth(['teacher']), getEvents);
router.post('/events', auth(['teacher']), createEvent);
router.put('/events/:id', auth(['teacher']), updateEvent);
router.delete('/events/:id', auth(['teacher']), deleteEvent);

module.exports = router;
