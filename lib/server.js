var express = require('express');
var bodyParser = require('body-parser');
var competition = require('./controllers/competition');

var app = express();

app.use(bodyParser.text({
	/** Set body length limit to 10MB */
	limit: 10485760,
}));

app.post('/competition/create', competition.create);

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
	console.log('Available route: POST /competition/create')
});

