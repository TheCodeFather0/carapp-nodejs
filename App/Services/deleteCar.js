import { carmodel } from "../Schemas/CarSchema.js";

export const deleteCar = (req, res) => {
  const id = req.params.id;
  carmodel
    .findByIdAndDelete(id)
    .then((carresponse) => {
      res.status(200).send({
        isSucced: true,
        message: "Car has been deleted successfully!",
      });
    })
    .catch((err) => {
      res.status(404).send({
        isSucced: false,
        message: "not found!",
      });
    });
};
