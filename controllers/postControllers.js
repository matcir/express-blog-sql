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

function destroy(req, res) {
  const id = parseInt(req.params.id);

  const sql = "DELETE FROM posts WHERE id = ?;";

  connection.query(sql, [id], (err, results) => {
    if (err)
      return res.status(500).json({
        error: true,
        message: err.message,
      });
    console.log(results);

    if (results.affectedRows === 0) {
      return res.status(404).json({
        error: "Not Found",
        message: "Post non trovato",
      });
    }
    res.sendStatus(204);
  });
}

function store(req, res) {
  console.log(req.body, "This is the req.body");
  const { name, image } = req.body;

  const sql = "INSERT INTO posts (name, image) VALUES (?, ?);";

  connection.query(sql, [title, content, image], (err, results) => {
    if (err)
      return res.status(500).json({
        error: true,
        message: err.message,
      });
    console.log(results);

    res.status(201).json({
      id: results.insertId,
    });
  });
}

function update(req, res) {
  const id = parseInt(req.params.id);

  const sql = "UPDATE posts SET name = ?, image = ? WHERE id = ?;";

  connection.query(sql, [name, image, id], (err, results) => {
    if (err)
      return res.status(500).json({
        error: true,
        message: err.message,
      });
    console.log(results);

    if (results.affectedRows === 0) {
      return res.status(404).json({
        error: true,
        message: "Not Found",
      });
    }
    res.json({ success: true, message: "Pizza updated successfully" });
  });
}

module.exports = {
  index,
  show,
  destroy,
  store,
  update,
};
