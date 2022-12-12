const express = require('express');

const router = express.Router();
const homeController = require('../controller/home_controller');

router.get('/', homeController.home);
router.use('/new-task',require('./addtask'));
router.use('/delete-Task',require('./deleteTask'))

module.exports = router;