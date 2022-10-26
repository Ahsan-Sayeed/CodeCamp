const express = require("express");
const { courseList, purchesPlans } = require("../Controllers/CourseList.controllers");
const router = express.Router();

router.get('/',courseList);
router.get('/plans/:id',purchesPlans);


module.exports = router;