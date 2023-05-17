// 1 bibliotheque qui a plein de petites methodes pour se relier à mongodb facilement
const mongoose = require("mongoose");

// 2 on se connecet à la db,
// ce sera en async comme on va chercher une info et revenir donc on utiliser try et catch
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false); // c dans la doc ils disent de le mettre
    mongoose.connect(process.env.MONGO_URI, () =>
      console.log("Mongo est connecté")
    );
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

module.exports = connectDB;
