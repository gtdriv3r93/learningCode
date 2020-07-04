const express = require('express');

const app = express();

//server settings
const port = 4200;
app.set('port',port);

app.use(express.json());

app.post('/server',async(req,res) => {

});

app.get('/',(req,res) => {
     console.log("GET received");
     res.redirect('index.html');
});


//START SERVER ************************ 

app.listen(app.get('port'),() => {
     try{
          console.log("Node Server initialized on Port:",app.get('port'))
     }catch(exception){
          console.log("server error");
     }
});
