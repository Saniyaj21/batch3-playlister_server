import mongoose from 'mongoose';

// - link, title, desc, playlistRef

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    playlistRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Playlist'
    },

   
},
    { timestamps: true }
)

export const Video = mongoose.model('Video', videoSchema);