const peopleModel = require("../models/People");
const getUsers = (req, res, next) => {
  res.render("users");
};

const createUser = async (req, res, next) => {
  try {
    const peopleInfo = await peopleModel.find();
    peopleInfo.map((data) => {
      if (data.email == req.body.email) {
        console.log("The user is already exist!");
        res.status(409).json({
          status: 409,
          message: "The user is already exist!",
        });
      }
    });
    await peopleModel.create(req.body);
    res.status(200).json({
      status: 200,
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
