require("dotenv").config()


const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();
  
    // options for cookie
    const options = {
       maxAge: 5000000000,
      // expires works the same as the maxAge
    //   expires: new Date('01 12 2021'),
     
     
      httpOnly: true,
    };
  
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      token,
    });
  };
  
  module.exports = sendToken;