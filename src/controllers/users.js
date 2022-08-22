import { createUserDB,getAllUsersDB } from "../persistence/user";

export const getAllUsers = async (req, res) => {
  let users = getAllUsersDB()
  res.status(200).json({
    data: "users:", users
  })
};

export const getUserById = async (req, res) => {};

export const createUser = async (req, res) => {
  const {name, email, password} = req.body
  if (name && email && password){
    let user = createUserDB(name,email,password)
    res.status(200).json({
      data: user
    })
  }
};

export const updateUser = async (req, res) => {};

export const deleteUser = async (req, res) => {};

