import { carmodel } from "../Schemas/CarSchema.js";

export const getCarById = (req, res) => {
  const id = req.params.id;
  carmodel
    .findById(id)
    .then((carresponse) => {
      if (carresponse) {
        res.status(200).send(carresponse);
      } else {
        res.status(404).send({
          message: "not found!",
        });
      }
    })
    .catch((err) => {
      res.status(404).send({
        message: "not found!",
      });
    });
};
