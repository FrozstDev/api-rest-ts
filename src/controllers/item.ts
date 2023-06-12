import { Request, Response } from "express"
import { handleHttp, handleHttpErrorResponse } from "../utils/error.handle"
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item"

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params
    const response = await getCar(id)
    const dataResponse = response ? response : 'NOT_FOUND'

    if (dataResponse === 'NOT_FOUND')
      return handleHttpErrorResponse(res, dataResponse, 404)

    res.status(200).send(dataResponse)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEM', error)
  }
}

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars()
    res.send(response)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEMS', error)
  }
}

const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params
    const response = await updateCar(id, body)
    const dataResponse = response ? response : 'NOT_FOUND'

    if (dataResponse === 'NOT_FOUND')
      return handleHttpErrorResponse(res, dataResponse, 404)

    res.status(200).send(dataResponse)
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_ITEM', error)
  }
}

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertCar(body)
    res.status(201).send(responseItem)
  } catch (error) {
    handleHttp(res, 'ERROR_POST_ITEM', error)
  }
}

const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params
    const response = await deleteCar(id)
    res.status(200).send(response)
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_ITEM', error)
  }
}

export {
  getItem,
  getItems,
  updateItem,
  postItem,
  deleteItem,
}
