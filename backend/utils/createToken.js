import jwt from "jsonwebtoken";

const createToken = async (res, id) => {
  try {
    const token = jwt.sign({ id }, process.env.JWT, { expiresIn: "30d" });
    res.cookie("jwt", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    return token;
  } catch (error) {
    res.json({
      message: "token not created",
    });
  }
};


export default createToken;;