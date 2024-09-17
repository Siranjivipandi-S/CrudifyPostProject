const router = require("express").Router();
const {
  Fetchpost,
  AddnewPost,
  UpdatePost,
  SinglePost,
  DeletePost,
} = require("../controller/PostController.js");
// const { checkAuth } = require("../middlewares/CheckAuth.js");
const { LoginUser, RegisterUser } = require("../controller/Usercontroller.js");
router.get("/post", Fetchpost);
router.post("/signin", LoginUser);
router.post("/signup", RegisterUser);
router.get("/post/:id", SinglePost);
router.post("/newpost", AddnewPost);
router.put("/updatepost/:id", UpdatePost);
router.delete("/deletepost/:id", DeletePost);
module.exports = router;
