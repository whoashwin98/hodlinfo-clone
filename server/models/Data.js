import mongoose from "mongoose";

const dataSchema = mongoose.Schema({
  name: String,
  last: String,
  buy: String,
  sell: String,
  volume: String,
  base_unit: String,
});

const Data = mongoose.model("data", dataSchema);
export default Data;
