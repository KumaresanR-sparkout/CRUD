import express from 'express'
import { createUser, getAllUsers, getUserById, updateUserById, deleteUserById } from '../controllers/user-controller'

const router = express.Router()
router.use(express.json())

router.post('/', createUser)
router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.put('/:id', updateUserById)
router.delete('/:id', deleteUserById)

export default router