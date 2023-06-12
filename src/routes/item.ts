import { Request, Response, Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";
import { logMiddleware } from "../middleware/log";

const router = Router() // ? Encargada y manejador de las rutas [GET, POST, PUT, DELETE]

/**
 * http://localhost:3000/items [GET]
 */
router.get('/', getItems)

router.post('/', postItem)

router.get('/:id', logMiddleware, getItem)

router.put('/:id', updateItem)

router.delete('/:id', deleteItem)


export { router }