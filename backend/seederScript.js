const CitiesData = require("./data/cities.json");
const connectDB = require("./config/db");
const Cities = require("./models/Cities");

connectDB()

const importData = async () => {
  try {
    await Cities.deleteMany({});

    await Cities.insertMany(CitiesData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();
