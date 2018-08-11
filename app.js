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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views/pages');

const home = require('./routes/index');
app.use('/', home);

app.use((res, req, next) => {
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.redirect('./#/404');
});

app.listen(process.env.PORT || 5000);