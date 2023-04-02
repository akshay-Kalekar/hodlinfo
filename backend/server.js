import express from 'express';
import connectDB from './DB/connect.js';
import cryptoData from './routes/cryptoRoute.js';
import cors from 'cors'


const app = express();
app.use(cors());
app.use(express.json());

app.use('/v2',cryptoData)

app.use('/',(req,res)=>{
    res.send('hello')
})


//Constants
const port = 3001;
const URI = `mongodb+srv://aksh:aksh123@nodeexpressproject.hhaxhly.mongodb.net/?retryWrites=true&w=majority`


const start = async ()=>{  
    try {
        await connectDB(URI)
        app.listen(port,()=>{
            console.log(port,"port running on")
        })
    } catch (error) {
        console.log(error)
    }
}

start()