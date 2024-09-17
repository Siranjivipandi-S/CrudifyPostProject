const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../model/userModel.js");
const { GetToken, SetToken } = require("../utils/Generatetoken.js");
const RegisterUser = asyncHandler(async (req, res) => {
  const { Username, Email, Password } = req.body;
  if (!Username || !Email || !Password) {
    return res.status(401).json({ message: "Every Feilds are manditory" });
  }
  const checkuser = await User.findOne({ email: Email });
  if (checkuser) {
    return res
      .status(400)
      .json({ message: "Already User Email Exists Go for Login" });
  }
  try {
    const hashpassword = await bcrypt.hash(Password, 10);
    User.create({
      username: Username,
      email: Email,
      password: hashpassword,
    });
    res.status(201).json({
      message: "User Created",
      Email: Email,
      Username: Username,
      password: hashpassword,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

const LoginUser = asyncHandler(async (req, res) => {
  const { Email, Password } = req.body;

  // Check if email and password are provided
  if (!Email || !Password) {
    return res.status(401).json({ message: "All Fields are mandatory" });
  }

  // Find user by email
  const checkuser = await User.findOne({ email: Email });
  if (!checkuser) {
    return res.status(400).json({ message: "Email Not Found" });
  }

  try {
    // Check if the password matches
    const checkPass = await bcrypt.compare(Password, checkuser.password);
    if (!checkPass) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    // Generate token and set cookie
    const token = SetToken(checkuser);
    res.cookie("token", token, { httpOnly: true });

    // Send successful login response
    return res
      .status(200)
      .json({ message: "Logged In Successfully", User: checkuser });
  } catch (error) {
    // Handle server error
    return res.status(500).json({ error: "Server Error" });
  }
});

module.exports = { LoginUser, RegisterUser };
