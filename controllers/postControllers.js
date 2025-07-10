const connection = require("../db/connection");

function index(req, res) {
  const sql = "SELECT * FROM posts";

  connection.query(sql, (err, results) => {
    if (err)
      return res.status(500).json({
        error: true,
        message: err.message,
      });
    console.log(results);
    res.json(results);
  });
}

function show(req, res) {
  const id = parseInt(req.params.id);
  const sql = "SELECT * FROM posts WHERE id = ? ;";
  console.log(sql);

  connection.query(sql, [id], (err, results) => {
    if (err)
      return res.status(500).json({
        error: true,
        message: err.message,
      });

    console.log(results);

    if (!results.length > 0) {
      res.status(404).json({
        error: "Not Found",
        message: "post not found",
      });
    }
    return res.json(results[0]);
  });
}

module.exports = {
  index,
  show,
};
