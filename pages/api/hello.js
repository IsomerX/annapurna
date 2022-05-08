// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mongoose = require("mongoose");
const Company = require("./model/Company");

const nftMaker = () => {
  mongoose
    .connect(
      "mongodb+srv://root:toor@cluster0.uv1pr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));

  let temp;
  let temp2;
  Company.findOne({ uid: 509171811 }, (err, result) => {
    console.log(result);
    temp = result.slots;
    temp2 = result.uid;
  }).then(() => {
    if (temp > 1) {
      Company.updateOne({ uid: 509171811 }, { $set: { slots: temp - 1 } });
    } else {
      Company.deleteOne({ uid: 509171811 });
    }
  });
  return temp2;
};

export default function handler(req, res) {
  const id = nftMaker();
  res.status(200).json({ id });
}
