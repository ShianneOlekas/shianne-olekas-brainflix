const express = require('express');
const cors = require('cors');

const videosRoute = require('./routes/videosRoute')

const app = express();
app.use(express.static('public'));

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log('Incoming request');
    next();
})

app.use('/videos', videosRoute)

app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});