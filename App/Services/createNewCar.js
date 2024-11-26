import { carmodel } from "../Schemas/CarSchema.js";

export const createNewCar = (req, res) => {
  const data = req.body;
  carmodel.create(data);
  res.status(201).send({
    isSucced: true,
    message: "New Car has been created successfully!",
  });
};
