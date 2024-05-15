import express from 'express';
import { isAuthenticate } from '../middlewares/authenticate.js';
import { addVideoToPlaylist, createPlaylist, deletePlaylist, enrollPlaylist, getAllPlaylists, getMyPlaylists, removeEnrollment, searchPlaylist, selectedPlaylistInfo } from '../controllers/playlistController.js';

const router = express.Router();

router.get('/', getAllPlaylists)
router.post('/create', isAuthenticate, createPlaylist)
router.delete('/delete/:playlistid', isAuthenticate, deletePlaylist)
router.get('/:playlistid', isAuthenticate, selectedPlaylistInfo)
router.post('/add-video', isAuthenticate, addVideoToPlaylist)
router.get('/my-playlists/:userid', isAuthenticate, getMyPlaylists)
router.get('/remove-enroll/:playlistid', isAuthenticate, removeEnrollment)
router.get('/enroll/:playlistid', isAuthenticate, enrollPlaylist)
router.get('/search/:keyword', searchPlaylist)

export default router;


