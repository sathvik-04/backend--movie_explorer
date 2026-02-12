import { prisma } from "../config/DB.js"
import bcrypt from "bcryptjs";
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

    const User = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    });

    res.status(201).json({ 
        status: "success",
        data:{
            user:{
                id: User.id,
                name: User.name,
                email: User.email
            }
        }
     });
      
};



export { register };