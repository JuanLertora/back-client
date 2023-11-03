import { Router } from "express";
import { getUserById, getUsers, updateUser, registerUser, loginUser } from "../controllers/users.controller.js";

export const router = Router()

//Obtengo todos los usuarios
router.get('/', getUsers)

//Obtengo usuario por ID
router.get('/:uid', getUserById)

// Registrar nuevo usuario
router.post('/register', registerUser)

// Logeo usuario
router.post('/', loginUser)

// Actualizo valores del usuario
router.post('/updateUser', updateUser)

// Logout pendiente
router.get('/logout', () => console.log('logout'))