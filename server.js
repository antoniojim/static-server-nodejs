var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var dir = '';

app.use(express.static(dir));

app.listen(port);

console.log("Static file server running at\n  => http://localhost:" + port + "/\n in the Folder: " + dir + "CTRL + C to shutdown");
