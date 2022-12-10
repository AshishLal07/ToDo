const express = require('express');
const port = 8000;
const bodyparser = require('body-parser');


const app = express();
// app.use(bodyparser.urlencoded({extends:false}));
app.use(express.static("./assets"));
app.use('/',require('./routes'))

app.set('view engine','ejs');
app.set('views',"./views");







app.listen(port,function(err){
    if(err){
        console.log("error running server");
      
    }
})