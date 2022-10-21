const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require('cors');
// const user = Math.floor(Math.random(58 - 58961)*58961)-58961

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use(cors())

app.get("/", (req, res) => {
  res.send("Server Online");
});

app.set("port", process.env.PUERTO || 5000);

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});

app.use("/api/users", require("./routes/usuario"));
app.use("/api/products", require("./routes/producto"));
app.use("/api/auth", require("./routes/auth"));
