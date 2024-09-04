import jwt from "jsonwebtoken";
import User from "../model/User.js";
const authUser = async (req, res, next) => {
  try {
    let token = req.cookies.jwt;
    console.log(token)
    const decoded = jwt.verify(token, process.env.JWT);
    console.log(decoded)
    res.user = await User.findById(decoded.userId)
    next()
  } catch (error) {
    res.json({
        message : "not authrize not not token"
    })
  }
};

export {authUser}
