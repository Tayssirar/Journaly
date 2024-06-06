const express = require('express');
const router = express.Router();
const { getUsers, createUser, updateUser, deleteUser } = require('../controllers/adminController');
const auth = require('../middleware/auth');

router.get('/users', auth(['admin']), getUsers);
router.post('/users', auth(['admin']), createUser);
router.put('/users/:id', auth(['admin']), updateUser);
router.delete('/users/:id', auth(['admin']), deleteUser);

module.exports = router;
