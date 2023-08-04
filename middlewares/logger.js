const jwt = require('jsonwebtoken');
const User = require('../Model/userModel');

exports.Logger = async (req, res, next) => {
  try {
    let token;
    if (!req.headers.authorization) {
      return res.status(400).json({
        success: false,
        error: "Зөвшөөрлийн  дутуу байна",
      });
    }
    token = req.headers.authorization.split(" ")[1];
    const object = await jwt.verify(token, process.env.JWT_SECRET);
    req.userId = object.id;
    req.userEmail = object.email
    req.userRole=object.role;
    console.log(req.userRole)
     

    // const foundUser = await User.findById(req.userId);

    // req.isAdmin = foundUser.role === "admin";
    // console.log(req.isAdmin);
    ;
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "Токеныг тайлахад алдаа гарлаа",
    });
  }
};
