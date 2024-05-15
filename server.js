import express from 'express';
import 'dotenv/config'
import { connectDB } from './db/connect.js';
import cors from 'cors'
import { v2 as cloudinary } from 'cloudinary';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';


import userRouter from './routes/userRouter.js'
import playlistRouter from './routes/playlistRouter.js'
import videoRouter from './routes/videoRoute.js'

const server = express();
connectDB()


// middleware

server.use(express.json(
    {
        limit: '50mb',
        extended: true,
    }
))
server.use(
    cors({
        origin: process.env.FRONTEND_URL,
        exposedHeaders: ['X-Total-Count'],
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        credentials: true,
    })
);

server.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
}))
server.use(bodyParser.json({
    limit: '50mb',
}))

server.use(fileUpload({
    limits: {
        fileSize: 50 * 1024 * 1024
    }
}))



cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})







server.use('/api/user', userRouter);
server.use('/api/playlist', playlistRouter);
server.use('/api/video', videoRouter);






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

