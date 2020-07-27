import express, { response } from 'express'

const app = express();

app.use(express.json())

const users = ['Rodolfo', 'Michele', 'Alana', 'Ellen']

app.get('/users', function (req, res) {
  const search = String(req.query.search)
  const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
 return res.json(filteredUsers)
});

app.get('/users/:id', (req, res)=>{
  return res.json(users[parseInt(req.params.id)])
})

app.post('/users', (req, res) => {
  const data = req.body;

  const newUser = {
    nome: data.name,
    email: data.email
  }
  return res.json(newUser)
})

app.listen(3333)