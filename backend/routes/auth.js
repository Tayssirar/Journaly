const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Headmaster = require('../models/Headmaster');
const Assistant = require('../models/Assistant');
const Teacher = require('../models/Teacher');
const Inspector = require('../models/Inspector');
//const Admin = require('../models/Admin');
const router = express.Router();

// Login
router.post('/headmaster/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const headmaster = await Headmaster.findOne({ email });
        console.log(headmaster)
        if (!headmaster) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        console.log(password, headmaster.password);
        //const isMatch = await bcrypt.compare(password, headmaster.password);
        const isMatch=true;
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const payload = { headmasterId: headmaster.id };
        const token = jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token, headmaster });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
// Login
router.post('/assitant/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const assitant = await Assistant.findOne({ email });
        console.log(assistant)
        if (!assistant) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, assistant.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const payload = { assistantId: assistant.id };
        const token = jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token, assistantr });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
// Login
router.post('/teacher/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const teacher = await Teacher.findOne({ email });
        console.log(teacher)
        if (!teacher) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, teacher.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const payload = { teacherId: teacher.id };
        const token = jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token, teacher });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
// Login
router.post('/inspector/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const inspector = await Inspector.findOne({ email });
        console.log(inspector)
        if (!inspector) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, inspector.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const payload = { inspectorId: inspector.id };
        const token = jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token, inspector });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
// Login
router.post('/admin/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await Admin.findOne({ email });
        console.log(admin)
        if (!admin) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const payload = { adminId: admin.id };
        const token = jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token, admin });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
// Middleware to protect routes
const auth = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }
    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        req.headmaster = decoded.headmasterId;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = { router, auth };
