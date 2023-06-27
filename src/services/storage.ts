import { Storage } from "../interfaces/storage.interface"
import StorageModel from "../models/storage"

export const registerUpload = async ({ fileName, idUser, path }: Storage) => {
  const responseItem = await StorageModel.create({ fileName, idUser, path })
  return responseItem
}
