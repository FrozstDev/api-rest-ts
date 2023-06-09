import { Car } from "../interfaces/car.interfae"
import ItemModel from "../models/item"

const insertCar = async (item: Car) => {
  const responseInsert = await ItemModel.create(item)
  return responseInsert
}

const getCars = async () => {
  const responseItems = await ItemModel.find({})
  return responseItems
}

const getCar = async (id: string) => {
  const responseItem = await ItemModel.findOne({ _id: id })
  return responseItem
}

const updateCar = async (id: string, data: Car) => {
  const responseUpdate = await ItemModel.findByIdAndUpdate(
    { _id: id },
    data,
    { new: true } // Return the updated item 
  )
  return responseUpdate
}

const deleteCar = async (id: string) => { 
  const responseItem = await ItemModel.deleteOne({ _id: id })
  return responseItem
}

export { insertCar, getCars, getCar, updateCar, deleteCar }