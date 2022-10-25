const express = require("express");
const { courseList } = require("../Controllers/CourseList.controllers");
const router = express.Router();

router.get('/',courseList);


module.exports = router;