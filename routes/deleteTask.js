const express = require('express');

const router = express.Router();

const deleteTask = require('../controller/delete_task');
router.get('/',deleteTask.delete);


module.exports = router;