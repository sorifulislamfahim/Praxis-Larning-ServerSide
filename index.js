const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const courses = require('./data/courses.json');
const courseNews = require('./data/course-news.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('This Server Is Running')
  })

  app.get('/all-courses', (req, res) => {
    res.send(courses)
  })

  app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const coursesNews = courseNews.filter( courses => courses.category_id === id)
    res.send(coursesNews);
  })

  app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courseNews.find( course => course._id === id)
    res.send(selectedCourse);
  })

  app.get('/home', (req, res) => {
    res.send(courseNews)
  })


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })