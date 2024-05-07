import express from 'express';
import { home } from './controllers/userController.js';
import 'dotenv/config'

const server = express();
connectDB()

// get, post, put, delete , patch
import userRouter from './routes/userRouter.js'
import { connectDB } from './db/connect.js';

server.get('/', home);
server.use('/user', userRouter);

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

