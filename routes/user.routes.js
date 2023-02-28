const express = require("express");
const { UserModel } = require("../models/user.model");

const userRouter = express.Router();

userRouter.post("/create", async (req, res) => {
  const note = await new UserModel(req.body);
  note.save((err, success) => {
    if (err) {
      return res.status(500).send({ message: "something went wrong" });
    }
    return res.status(201).send(success);
  });
});

userRouter.get("/get", async (req, res) => {
  const limit = req.params.limit || 4;
  const page = req.query.page || 1;
  const item = await UserModel.find()
    .skip(limit * (page - 1))
    .limit(limit);
  res.send(item);
});

userRouter.get("/search", async (req, res) => {
  const limit = req.params.limit || 4;
  const page = req.query.page || 1;
  const name = req.query.name;

  const item = await UserModel.find({ name: new RegExp("^" + name + "$", "i") })
    .skip(limit * (page - 1))
    .limit(limit);
  res.send(item);
});

userRouter.get("/get/category", async (req, res) => {
  const limit = req.params.limit || 4;
  const page = req.query.page || 1;
  const filter = req.query.filter;
  const item = await UserModel.find({ category: filter })
    .skip(limit * (page - 1))
    .limit(limit);
  res.send(item);
});

userRouter.get("/date/asc", async (req, res) => {
  const limit = req.params.limit || 4;
  const page = req.query.page || 1;
  const order = req.query.order == "asc" ? 1 : -1;
  const item = await UserModel.find()
    .sort({ date: order })
    .skip(limit * (page - 1))
    .limit(limit);
  res.send(item);
});

module.exports = {
  userRouter,
};
