var DocumentDBClient = require('documentdb').DocumentClient;
var config = require('./config');
var TaskList = require('./routes/tasklist');
var TaskDao = require('./models/taskDao');

var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Todo App:
var docDbClient = new DocumentDBClient(config.host, {
    masterKey: config.authKey
});
var taskDao = new TaskDao(docDbClient, config.databaseId, config.collectionId);
var taskList = new TaskList(taskDao);
taskDao.init();

app.get('/api/attendance', taskList.showTasks.bind(taskList));

// app.get('/api/attendance', (req, res) => {
//   const students = [
//     {FaceID: 1, picture: 'images/profile.jpg', firstname: 'Bill', lastname: 'Gates', present: true},
//     {FaceID: 2, picture: 'images/profile.jpg', firstname: 'Bill', lastname: 'Gates', present: false},
//     {FaceID: 3, picture: 'images/profile.jpg', firstname: 'Bill', lastname: 'Gates', present: true},
//     {FaceID: 4, picture: 'images/profile.jpg', firstname: 'Bill', lastname: 'Gates', present: false}
//   ];

//   res.json(students);
// });

app.get('/api/entries', (req, res) => {
  const students = [
    {entryID: 1, date: '10-12-2019', classImg: 'images/profile.jpg', studentCount: 25},
    {entryID: 1, date: '10-11-2019', classImg: 'images/profile.jpg', studentCount: 23},
    {entryID: 1, date: '10-10-2019', classImg: 'images/profile.jpg', studentCount: 19},
    {entryID: 1, date: '10-9-2019', classImg: 'images/profile.jpg', studentCount: 18},
    {entryID: 1, date: '10-8-2019', classImg: 'images/profile.jpg', studentCount: 27},
    {entryID: 1, date: '10-7-2019', classImg: 'images/profile.jpg', studentCount: 16}
  ];

  res.json(students);
});

app.post('/addtask', taskList.addTask.bind(taskList));
// app.post('/completetask', taskList.completeTask.bind(taskList));
// app.set('view engine', 'jade');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);