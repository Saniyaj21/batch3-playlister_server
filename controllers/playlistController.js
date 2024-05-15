import { Playlist } from '../models/playlistModel.js'
import { Video } from '../models/videoModel.js'
import mongoose from 'mongoose'

export const createPlaylist = async (req, res) => {

    try {
        const { name, desc } = req.body;
        console.log(name, desc);

        // create playlist
        const playlist = await Playlist.create({
            name,
            desc,
            creator: req.user._id,
        })
        playlist.enrolled.push(req.user._id)
        playlist.totalEnrolled = playlist.enrolled.length
        playlist.save()

        res.status(201).json({
            message: 'playlist created successfully',
            playlist
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Registration error',
        })
    }
}


export const getAllPlaylists = async (req, res) => {

    try {
        const playlists = await Playlist.find()
        res.status(201).json({
            message: 'User register',
            playlists
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Registration error',
        })
    }
}

export const deletePlaylist = async (req, res) => {

    try {
        const { playlistid } = req.params

        const playlist = await Playlist.findByIdAndDelete(playlistid)
        const playlists = await Playlist.find()

        res.status(201).json({
            message: 'User register',
            playlist,
            playlists
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Registration error',
        })
    }
}
export const selectedPlaylistInfo = async (req, res) => {

    try {
        const { playlistid } = req.params

        const playlist = await Playlist.findById(playlistid).populate('videos')

        res.status(200).json({
            message: 'User register',
            playlist,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Registration error',
        })
    }
}


export const addVideoToPlaylist = async (req, res) => {

    try {


        const { title, link, desc, playlistRef } = req.body
        const playlist = await Playlist.findById(playlistRef).populate('videos')


        if (playlist.creator._id.toString() != req.user._id.toString()) {
            return res.status(401).json({
                message: 'Unauthorized'
            })
        }
        const video = await Video.create({
            title,
            link,
            desc,
            creator: req.user._id,
            playlistRef
        })

        playlist.videos.push(video._id)
        await playlist.save()

        console.log(playlist);



        res.status(200).json({
            message: 'User register',
            playlist,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Registration error',
        })
    }
}



export const getMyPlaylists = async (req, res) => {

    try {
        const { userid } = req.params
        // const userId = mongoose.Types.ObjectId(req.user._id);
        const myPlaylists = await Playlist.find({
            enrolled: userid
        });
        res.status(200).json({
            message: 'User playlists retrieved successfully',
            myPlaylists,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error retrieving user playlists',
        });
    }
}
