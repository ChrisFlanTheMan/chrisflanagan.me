var express = require('express');
var app = express();
var router = express.Router();

app.set('port', (process.env.PORT || 4000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

router.get('/', function(request, response){
      response.render('home.ejs');
});

router.get('/resume', function(request, response){
      response.render('resume.ejs');
});

router.get('/base_resume', function(request, response){
      response.render('base_resume.ejs');
});

app.use('/', router);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});