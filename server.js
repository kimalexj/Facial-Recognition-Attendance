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
    {entryID: 1, date: '10-9-2019', classImg: '', studentCount: 25},
    {entryID: 1, date: '10-7-2019', classImg: '', studentCount: 23},
    {entryID: 1, date: '10-4-2019', classImg: '', studentCount: 19},
  ];

  res.json(students);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);