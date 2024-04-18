import Users from '../models/user.model'

export async function createUser(req, res) {
    try {
        const data = new Users(req.body)
        const userData = await Users.findOne({ email: req.body.email })
        if (userData) {
            res.send("Data has been already present")
        }
        else {
            try {
                const saveUser = await data.save();
                if (saveUser) {
                    console.log("Data saved")
                    res.status(201).send({ "message": "New user created", "body": saveUser })
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

export async function getAllUsers(req, res) {
    try {
        const getAllUsersData = await Users.find()
        console.log(getAllUsersData)
        res.status(200).send({ "body": getAllUsersData })
    }
    catch (error) {
        res.status(500).send({ "error": error.message })
    }
}

export async function getUserById(req, res) {
    try {
        const getUser = await Users.findById(req.params.id)
        console.log(getUser)
        if (getUser) {
            res.status(200).send({ "body": getUser })
        }
        else {
            res.status(404).send({ "message": "User Not Found" })
        }
    }
    catch (error) {
        res.status(500).send({ "error": error.message })
    }
}

export async function updateUserById(req, res) {
    try {
        const updateUser = await Users.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        if (!updateUser) {
            res.status(404).send({ "message": "No user found to update" })
        }
        else {
            res.status(201).send({"message":"User updated successfully","body": updateUser })
        }
    }
    catch (error) {
        res.status(500).send({ "error": error.message })
    }
}

export async function deleteUserById(req, res) {
    try {
        const deleteUser = await Users.findByIdAndDelete(req.params.id)
        if (!deleteUser) {
            res.status(404).send({ "message": "No user found to delete" })
        }
        else {
            res.status(200).send({ "message": "User deleted successfully" })
        }
    }
    catch (error) {
        res.status(500).send({ "error": error.message })
    }
}