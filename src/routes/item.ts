import { Request, Response, Router } from "express";

const router = Router() // ? Encargada y manejador de las rutas [GET, POST, PUT, DELETE]

/**
 * http://localhost:3000/items [GET]
 */
router.get('/', (req: Request, res: Response) => {
  res.send({ data: 'Aqui van los modelos' })
})

export { router }