import jwt from "jsonwebtoken";
import User from "../model/User.js";
const authUser = async (req, res, next) => {
  try {
    let token = req.cookies.jwt;
    const decoded = jwt.verify(token, process.env.JWT);
    console.log(decoded)
      req.user = await User.findById(decoded.id)
      next();
  } catch (error) {
    res.json({
        message : "not authrize not not token"
    })
  }
};
const authrizedAtAdmin = (req,res,next)=>{
  try {
    if(req.user && req.user.isAdmin){
      next()
    }
    else{
      res.status(404).json({
        message : "your not authrized at admin "
      })
    }
  } catch (error) {
    throw new error
  }
}

export {authUser ,authrizedAtAdmin}
