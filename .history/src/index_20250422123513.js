const express = require("express")
const dotrnv = require('dotenv')
dotenv.config()
const app = express()
const port = process.env.PORT || 3001

app.get('/',(req,res)=>{
    return res.render('hello')
})
app.listen(port,()=>{
    console.log('server is run',+port)
})