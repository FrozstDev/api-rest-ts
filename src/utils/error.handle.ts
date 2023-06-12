import { Response } from "express";

// ? Manejador de errores
const handleHttp = (res: Response, error: string, errorDetail?: unknown) => {
  const status = 500
  const errorMessage = errorDetail || "Internal Server Error";
  res.status(status).send({
    name: error,
    description: errorMessage
  });
}

const handleHttpErrorResponse = (res: Response, message?: string, code?: number) => {
  const status = code || 500
  const errorMessage = message || "Internal Server Error"
  res.status(status).send({ error: errorMessage })
}

export { handleHttp, handleHttpErrorResponse }