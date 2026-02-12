import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] 
    : ["error"]
});

const connectDB= async()=>{
    try{
        await prisma.$connect();
        console.log("Connected to the database successfully via prisma.");
    }catch(error){
        console.error(`Database connection error: ${error.message}`, error);
        process.exit(1);
    };
}

const disconnectDB= async()=>{
    await prisma.$disconnect();
    console.log("Disconnected from the database successfully.");
};
    
export { connectDB, disconnectDB, prisma };