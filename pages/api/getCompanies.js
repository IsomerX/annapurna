// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mongoose = require("mongoose");
const Company = require("./model/Company");

const companyMaker = (name, slots, lat, lng, timing) => {
  mongoose
    .connect(
      "mongodb+srv://root:toor@cluster0.uv1pr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));
  const temp = new Company({
    name,
    uid:
      ((Math.floor(Math.random() * 100000) *
        Math.floor(Math.random() * 100000)) %
        10000) *
      Math.floor(Math.random() * 100000),
    slots,
    lat,
    lng,
    timing,
  });
  temp
    .save()
    .catch((err) => console.log(err));
};

export default function handler(req, response) {
  mongoose
    .connect(
      "mongodb+srv://root:toor@cluster0.uv1pr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));

  Company.find({}, (err, res) => {
    if (err) response.status(500).json({ status: "error" });
    response.status(200).json({ result: res });
  });
}
