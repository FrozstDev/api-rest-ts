import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface"
import UserModel from "../models/user"
import { encrypt, verify } from "../utils/bcrypt.handle"
import { generateToken } from "../utils/jwt.handle"

const findUser = async (email: string) => {
  const user = await UserModel.findOne({ email })
  return user
}

const registerNewUser = async ({ email, password, name }: User) => {
  const checkIs = await findUser(email)
  if (checkIs) return 'USER_ALREADY_EXISTS'

  const passwordHash = await encrypt(password)
  const registerNewUser = await UserModel.create({
    email,
    password: passwordHash,
    name
  })
  return registerNewUser
}

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await findUser(email)
  if (!checkIs) return 'USER_NOT_FOUND'

  const passwordHash = checkIs.password
  const isCorrect = await verify(password, passwordHash)
  if (!isCorrect) return 'INVALID_CREDENTIALS'

  const token = generateToken(checkIs.email)

  const data = {
    token,
    user: checkIs
  }
  return data
}

export { registerNewUser, loginUser }