var logger = require("morgan"),
cors = require("cors"),
http = require("http"),
express = require("express"),
bodyParser = require("body-parser");
mongoose = require( 'mongoose');

var app = express();
var port = 3000;


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(require('./routes'));

app.get('/hello/:foo/:bar', function(req,res){
    res.json({result: "Hello World! 😤😱🥵🤡", data: [
        req.params.foo,
        req.params.bar
    ]});
});

app.post('/hello', function(req,res){
    res.json({result: "The POST request was sent", data: req.body});

});

app.listen(port, function(err){
    console.log("Listening on Port: " + port)
});

mongoose.connect('mongodb://localhost/test');
mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});