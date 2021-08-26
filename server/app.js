const express = require("express");
const app = express();
const port = 8080;
const knex = require("knex")(require("./knexfile")["development"]);
const fetch = require("node-fetch");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/books", function (req, res) {
  knex
    .select("*")
    .from("books")
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message: "books not found",
      })
    );
});

app.get("/books/:bookId", (req, res) => {
  //console.log("get req:", req.body);
  knex
    .select("*")
    .from("books")
    .where("id", req.params.bookId)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(404).json({
        message: "book not found",
      })
    );
});

app.put("/books/:bookId/checkout/:userId", (req, res) => {
  fetch(`http://localhost:8080/books/${req.params.bookId}`)
    .then((data) => data.json())

    .then((result) => {
      if (result[0].checked_out === 0) {
        let myDate = new Date();
        let month = myDate.getMonth() + 2;
        let day = myDate.getDate();
        knex("books")
          .where("id", req.params.bookId)
          .where("checked_out", 0)
          .update({
            checked_out: req.params.userId,
            due_date: `${month}/${day}`,
          })
          .then((data) => {
            res.status(200).json(data);
          });
      } else {
        res.status(200).send({ message: "checked out" });
      }
    })
    .catch((err) => {
      message: "not found";
    });
});

app.put("/books/:bookId/return", (req, res) => {
  knex("books")
    .where("id", req.params.bookId)
    .update({
      checked_out: 0,
      due_date: null,
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      message: "book id not found";
    });
});

app.listen(port, (req, res) => {
  console.log(`listening at port ${port}...`);
});
