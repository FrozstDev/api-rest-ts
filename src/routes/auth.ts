import { Router } from "express";
import { registerController, loginController } from "../controllers/auth";

const router = Router() // ? Encargada y manejador de las rutas [GET, POST, PUT, DELETE]

/**
 * http://localhost:3000/auth/register [POST]
 */
router.post('/register', registerController)

/**
 * http://localhost:3000//authlogin [POST]
 */
router.post('/login', loginController)


export { router }