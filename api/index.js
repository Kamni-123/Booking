const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require("../api/models/user")
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const jwtSecret = "msndksdhadhsdkjnxmclCMCsidkd";
const cookieParser = require('cookie-parser')
// const salt = bcrypt.genSaltSync(saltRounds);

app.use(express.json());  
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin:"http://192.168.1.39:3000",
}));

app.get('/test', (req, res) => {
  res.json('hii its working!');

}); 
 
mongoose.connect("mongodb+srv://stayease:kamni@cluster0.wxopjcb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
app.post('/register', async (req, res) => {
  const {name, email, password} = req.body;
 try{
  const userdoc = await User.create({
    name,
    email,
    password: bcrypt.hashSync(password, saltRounds)
  })
  res.json(userdoc);
} catch(e){
  res.status(422).json(e);
}
});

app.post('/login', async (req, res) => {
  const {email, password} = req.body;
  const userdoc = await User.findOne({email}) 
  if (userdoc){
    const passok= await bcrypt.compare(password, userdoc.password);
    if (passok){
      jwt.sign({name: userdoc.name ,email: userdoc.email, id: userdoc._id}, jwtSecret, {}, (err, token)=>{
        if (err) throw err;
        res.cookie("token", token).json(userdoc);
      });
    }else{
      res.status(422).json("password incorrect");
    }
  }else {
    res.json("not found");
  }

});

app.get("/profile", (req, res) => {
  const token = req.cookies;
  if (token){
    jwt.verify(token , jwtSecret, {},(err, user)=>{
      if (err) throw err;
      res.json(user);

    })

  }else{
    res.json(null)
  }

    }
)

app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});