const express = require("express")
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const port = process.env.PORT || 3001

app.get('/',(req,res)=>{
     res.send('hello')
})

mongoose.connect(`mongodb+srv://khanhptit04:${process.env.MONGO_DB}@cluster0.6iojvji.mongodb.net/`)
    .then(()=>{
        console.log('connect sc')
    })
    .catch((err)=>{
        console.log(err)
    })
app.listen(port,()=>{
    console.log('server is run',+port)
})