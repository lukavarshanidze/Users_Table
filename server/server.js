const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 5000;
const Users = require('./models/users')
let users = [
    { id: 1, name: "1John Doe", email: "john@example.com", city: "New York" },
    {
        id: 2,
        name: "2Jane Smith",
        email: "jansadjqnwdijqnwidqe@example.com",
        city: "Los Angeles",
    },
    {
        id: 3,
        name: "3Jane Smith",
        email: "jansadjqnwdijqnwidqe@example.com",
        city: "Los Angeles",
    },
    {
        id: 4,
        name: "4Jane Smith",
        email: "jansadjqnwdijqnwidqe@example.com",
        city: "Los Angeles",
    },
    {
        id: 5,
        name: "5Jane Smith",
        email: "jansadjqnwdijqnwidqe@example.com",
        city: "Los Angeles",
    },
    {
        id: 6,
        name: "6Jane Smith",
        email: "jansadjqnwdijqnwidqe@example.com",
        city: "Los Angeles",
    },
    {
        id: 7,
        name: "7Jane Smith",
        email: "jansadjqnwdijqnwidqe@example.com",
        city: "Los Angeles",
    },
    {
        id: 8,
        name: "8Jane Smith",
        email: "jansadjqnwdijqnwidqe@example.com",
        city: "Los Angeles",
    },
    {
        id: 9,
        name: "9Jane Smith",
        email: "jansadjqnwdijqnwidqe@example.com",
        city: "Los Angeles",
    },
    {
        id: 10,
        name: "10Jane Smith",
        email: "jansadjqnwdijqnwidqe@example.com",
        city: "Los Angeles",
    },
    {
        id: 11,
        name: "11Jane Smith",
        email: "jansadjqnwdijqnwidqe@example.com",
        city: "Los Angeles",
    },
    {
        id: 12,
        name: "12Jane Smith",
        email: "jansadjqnwdijqnwidqe@example.com",
        city: "Los Angeles",
    },
    {
        id: 13,
        name: "13Jane Smith",
        email: "jansadjqnwdijqnwidqe@example.com",
        city: "Los Angeles",
    },
    {
        id: 14,
        name: "14Jane Smith",
        email: "jansadjqnwdijqnwidqe@example.com",
        city: "Los Angeles",
    },
    {
        id: 15,
        name: "15Jane Smith",
        email: "jansadjqnwdijqnwidqe@example.com",
        city: "Los Angeles",
    },
    {
        id: 16,
        name: "16Jane Smith",
        email: "jansadjqnwdijqnwidqe@example.com",
        city: "Los Angeles",
    },
    {
        id: 17,
        name: "17Jane Smith",
        email: "jansadjqnwdijqnwidqe@example.com",
        city: "Los Angeles",
    },
    {
        id: 18,
        name: "18Jane Smith",
        email: "jansadjqnwdijqnwidqe@example.com",
        city: "Los Angeles",
    },
    {
        id: 19,
        name: "19Jane Smith",
        email: "jansadjqnwdijqnwidqe@example.com",
        city: "Los Angeles",
    },
    {
        id: 20,
        name: "20Jane Smith",
        email: "jansadjqnwdijqnwidqe@example.com",
        city: "Los Angeles",
    },
    {
        id: 21,
        name: "21Jane Smith",
        email: "jansadjqnwdijqnwidqe@example.com",
        city: "Los Angeles",
    },
    {
        id: 22,
        name: "22Jane Smith",
        email: "jansadjqnwdijqnwidqe@example.com",
        city: "Los Angeles",
    },
    {
        id: 23,
        name: "23Jane Smith",
        email: "jansadjqnwdijqnwidqe@example.com",
        city: "Los Angeles",
    },
];

const corsOptions = {
    origin: 'http://localhost:3000',
  };

app.use(cors(corsOptions))
app.use(express.urlencoded({extended: false}))

app.get('/api/userDetails/:id', (req, res, next) => {
    console.log('what');
    console.log(req.params.id);
    res.redirect(`http://localhost:3000/api/userDetails/${Number(req.params.id)}`)
    res.json({message: 'heytyooo'})
})

app.get('/api/home', (req, res) => {
    res.json({ message: "Hello World!", people: ["harry", "jack", "john"] });
});
app.get('/api/users', (req, res) => {
    const usrs = Users.fetchUsers((data) => {
        res.json(data)
    })
});

app.post('/api/delete/:id', (req, res) => {
    const id = req.params.id;
    console.log('idsss',id);
    Users.deleteUser(id)
    res.redirect('http://localhost:3000/')
})

app.post('/api/update/:id', (req, res) => {
    console.log('aqanea smnd');
    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;
    const city = req.body.city;
    Users.updateUser(id, name, email, city)
    res.redirect('http://localhost:3000/')
})



app.listen(8080)