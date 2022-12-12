const taskList = require('../models/taskList');
module.exports.home = function(req,res){
    
    taskList.find({},function(err,tasks){
        if(err){console.log("error while fetching data from server"); return;}
        return res.render('home',{
            title:'ToDo App',
            task_List : tasks
        });
            
    })
    
    
    
    
}