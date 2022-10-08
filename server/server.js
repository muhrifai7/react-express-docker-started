const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 7000;

app.use(cors());
app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({
    name: "anjing ddsada2",
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
