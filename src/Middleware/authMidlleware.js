import jwt from 'jsonwebtoken';
import { prisma } from '../config/DB.js';

// Read token from the request
//check if token is valid

  const authMiddleware = async (req, res, next) => {
    console.log("authMiddleware called");
    let token ;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1];
    }else if(req.cookies?.jwt){
        token = req.cookies.jwt;

}
if(!token){
    return res.status(401).json({ error: "Unauthorized, no token provided" });

}

try{
//verify token and extract user Id
const decoded= jwt.verify(token, process.env.JWT_SECRET);
//fetch user from database
const user= await prisma.user.findUnique({
    where: { id: decoded.id },
   
});

if(!user){
    return res.status(401)
    .json({error: "user no longer exists"});

}
req.user = user;
next();
}catch(err){
    return res.status(401).json({ error: "Unauthorized, invalid token" });
}

  };
export default authMiddleware;