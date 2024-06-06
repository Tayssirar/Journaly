const express = require('express');
const router = express.Router();
const {
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
} = require('../controllers/inspectorController');
const auth = require('../middleware/auth');

router.get('/dashboard', auth(['inspector']), getDashboard);

router.get('/events', auth(['inspector']), getEvents);
router.post('/events', auth(['inspector']), createEvent);
router.put('/events/:id', auth(['inspector']), updateEvent);
router.delete('/events/:id', auth(['inspector']), deleteEvent);

router.get('/assistants', auth(['inspector']), getAssistants);
router.post('/assistants', auth(['inspector']), createAssistant);
router.put('/assistants/:id', auth(['inspector']), updateAssistant);
router.delete('/assistants/:id', auth(['inspector']), deleteAssistant);

router.get('/reports', auth(['inspector']), getReports);
router.post('/reports', auth(['inspector']), createReport);
router.put('/reports/:id', auth(['inspector']), updateReport);
router.delete('/reports/:id', auth(['inspector']), deleteReport);

module.exports = router;
