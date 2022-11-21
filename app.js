const createError = require('http-errors');
const express = require('express');
const dotenv = require('dotenv')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')

const {notFoundHandler, errorHandler} = require('./middleware/errorHandeler')
const responseHtmlHandler = require('./middleware/responseHtmlHandler')


const loginRouter = require('./router/loginRouter');
const usersRouter = require('./router/usersRouter');
const inboxRouter = require('./router/inboxRouter');

const router = express.Router()

const app = express();

dotenv.config();

mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>{
  console.log("DB connected successfully")
})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(router)

app.use(cookieParser(process.env.COOKIE_SECRET));

app.use('/',responseHtmlHandler('login'), loginRouter);
app.use('/users',responseHtmlHandler('users'), usersRouter);
app.use('/inbox',responseHtmlHandler('inbox'), inboxRouter);

app.use(notFoundHandler)
app.use(errorHandler)

const port = process.env.PORT || 8000

app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})




module.exports = app;
