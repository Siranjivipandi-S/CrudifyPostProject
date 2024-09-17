const { GetToken } = require("../utils/Generatetoken");
const checkAuth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(400).json({ message: "No Token" });
  }
  try {
    const checktoken = GetToken(token);
    if (checktoken) {
      console.log("Token Verifed");
      req.user = checktoken;
      next();
    }
  } catch (error) {
    res.status(400).json({ message: "Token Expired or Invalid" });
  }
};
module.exports = { checkAuth };
