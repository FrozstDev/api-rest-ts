import { NextFunction, Response } from "express"
import { verifyToken } from "../utils/jwt.handle"
import { RequestExt } from "../interfaces/requestExt.interface"
import { handleHttp, handleHttpErrorResponse } from "../utils/error.handle"

const checkSession = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const authorizationValue = req.headers.authorization
    if (!authorizationValue) return handleHttpErrorResponse(res, 'TOKEN DON\nt SEND', 401)

    const jwt = authorizationValue.split(' ').pop()
    const isUser = verifyToken(`${jwt}`) as { id: string }
    if (!isUser) handleHttpErrorResponse(res, 'INVALID_TOKEN', 401)

    req.user = isUser
    next()
  } catch (error) {
    handleHttp(res, 'INVALID_SESSION', error)
  }
}

export { checkSession }