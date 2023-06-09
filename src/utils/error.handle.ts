import { Response } from "express";

// ? Manejador de errores
const handleHttp = (res: Response, error: string, errorRaw?: any, code: number = 500) => {
  console.error(errorRaw)
  res.status(code)
  res.send({ error })
}

export { handleHttp }