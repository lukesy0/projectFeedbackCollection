const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');//just excute the passport file

// mongoose.connect('mongodb+srv://lukesy0:x3T4hik7HJ8Z5qTZ@cluster0.7jbxvk4.mongodb.net/?retryWrites=true&w=majority');

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.listen(5853);

//x3T4hik7HJ8Z5qTZ
//mongodb+srv://lukesy0:<password>@cluster0.7jbxvk4.mongodb.net/?retryWrites=true&w=majority