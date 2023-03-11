const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(9000);

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "trademark-dev",
});

app.get("/getallmessages", (req, res) => {
  const getMessages = "select * from messages";
  db.query(getMessages, (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      console.error("err");
    }
  });
});

app.post("/sendMessage", (req, res) => {
  const { name, phone, email, message } = req.body;
  const q =
    "INSERT INTO messages(name, phone, email, message) VALUES (?,?,?,?)";
  db.query(q, [name, phone, email, message], (err, data) => {
    if (err) {
      console.log(err);
    }
  });
});
