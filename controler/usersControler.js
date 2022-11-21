const peopleModel = require("../models/People");
const getUsers = (req, res, next) => {
  res.render("users");
};

const createUser = async (req, res, next) => {
  try {
    await peopleModel.create(req.body);
    res.status(201).json({
      status: 201,
      message: "User is created successfully",
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getUsers,
  createUser,
};
