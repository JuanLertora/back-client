import mongoose from "mongoose";

const collection = "Users";
const schema = new mongoose.Schema({
    username: {
        type: String,
        unique: true, // Asegura que no puede haber dos usuarios con el mismo nombre de usuario
        required: true, // Requerido, es decir, este campo debe estar presente
      },
      email: {
        type: String,
        unique: true, // Asegura que no puede haber dos usuarios con el mismo correo electrónico
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now, // Establece la fecha de creación automáticamente
      },
});

const usersModel = mongoose.model(collection, schema);
export default usersModel;
