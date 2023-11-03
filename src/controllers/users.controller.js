import User from "../dao/classes/user.dao.js";
import { customResponses } from "../utils/customResponses.js";

const usersService = new User();

export const loginUser = async (req, res) => {
  try {
    const user = req.body;
    let result = await usersService.loggedUser(user);
    customResponses.successResponse(res, result);
  } catch (error) {
    console.log(error);

    customResponses.errorClientResponse(res, error);
  }
};

export const registerUser = async (req, res) => {
  try {
    const user = req.body;
    let result = await usersService.registerUser(user);
    customResponses.successResponseUser(res, result);
  } catch (error) {
    console.log(error);
    customResponses.errorClientResponse(res, error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = req.body;
    let result = await usersService.saveUser(user.id, user);
    customResponses.successResponseUser(res, result);
  } catch (error) {
    console.log(error);
    customResponses.errorClientResponse(res, error);
  }
};

export const getUsers = async (req, res) => {
  try {
    let result = await usersService.getUsers();
    customResponses.successResponse(res, result);
  } catch (error) {
    console.log(error);

    customResponses.errorClientResponse(res, error);
  }
};

export const getUserById = async (req, res) => {
  try {
    const { uid } = req.params;
    let result = await usersService.getUserById(uid);
    customResponses.successResponse(res, result);
  } catch (error) {
    console.log(error);

    customResponses.errorClientResponse(res, error);
  }
};