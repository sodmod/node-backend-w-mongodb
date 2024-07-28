import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

if (!process.env.MONGODB_URL) {
    throw new Error('MONGODB_URL is not defined in the environment variables.')
}
console.log('Connecting to MongoDB...')

mongoose.connect(process.env.MONGODB_URL)
    .then(()=> console.log("Mongo db connected"))
    .catch(err => console.error("Failed connect to mongo db"))