import mongoose from 'mongoose';


const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    },
    totalEnrolled: {
        type: Number,
        default: 0
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    isPublic: {
        type: Boolean,
        default: false
    },

    videos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Video'
        }
    ],
},
    { timestamps: true }
)

export const Playlist = mongoose.model('Playlist', playlistSchema);