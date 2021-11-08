const express = require('express');
const user = require('../models/user');
const router = express.Router()
const User = require('../models/user')

router.get('/', (req, res) => {
    res.send("hello from api.js")
})



router.post('/register', async (req, res) => {
    let userData = req.body;
    try {
        let newUser = new User({...userData})
        await newUser.save()
        res.send(newUser)
    }
    catch (err) {
        console.log(err)
    }
})


router.post("/login",(req,res)=> {
    let userData = req.body;
    user.findOne({email:userData.email} , (error,user)=>{
        if(error){
            console.log(error)
        }
        else{
            if(!user){
                res.status(401).send("invalid email")
            }else
            if(user.password !== userData.password){
                res.status(401).send("invalid password")
            }else{
                res.status(200).send(user)
            }
        }
    })
})





module.exports = router