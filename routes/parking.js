const express = require('express');
const router = express.Router();
const sql = require('../db');

router.get('/', (req, res) => {
    console.log('parking route hit');
    res.status(200).json({data: "parking route is working"});
})

module.exports = router;