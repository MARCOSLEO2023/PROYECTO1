import express from "express";
const route = express.Router();
import mascotaController from "../controllers/mascotas.js";

//crear ruta de mascotas
route.post("/", mascotaController.create);
//consultar mascotas directa
route.get("/:id", mascotaController.getOne);
//consultar total de mascotas
route.get("/", mascotaController.getAll);
//actualizar mascotas
route.put("/:id", mascotaController.update);
//eliminar mascotas
route.delete("/", mascotaController.delete);

export default route;
