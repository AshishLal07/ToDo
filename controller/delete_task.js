const taskList = require('../models/taskList');
module.exports.delete= function(req,res){
    let qId = req.query.id;
    taskList.deleteOne({_id:qId},function(error){
        if(error){
            console.log("data cannot be deleted");
            return;
        }
        return res.redirect('back');
    })
}