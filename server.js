var express = require('express');
var app = express();

app.get('/nickname', function(request, response){
    response.send('super-scorpion');
});
app.get('/', function(request, response){
    response.send('Hello from the other side.');
});
app.listen(process.env.PORT || 4000);