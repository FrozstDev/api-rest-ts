import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkSession } from "../middleware/session";

const router = Router()

/**
 * Esta ruta solo pueden acceder las personas que tienen sesion activa!
 * que tenga  un JWT valido!
 */
router.get('/', checkSession ,getItems)

export { router }