import { prisma } from "../config/DB.js"
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";
const register = async(req, res) => {
    const body = req.body;
    const { name, email, password } = body;

    const userExists = await prisma.user.findUnique({
        where: { email: email },
    });

    if (userExists) {
        return res.status(400).json({ error:"User with this email already exists" });

    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    //create user

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    });
     const token = generateToken(user.id,res);

    res.status(201).json({ 
        status: "success",
        data:{
            user:{
                id: user.id,
                name: name,
                email: email
            },
            token,
        }
     });
      
};

const login = async(req, res) =>{
    const {email, password} = req.body;


//check if email user exists in table
 const user =await prisma.user.findUnique({
    where: {email:email},
 });

 if(!user){
    return res.status(401).json({error:"invalid email or password"});
 }

 //verify password
 const isPasswordValid= await bcrypt.compare(password, user.password);

 if(!isPasswordValid){
    return res.status(401).json({error:"invalid email or password"});
 }


 //generate jwt token

 const token = generateToken(user.id,res);




 res.status(201).json({ 
        status: "success",
        data:{
            user:{
                id: user.id,
                email: user.email,
                
            },
            token,
        }
     });

};
    const logout= async(req, res) =>{
        res.cookie("jwt", "", {
            httpOnly: true,
            expires: new Date(0)
        })
        res.status(200).json({
        status:"success",
        message:"User logged out successfully"
    });
    };  


export {login};
export { register, logout };