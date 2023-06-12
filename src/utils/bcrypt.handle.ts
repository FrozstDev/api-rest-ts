import { hash, compare } from "bcryptjs";

/**
 * Encrypts the password
 * @param planePassword 
 * @returns string
 */
const encrypt = async (planePassword: string) => {
  const passwordHash = await hash(planePassword, 8);
  return passwordHash
}

/**
 * Compare the password with the encrypted password
 * @param plainPassword 
 * @param passwordHash 
 * @returns boolean
 */
const verify = async (plainPassword: string, passwordHash: string) => {
  const isCorrect = await compare(plainPassword, passwordHash)
  return isCorrect
}

export { encrypt, verify }