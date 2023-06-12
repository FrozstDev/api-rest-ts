import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || 'token.0111011'

const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, { expiresIn: '1h' })
  return jwt
}

const verifyToken = (jwt: string) => {
  const isValidToken = verify(jwt, JWT_SECRET)
  return isValidToken
}

export { generateToken, verifyToken }