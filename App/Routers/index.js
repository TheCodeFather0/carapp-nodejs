import { Router } from "express";
import getAllCars from "../Services/getAllCars.js";
import { createNewCar } from "../Services/createNewCar.js";
import { getCarById } from "../Services/getCarById.js";
import { deleteCar } from "../Services/deleteCar.js";

export const approutes = new Router();

approutes.get("/", (req, res) => {
  res.status(200).send({
    message: "Welcome Car App",
  });
});

// get
approutes.get("/cars", getAllCars);
approutes.get("/cars/:id", getCarById);

// post
approutes.post("/createcar", createNewCar);

//delete
approutes.delete("/cars/:id", deleteCar);
