const { check, validationResult } = require("express-validator");
const fs = require("fs");

const userValidation = [
  check("email")
    .isEmail()
    .withMessage("Invalid Email Address")
    .normalizeEmail(),
  check("mobile").isMobilePhone("bn-BD"),
  check("password")
    .isLength({ min: 5 })
    .withMessage("must be at least 5 chars long"),
];

const addUserValidationHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (req.file) {
      fs.unlink(req.file.path, (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
    res.status(500).json({errors:errors.mapped()});
  } else {
    next();
  }
};

module.exports = {
  userValidation,
  addUserValidationHandler,
};
