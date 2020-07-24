import express from 'express'

const app = express();

app.get('/users', function(req, res){
  res.json([
    'Rodolfo',
    'Michele',
    'Alana',
    'Ellen'
  ])
})

app.listen(3333)