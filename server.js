const express = require('express'),
      path = require('path');

const app = express();
let   PORT = 3000;

app.use(express.static(__dirname + '/dist/Diversineers'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + 'dist/Diversineers/src/index.html'));
});

app.listen(process.env.PORT || PORT);