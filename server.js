const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/pages/index.html");
});

app.get('/cv', (req, res) => {
    res.sendFile(__dirname + "/pages/cv.html");
});

app.listen(port, () => {
    console.log(`helloworld: listening on port ${port}`);
});