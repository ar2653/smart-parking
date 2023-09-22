const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;
const bodyParser = require('body-parser');

// route imports
const parkingRouter = require('./routes/parking');
const profileRouter = require('./routes/profile');


// Allow cross origin requests from frontend application
app.use(cors());

app.use((req, res, next) => {
    const now = new Date();
    console.log(`${now.toISOString()} - ${req.method} ${req.path}`);
    next();
});

// Check if the server is up and running
app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use('/parking', parkingRouter);
app.use('/profile', profileRouter);

/**
 * Always place the 404 handler at the bottom of all the middlewares
 */
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})

// start the server and listen at specified port number
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
