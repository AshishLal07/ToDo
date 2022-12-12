const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task:{
        type:String,
        require:true
    },
    Date:{
        type:Date,
        require:true
    },
    Purpose:{
        type:String,
        require:true
    }
})

// name for the object data or collection of field

const Tasks = mongoose.model('Tasks', taskSchema);

module.exports = Tasks;