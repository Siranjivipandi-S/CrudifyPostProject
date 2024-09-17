const jwt = require("jsonwebtoken");
require("dotenv").config();

const SetToken = (user) => {
  if (user) {
    try {
      return jwt.sign(
        {
          _id: user._id,
        },
        process.env.JWT_SECRET
      );
    } catch (error) {
      return null;
    }
  }
};

const GetToken = (token) => {
  if (!token) {
    return null;
  }
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {}
};
module.exports = { GetToken, SetToken };
