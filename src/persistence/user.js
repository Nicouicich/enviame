import { User } from "../services/sequelize";

export const createUserDB = async (name, email, password) => {
  let user = await User.Create({name,email,password})
  console.log("Usuario creado:",user.dataValues)
  return user.dataValues
};
export const getAllUsersDB = async() => {
  let users = await User.findAll()
  return users
}