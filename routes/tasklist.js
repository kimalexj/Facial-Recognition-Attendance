var DocumentDBClient = require('documentdb').DocumentClient;
var async = require('async');

function TaskList(taskDao) {
  this.taskDao = taskDao;
}

module.exports = TaskList;
TaskList.prototype = {
    showTasks: function (req, res) {
        var self = this;

        var querySpec = {
            query: 'SELECT * FROM root r'
        };

        self.taskDao.find(querySpec, function (err, items) {
            if (err) {
                console.log("That's an error boy", err.body);
                throw (err);
            }

            console.log("That's not an error, boy", items);

            res.send(items);
        });
    },

    addTask: function (req, res) {
        var self = this;
        var item = req.body;
        console.log("Adding", item);

        self.taskDao.addItem(item, function (err) {
            if (err) {
                console.log(err.body);
                throw (err);
            }

            res.redirect('/');
        });
    },

    completeTask: function (req, res) {
        var self = this;
        var completedTasks = Object.keys(req.body);

        async.forEach(completedTasks, function taskIterator(completedTask, callback) {
            self.taskDao.updateItem(completedTask, function (err) {
                if (err) {
                    callback(err);
                } else {
                    callback(null);
                }
            });
        }, function goHome(err) {
            if (err) {
                throw err;
            } else {
                res.redirect('/');
            }
        });
    }
};