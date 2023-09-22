const express = require('express');
const router = express.Router();
const sql = require('../db');

router.get('/', (req, res) => {
    console.log('profile route hit');
    res.status(200).json({data: "profile route is working"});
})

module.exports = router;
