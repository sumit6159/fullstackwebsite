require("dotenv").config()
const jwt = require("jsonwebtoken")
const ErrorHandler = require("../utils/errorHandler")


const verifyToken = (token)=>{
    return new Promise((resolve, reject)=>{
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user)=>{
            if(err) return reject(err)
            resolve(user)
        })
    })
}

exports.authenticate = async (req, res, next) => {
    const cookieHeader = req.headers?.cookie;
    if (!cookieHeader) return res.status(200).send({message : "Cookie is missing."});
    let token = cookieHeader.split("=")[1];
    let user;
    try {
      user = await verifyToken(token);
    } catch (error) {
      return res.status(500).send({ message: "Authorization token invalid" });
    }
    req.user = user.user;
    return next();
  };

  exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return next(
          new ErrorHandler(
            `Role: ${req.user.role} is not allowed to access this resouce `,
            403
          )
        );
      }
  
      next();
    };
  };
  

 