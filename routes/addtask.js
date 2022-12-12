const express = require('express');


const router = express.Router();
const addtask = require('../controller/fetch_data');

router.post('/',addtask.add);

module.exports = router;