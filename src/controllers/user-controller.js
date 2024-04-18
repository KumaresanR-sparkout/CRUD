import Users from '../models/user.model'
import { sendSuccessResponse } from './success-response-controller'
import { sendErrorResponse } from './error-response-controller'
export const createUser = async (req, res) => {
    try {
        const data = new Users(req.body)
        const userData = await Users.findOne({ email: req.body.email })
        if (userData) {
            res.status(200).send(sendErrorResponse(200, "User data is already present"))
        }
        else {
            try {
                const saveUser = await data.save();
                if (saveUser) {
                    console.log("Data saved")
                    res.status(201).send(sendSuccessResponse(201, "User Created Successfully", saveUser))
                }
            }
            catch (error) {
                res.status(500).send({ "error": error.message })
            }
        }
    }
    catch (error) {
        res.status(500).send({ "error": error.message })
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const getAllUsersData = await Users.find()
        console.log(getAllUsersData)
        if (getAllUsersData[0]) {
            res.status(200).send(sendSuccessResponse(200, "Data fetched Successfully", getAllUsersData))
        }
        else {
            res.status(404).send(sendErrorResponse(404, "No users data found"))
        }

    }
    catch (error) {
        res.status(500).send({ "error": error.message })
    }
}

export const getUserById = async (req, res) => {
    try {
        const getUser = await Users.findById(req.params.id)
        console.log(getUser)
        if (getUser) {
            res.status(200).send(sendSuccessResponse(200, "Data fetched Successfully", getUser))
        }
        else {
            res.status(404).send(sendErrorResponse(404, "User not available"))
        }
    }
    catch (error) {
        res.status(500).send({ "error": error.message })
    }
}

export const updateUserById = async (req, res) => {
    try {
        const updateUser = await Users.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        if (!updateUser) {
            res.status(404).send(sendErrorResponse(404, "No user found to update"))
        }
        else {
            res.status(201).send(sendSuccessResponse(201, "Data updated Successfully", updateUser))
        }
    }
    catch (error) {
        res.status(500).send({ "error": error.message })
    }
}

export const deleteUserById = async (req, res) => {
    try {
        const deleteUser = await Users.findByIdAndDelete(req.params.id)
        if (!deleteUser) {
            res.status(404).send(sendErrorResponse(404, "No user to delete"))
        }
        else {
            res.status(200).send(sendSuccessResponse(200, "Data deleted Successfully", deleteUser))
        }
    }
    catch (error) {
        res.status(500).send({ "error": error.message })
    }
}