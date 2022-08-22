import { User } from "../services/sequelize";

export const createUserDB = async (name, email, password) => {
  let user = await User.Create({name,email,password})
  console.log("Usuario creado:",user)
  return user
};
export const getAllUsersDB = async() => {
  let users = await User.findAll()
  console.log(users)
  return users
}