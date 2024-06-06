const express = require('express');
const router = express.Router();
const {
  getDashboard,
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  getReports,
  createReport,
  updateReport,
  deleteReport
} = require('../controllers/assistantController');
const auth = require('../middleware/auth');

router.get('/dashboard', auth(['assistant']), getDashboard);

router.get('/events', auth(['assistant']), getEvents);
router.post('/events', auth(['assistant']), createEvent);
router.put('/events/:id', auth(['assistant']), updateEvent);
router.delete('/events/:id', auth(['assistant']), deleteEvent);

router.get('/reports', auth(['assistant']), getReports);
router.post('/reports', auth(['assistant']), createReport);
router.put('/reports/:id', auth(['assistant']), updateReport);
router.delete('/reports/:id', auth(['assistant']), deleteReport);

module.exports = router;
