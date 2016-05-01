var app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api/comments', require('./routes'));

app.use(function(req, res, next, err){
	console.error(err.message);
})


app.listen(1337, function(){
	console.log('listening on port 1337');
})


