import { instance } from "../../configs"

export const getAllUsers = () => {
  return instance.get('/users')
}