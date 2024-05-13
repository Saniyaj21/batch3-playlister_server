import { User } from "../models/userModel.js"
import jwt from 'jsonwebtoken'

export const getUserProfile = async (req, res) => {

    try {

        res.json({
            message: 'User register',
            user: req.user
        })
    } catch (error) {

        res.status(500).json({
            message: 'Registration error',
        })
    }
}

export const googleSignup = async (req, res) => {

    try {


        const { name, email, profilePic } = req.body
        console.log(name, email, profilePic);

        // finding user
        let user = await User.findOne({ email })

        if (user) {
            const token = jwt.sign({
                _id: user._id,
            }, process.env.JWT_SECRET)

            user.token = token

            user.save()

            res.json({
                message: 'User login successful',
                user,
                token
            })
        } else {
            let user = await User.create({
                name,
                email,
                profilePic
            })

            const token = jwt.sign({
                _id: user._id,
            }, process.env.JWT_SECRET)

            user.token = token
            user.save()

            res.json({
                message: 'User register successful',
                user,
                token
            })
        }



    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Registration error',
        })
    }
}

export const logout = async (req, res) => {

    try {
        let user = await User.findById(req.user._id)
        user.token = ''
        user.save()
        res.json({
            message: 'User logout successful',
            success: true,
            token: null
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'logout error',
        })
    }
}