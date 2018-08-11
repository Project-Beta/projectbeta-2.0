const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(cookieParser())
app.use(session({
    secret: 'MuleILoveYou',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}))

//Setting up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Setting public directory
app.use(express.static(__dirname + '/public'));

//Setting view engine
app.set('view engine', 'pug');
app.set('views', __dirname + '/views/pages');

const home = require('./routes/index');
app.use('/', home);

//404
app.use((res, req, next) => {
    next(err);
});

//Error Handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.redirect('./#/404');
});

app.listen(process.env.PORT || 5000);