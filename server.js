const express = require('express');

const app = express();

app.get('/api/attendance', (req, res) => {
  const students = [
    {FaceID: 1, picture: 'images/profile.jpg', firstname: 'Bill', lastname: 'Gates', present: true},
    {FaceID: 2, picture: 'images/profile.jpg', firstname: 'Bill', lastname: 'Gates', present: false},
    {FaceID: 3, picture: 'images/profile.jpg', firstname: 'Bill', lastname: 'Gates', present: true},
    {FaceID: 4, picture: 'images/profile.jpg', firstname: 'Bill', lastname: 'Gates', present: false}
  ];

  res.json(students);
});

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

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);