import express from "express";
import { config } from "dotenv";
import { connectDB } from "./config/DB.js";
import { disconnectDB } from "./config/DB.js";
import moviesRoutes from "./routes/movieRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import watchlistRoutes from "./routes/watchlistRoutes.js";
config();

connectDB();


const app=express();

//body parsing middlware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// API ROUTES
app.use("/movies", moviesRoutes)
app.use("/auth", authRoutes)
app.use("/watchlist", watchlistRoutes)
const port= 5001;
 const Server =app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

process.on("unhandledRejection",(err)=>{
    console.error(`Unhandled Rejection: ${err.message}`, err);
    Server.close( async() => {
    await disconnectDB();
    process.exit(1);
    });
});
process.on("uncaughtException",(err)=>{
    console.error(`Uncaught Exception: ${err.message}`, err);
    Server.close( async() => {
    await disconnectDB();
    process.exit(1);
    });
});
process.on("SIGTERM", (err)=>{
    console.error(`SIGTERM recieved:,shutting down server`);
   Server.close( async() => {
    await disconnectDB();
    process.exit(1);
   });
});