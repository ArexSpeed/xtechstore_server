import mongoose from "mongoose";

const watchSchema = mongoose.Schema({
  series: {
    type: String,
  },
  model: {
    type: String,
  },
  description: {
    type: String,
  },
  img: {
    type: String,
  },
  cpu: {
    type: String,
  },
  ram: {
    type: String,
  },
  storage: {
    type: String,
  },
  size: {
    type: String,
  },
  battery: {
    type: String,
  },
  fitness: {
    type: String,
  },
  addons:{
    gps: {
      type: Boolean,
    },
    healthcare: {
      type: Boolean,
    },
    esim: {
      type: Boolean,
    },
    wifi: {
      type: Boolean,
    },
    waterproof: {
      type: Boolean,
    }
  },
  price: {
    type: String,
  },
});

const Watch = mongoose.model("Watch", watchSchema);

export default Watch;
