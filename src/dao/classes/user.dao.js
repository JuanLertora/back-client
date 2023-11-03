import usersModel from "../models/user.model.js";

export default class User {
  /* Verifico si existe el usuario */
  loggedUser = async (body) => {
    try {
      const { username, password } = body;
      const user = await usersModel.find({
        username: username,
        password: password,
      });
      return user;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  /* Obtengo todos los usuarios */
  registerUser = async (user) => {
    try {
      const result = await usersModel.create(user);
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  /* Actualizo el usuario */
  updateUser = async (id, user) => {
    try {
      const result = await usersModel.updateOne({ _id: id }, { $set: user });
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
}

/* Obtengo el usuario por id */
getUserById = async (id) => {
  try {
    const user = await usersModel.findOne({ _id: id });
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/* Obtengo el usuario por id */
getUserById = async (id) => {
  try {
    const user = await usersModel.findOne({ _id: id });
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};
