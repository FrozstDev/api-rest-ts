import { Request, Response } from "express"; 
import { RequestExt } from "../interfaces/requestExt.interface";
import { Storage } from "../interfaces/storage.interface";
import { handleHttp } from "../utils/error.handle";
import { registerUpload } from "../services/storage";

const getFile = async (req: RequestExt, res: Response) => {
  try {
    //res.send('AQUI DEBE LLEGAR EL FILE') // ? Primera linea al guradar el file

    const { user, file } = req
    const dataToRegister: Storage = {
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`,
    } 

    const response = await registerUpload(dataToRegister)
    res.status(201).send(response)
  } catch (error) {
    handleHttp(res, 'ERROR_UPLOAD_FILE', error)
  }
}

export { getFile }