const data = require('../Models/CourseList.models.json');
const plans = require('../Models/purchasePlan.json');
exports.courseList = (req,res)=>{
    res.status(200).json(data);
}
exports.purchesPlans = (req,res) =>{
    const id = req.params.id;
    const result = plans.find(value=>value.id===id);
    res.status(200).json(result);
}