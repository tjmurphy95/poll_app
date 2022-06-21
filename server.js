const express = require("express");
const app = express();
const port = 8383;

app.use(express.static("public"));

//routes HTTP verbs
app.post("/", (req, res) => {
  res.status(200).send("Hi");
});

//Common routes
//GET POST PUT DELETE

app.listen(port, () => console.log(`server has started on port: ${port}`));
