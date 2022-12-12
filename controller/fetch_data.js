
const taskList = require('../models/taskList');

module.exports.add = function(req, res){
    taskList.create({
        task:req.body.Description,
        Date:req.body.Date,
        Purpose:req.body.Purpose
        
    },function(err,newTask){
        if(err){console.log("error in creating a Contact"); return;};
        console.log('***********',newTask);
        return res.redirect('/');
    });
}