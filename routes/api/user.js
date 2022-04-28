const express = require('express');
const pool = require('../../helpers/database');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult  } = require('express-validator');

// @route   GET api/user
// @desc    Test route 
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const sqlQuery = 'SELECT id, email, password, date FROM users WHERE id=?';
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows)
    } catch (err) {
        res.status(400).send(err.message)
    }

    res.status(200).json({id: req.params.id})
});


// @route   POST api/user
// @desc    Test route 
// @access  Public
router.post('/register', [
    check('email', 'Please include valid email')
        .isEmail(),
    check('password', 'Please enter a password with 6 or more characters')
        .isLength({min: 6})
],
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body;

    try {
        // Check if user exists
        if (email) {
            return res.status(400).json({ errors: [{ msg: 'User already exists'}] });
        };

        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        const encryptedPassword = await bcrypt.hash(password, salt);

        const sqlQuery = 'INSERT INTO users (email, password) VALUES (?, ?)';
        const result = await pool.query(sqlQuery, [email, encryptedPassword]);

        res.status(200).json({ userID: result.insertId });

    } catch (err) {
        res.status(400).send(err.message)
    }
})

module.exports = router; 