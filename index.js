const express = require('express');
const port = 8000;
const bodyparser = require('body-parser');


const app = express();
// adding mongoose 
const db = require('./config/mongoose');
// encoding data feeding into page to database
app.use(bodyparser.urlencoded({extends:false}));
// accesss to css or js
app.use(express.static("./assets"));
// setting server url path
app.use('/',require('./routes'))

// set view page for visual
app.set('view engine','ejs');
app.set('views',"./views");







app.listen(port,function(err){
    if(err){
        console.log("error running server");
      
    }
})