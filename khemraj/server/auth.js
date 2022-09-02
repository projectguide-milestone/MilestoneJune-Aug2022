const jwt = require("jsonwebtoken");

function generateAccessToken(name) {
  return jwt.sign({ name }, "khemraj", { expiresIn: "1800s", });
}

 function validateToken(req, res, next) {
  console.log("validating token")
  console.log(req.headers)
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
  
    if (token == null) {
      console.log("token not found")
      return res.sendStatus(401);
    }
  
    jwt.verify(token, "khemraj", (err, decoded) => {
      if (err) {
        console.log(`err ${err}`)
        return res.sendStatus(403);
      }
      req.tokenData = decoded;
      next();
    });
  }
  module.exports = {validateToken,generateAccessToken}