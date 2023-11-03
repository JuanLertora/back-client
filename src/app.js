import express from "express";
import mongoose from "mongoose";
import { router as usersRouter } from "./routes/users.router.js";

const PORT = process.env.PORT || 3002;
const url = `mongodb://127.0.0.1:27017/nativeApp`;
const app = express();
// Crea un servidor HTTP, WebSocket y la conexion a la MongoDb

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/login", usersRouter);



// Inicia el servidor HTTP
const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    mongoose.connect(url)
    .then(console.log('DB Conectada'))
    .catch(error=>console.log(error)) 
  });
  
