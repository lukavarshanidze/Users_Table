const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 5000;
const userRoutes = require('./routes/users')

const corsOptions = {
    origin: 'http://localhost:3000',
  };
app.use(cors(corsOptions))
app.use(express.urlencoded({extended: false}))

app.use(userRoutes)

app.listen(8080)