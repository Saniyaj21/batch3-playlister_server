import express from 'express';
import 'dotenv/config'
import { connectDB } from './db/connect.js';

const server = express();
connectDB()

import userRouter from './routes/userRouter.js'

// middleware
server.use(express.json());




server.use('/api/user', userRouter);






server.get('/', (req, res) => {
    res.send('Server is healthy');
});





server.listen(8080, () => {
    console.log('Server listening on port 8080');
});

// localhost:8080/
// localhost:8080/user/
// localhost:8080/user/login
// localhost:8080/user/register

// npm i express
// npm i -g nodemon
// npm i mongoose

