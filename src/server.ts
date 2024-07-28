import express from 'express';
import userRouter from './routes/userRouters';
const port = process.env.PORT || 3002;
import './db/db';
import dotenv from "dotenv";

dotenv.config();

const app = express()

app.use(express.json())
app.use('/api/users', userRouter)

app.listen(port, () => {
    console.log('Server is running on port:', port)
})