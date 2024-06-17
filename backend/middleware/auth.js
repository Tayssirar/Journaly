const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = (roles = []) => {
  return [
    // Authenticate user
    async (req, res, next) => {
      let token;
      if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
      }
      if (!token) {
        return res.status(401).json({ message: 'Not authorized' });
      }
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();
      } catch (err) {
        return res.status(401).json({ message: 'Not authorized' });
      }
    },
    // Role-based access control
    (req, res, next) => {
      if (roles.length && !roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Forbidden' });
      }
      next();
    }
  ];
};

module.exports = auth;