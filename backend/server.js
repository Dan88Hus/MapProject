const express = require("express");
// const citiesRoutes = require("./routes/citiesRoutes");
const connectDB = require("./config/db");
const PORT = 8000 || 5000;
const morgan = require("morgan")
const cors = require("cors")
// for automatically run routes
const fs = require("fs")
const app = express();

connectDB();

app.use(morgan("dev"))
app.use(express.json());
app.use(cors())

// routes middleware
fs.readdirSync("./routes").map((r)=> app.use("/api",require(`./routes/${r}`)))

app.get("/api/test", (req, res) => {
  res.json({ message: "API running..." });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));