// routes/user.js
const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth'); // middleware to verify token

const router = express.Router();

// Get User Profile
router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
