import express from 'express';
import { isAuthenticate } from '../middlewares/authenticate.js';
import { deleteVideo, getAllvideosOfPlaylist } from '../controllers/videoController.js';

const router = express.Router();

router.delete('/delete/:videoid', isAuthenticate, deleteVideo)
router.delete('/getAllVideos/:playlistid', isAuthenticate, getAllvideosOfPlaylist)

export default router;


