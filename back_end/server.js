let express = require('express');
let server = express();
const mongoose = require('mongoose');
const userSchema = require('./schema');
const Users = require('./schema');
const cors = require('cors');

//use property makes it so it executes a function on any end point with any method
server.use(cors());
server.use(express.json());

mongoose.connect('mongodb://localhost:27017/users',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

//const a = require('userSchema');

server.post('/register', async (req, res) => {

  const user = new userSchema({
        username: req.body.username, 
        password: req.body.password
    });
console.log(req.body);
  await user.save();
  res.json({
      message: 'success',
      code: 200
  })
});

server.post('/login', async (req, res) => {
  const query = await Users.find({
    username:req.body.username,
    password:req.body.password
  });
  if(query != null){
    res.json({
      message: 'successfully logged in',
      code: 201
    })
  }
})


server.listen(8000, () => {
    console.log("Server is on");
})