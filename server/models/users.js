const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');
const p = path.join(rootDir, 'data', 'users.json')
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

class Users {

    static fetchUsers(cb) {
        fs.readFile(p, (err, data) => {
            if (!err) {
                cb(JSON.parse(data))
            }
        })
    }

    static updateUser(id, name, email, city) {
        fs.readFile(p, (err, data) => {
            if (!err) {
                users = JSON.parse(data);
            }
            const existingIndex = users.findIndex(user => user.id === Number(id));
            let existingUser = {
                id: Number(id),
                name: name,
                email: email,
                city: city,
            }
            users[existingIndex] = existingUser;
            let updated = users
            fs.writeFile(p, JSON.stringify(updated), err => {
                console.log(err);
            });
        })
    };

    static deleteUser(id) {
        fs.readFile(p, (err, data) => {
            if (!err) {
                users = JSON.parse(data);
            }
            const updatedUsers = users.filter(user => user.id !== Number(id));
            fs.writeFile(p, JSON.stringify(updatedUsers), err => {
                console.log(err);
            });
        })
    }
}

module.exports = Users