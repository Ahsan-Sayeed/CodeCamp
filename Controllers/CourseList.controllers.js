const data = require('../Models/CourseList.models.json');

exports.courseList = (req,res)=>{
    res.status(200).json(data);
}