const Users = require('../models/users')

exports.getUserDetails = (req, res, next) => {
    console.log('what');
    console.log(req.params.id);
    res.redirect(`http://localhost:3000/api/userDetails/${Number(req.params.id)}`)
    res.json({ message: 'heytyooo' })
}

exports.getApiHome = (req, res) => {
    res.json({ message: "Hello World!", people: ["harry", "jack", "john"] });
}

exports.getApiUsers = (req, res) => {
    const usrs = Users.fetchUsers((data) => {
        res.json(data)
    })
};

exports.postDeleteUser = (req, res) => {
    const id = req.params.id;
    console.log('idsss', id);
    Users.deleteUser(id)
    res.redirect('http://localhost:3000/')
}

exports.postUpdateUser = (req, res) => {
    console.log('aqanea smnd');
    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;
    const city = req.body.city;
    Users.updateUser(id, name, email, city)
    res.redirect('http://localhost:3000/')
}