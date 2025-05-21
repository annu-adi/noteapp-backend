import express from 'express'
import cors from 'cors'
import connectToMongoDB from './db/db.js'

import authRouter from './routes/auth.js'
import noteRouter from './routes/note.js'

const app = express()
app.use(cors({
    origin: ["Allow CORS:Access-Control-Allow-Origin"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}));
app.get('/',(req, res)=>{
res.json("Hello ji")
})

app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/note', noteRouter)

app.listen(5000, () =>{
    connectToMongoDB()
    console.log("Server is running")
})
