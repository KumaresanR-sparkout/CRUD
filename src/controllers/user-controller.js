import Users from '../models/user.model'
import { sendSuccessResponse, sendErrorResponse } from '../response/responseHandler'
export const createUser = async (req, res) => {
    try {
        const data = new Users(req.body)
        const userData = await Users.findOne({ email: req.body.email })
        if (userData) {
            sendErrorResponse(res, 200, "User data is already present")
            return
        }
        const saveUser = await data.save();
        sendSuccessResponse(res, 201, "User Created Successfully", saveUser)
        return
    }
    catch (error) {
        sendErrorResponse(res, 500, error.message)
        return
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const getAllUsersData = await Users.find()
        if (getAllUsersData[0]) {
            sendSuccessResponse(res, 200, "Data fetched Successfully", getAllUsersData)
            return
        }
        sendErrorResponse(res, 404, "No users data found")
        return
    }
    catch (error) {
        sendErrorResponse(res, 500, error.message)
        return
    }
}

export const getUserById = async (req, res) => {
    try {
        const getUser = await Users.findById(req.params.id)
        if (getUser) {
            sendSuccessResponse(res, 200, "Data fetched Successfully By Id", getUser)
            return
        }
        sendErrorResponse(res, 404, "User not available")
        return
    }
    catch (error) {
        sendErrorResponse(res, 500, error.message)
        return
    }
}

export const updateUserById = async (req, res) => {
    try {
        const updateUser = await Users.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        if (!updateUser) {
            sendErrorResponse(res, 404, "No user found to update")
            return
        }
        sendSuccessResponse(res, 201, "Data updated Successfully", updateUser)
        return
    }
    catch (error) {
        sendErrorResponse(res, 500, error.message)
        return
    }
}

export const deleteUserById = async (req, res) => {
    try {
        const deleteUser = await Users.findByIdAndDelete(req.params.id)
        if (!deleteUser) {
            sendErrorResponse(res, 404, "No user to delete")
            return
        }
        sendSuccessResponse(res, 200, "Data deleted Successfully", deleteUser)
        return

    }
    catch (error) {
        sendErrorResponse(res, 500, error.message)
        return
    }
}