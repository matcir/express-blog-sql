const express = require("express");
const app = express();
const port = 3000;
const postRouter = require("./routers/postRouters");

app.use(express.json());
app.use(express.static("public"));
app.use("/api/posts", postRouter);

app.listen(port, () => {
  console.log("Il server è in ascolto sulla porta" + " " + port);
});
