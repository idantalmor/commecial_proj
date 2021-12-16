const express = require("express");
const router = express.Router();
const Commercial = require("../models/commercial");
//setting the 4 crud operations for commercial(get,post,update,delete)
//get
//We would get all thr commercial in our database and would send them all as a response
router.get("", function (req, res, next) {
  Bot1.find({})
    .then(function (commercial) {
      res.send(commercial);
    })
    .catch(next);
});
//post for commercial only if admin
//We create a new commercial in the database and then return the created bot as a response
router.post("/:admin", function (req, res, next) {
  if (req.params.admin != "admin")
    res.send("only admin is allowed to post to the database");
  Commercial.create(req.body)
    .then(function (commercial) {
      res.send(commercial);
      res.status(200);
    })
    .catch(next);
});
