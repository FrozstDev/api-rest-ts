import { Request, Response } from "express"
import { loginUser, registerNewUser } from '../services/auth'
import { handleHttp, handleHttpErrorResponse } from "../utils/error.handle"

const registerController = async (req: Request, res: Response) => {
  try {
    const { body } = req
    const responseRegister = await registerNewUser(body)

    if (responseRegister === 'USER_ALREADY_EXISTS') 
      return handleHttpErrorResponse(res, responseRegister, 400)

    res.status(201).send(responseRegister);
  } catch (error) {
    handleHttp(res, 'INTERNAL_SERVER_ERROR', error)
  }
}

const loginController = async ({ body }: Request, res: Response) => {
  const { email, password } = body
  const responseLogin = await loginUser({ email, password })

  if (responseLogin === 'INVALID_CREDENTIALS' || responseLogin === 'USER_NOT_FOUND') 
    return handleHttpErrorResponse(res, 'INVALID_CREDENTIALS', 403)

  res.status(200).send(responseLogin)
}

export {
  registerController,
  loginController
}