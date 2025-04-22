const express = require("express")
const dotrnv = require('dotenv')
const app = express()
const port = process.env.PORT || 3001
app.listen(port,()=>{
    console.log('server is run',PORT)
})