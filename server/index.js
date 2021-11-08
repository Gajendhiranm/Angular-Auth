const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config')
const app = express();
const cors = require('cors');
const PORT = 3000;
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(require("./routes/api"))


mongoose.connect(
   process.env.DB_CONNECTION, {
    "useUnifiedTopology":true,
    "useNewUrlParser":true,
  }).then(() => console.log("database is connected!!!!"))
  .catch(err => console.log(err))

app.listen(PORT,()=>{
    console.log("server listening at : ",PORT);
})
