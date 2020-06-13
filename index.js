const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose
  .connect('mongodb+srv://lijiaqi0412:baobao2528831@react-blog.1dm6r.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(() => console.log('DB connected'))
  .catch(err => console.error(err))



app.get('/', (req, res) => {
  res.send('Hello World')
})



app.listen(5000);