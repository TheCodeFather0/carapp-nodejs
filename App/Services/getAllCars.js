import { carmodel } from "../Schemas/CarSchema.js";
const getAllCars = (req, res) => {
  carmodel.find().then((cars) => {
    res.status(200).send(cars);
  });
};

export default getAllCars;
