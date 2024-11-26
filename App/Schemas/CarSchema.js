import { ServerApiVersion } from "mongodb";
import { model, Schema, version } from "mongoose";

const car_schema = new Schema(
  {
    model: String,
    marka: String,
    year: Number,
    engine: Number,
    price: Number,
  },
  {
    versionKey: false,
  }
);

export const carmodel = model("cars", car_schema);
