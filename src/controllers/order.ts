import { Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { RequestExt } from "../interfaces/requestExt.interface"

const getItems = async (req: RequestExt, res: Response) => {
  try {
    res.status(200).send({
      data: 'This message only can be reading for people have the real TOKEN',
      user: req.user
    })
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEMS', error);
  }
}

export { getItems }

