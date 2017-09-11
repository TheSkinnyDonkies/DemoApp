const express = require('express');
const app = express();
const path = require('path');
const currentPort = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist'));
app.listen(currentPort);
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})

console.log(`Console listening to port ${currentPort}`);