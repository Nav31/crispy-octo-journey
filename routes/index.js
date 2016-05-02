var router = require('express').Router();
var comments = [];

router.post('/', function(req, res, next){
	console.log(req.body);
	saveOrReplaceHtml(req.body);
	res.sendStatus(201);
});


router.get('/:url', function(req, res, next){
	console.log('I am here');
	res.json(getHtmlObject(req.params.url));
});

function saveOrReplaceHtml(siteObj) {

	for(var i in comments) {
		if(comments[i].url === siteObj.url){
			comments[i] = siteObj;
			return;
		} 
	}
	comments.push(siteObj);
}

function getHtmlObject(url) {
	for(var i in comments) {
		if(comments[i].url === url){
			return comments[i].site;
		} 
	}
	return null;
}


module.exports = router;



