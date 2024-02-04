import express from 'express';
import { PORT, mongoDBURL } from "./config.js"
import mongoose from 'mongoose';
//import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Middleware
app.use(express.json());

// CORS handling
//app.use(cors());
// app.use(
//     cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }));

app.get('/', (req, res) => {
    return res.status(234).send('Hello World');
})

app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () =>{
            console.log(`App is listening to port: ${PORT}`);
        })
    }).catch((error) => {
        console.log(error);
    })