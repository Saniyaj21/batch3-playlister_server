import { Playlist } from "../models/playlistModel.js"
import { Video } from "../models/videoModel.js"

export const deleteVideo = async (req, res) => {

    try {
        const { videoid } = req.params

        const video = await Video.findById(videoid)

        if (!video) {
            return res.status(404).json({
                message: 'Video not found'
            })
        }

        await Video.findByIdAndDelete(videoid)

        const updatedPlaylist = await Playlist.findOneAndUpdate(
            { videos: videoid }, // Find playlist where videos array contains the videoId
            { $pull: { videos: videoid } }, // Pull (remove) the videoId from the videos array
            { new: true } // Return the modified playlist after update
        ).populate('videos');

        res.status(201).json({
            message: 'video deleted successfully',
            updatedPlaylist
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'video delete failed',
        })
    }
}
export const getAllvideosOfPlaylist = async (req, res) => {

    try {
        const { playlistid } = req.params

       const playlist = await Playlist.findById(playlistid)
       

        res.status(201).json({
            message: 'video deleted successfully',
            updatedPlaylist
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'video delete failed',
        })
    }
}
