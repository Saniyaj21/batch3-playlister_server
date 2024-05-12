import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
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
    token: String
},
    { timestamps: true }
)

export const User = mongoose.model('User', userSchema);