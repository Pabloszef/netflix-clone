import express from "express";
import {ENV_VARS} from "./config/envVars.js";


import authRoutes from "./routes/auth.route.js";
import {connectDB} from "./config/db.js";


const PORT = ENV_VARS.PORT;


const app = express();


app.use("/api/v1/auth", authRoutes)

app.listen(PORT, () => {
    console.log("Server is running on the port: " + PORT)
    connectDB()
})