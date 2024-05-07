import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
    },
    savedPlaylist: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Playlist'
        }
    ],
},
    { timestamps: true }
)

export const User = mongoose.model('User', userSchema);