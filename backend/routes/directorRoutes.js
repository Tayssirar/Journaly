const express = require('express');
const router = express.Router();
const {
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
} = require('../controllers/directorController');
const auth = require('../middleware/auth');

router.get('/schools', auth(['director']), getSchools);
router.post('/schools', auth(['director']), createSchool);
router.put('/schools/:id', auth(['director']), updateSchool);
router.delete('/schools/:id', auth(['director']), deleteSchool);

router.get('/teachers', auth(['director']), getTeachers);
router.post('/teachers', auth(['director']), createTeacher);
router.put('/teachers/:id', auth(['director']), updateTeacher);
router.delete('/teachers/:id', auth(['director']), deleteTeacher);

router.get('/classes', auth(['director']), getClasses);
router.post('/classes', auth(['director']), createClass);
router.put('/classes/:id', auth(['director']), updateClass);
router.delete('/classes/:id', auth(['director']), deleteClass);

router.get('/events', auth(['director']), getEvents);
router.post('/events', auth(['director']), createEvent);
router.put('/events/:id', auth(['director']), updateEvent);
router.delete('/events/:id', auth(['director']), deleteEvent);

module.exports = router;
