import { Router } from "express";
import { getFile } from "../controllers/upload";
import multerMiddleware from "../middleware/file";
import { checkSession } from "../middleware/session";

const router = Router()

// * Esta ruta va pasar por 2 middlewares
// ? Uno verifica que el usuario que esta intentando consumir el endpoint tenga una sesion valida
// ? El segundo obtendra el archivo
router.post('/', checkSession, multerMiddleware.single('myFile'), getFile)

export { router }