const express = require('express');
const router = express.Router();

// @route   GET api/videos
// @desc    Test route 
// @access  Public
router.get('/', (req, res) => res.send('videos route'));

module.exports = router; 