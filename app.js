import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"


// configure dotenv
dotenv.config();

// DB config
connectDB();

// rest object
const app = express();

// middelwares
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use('/api/v1/auth', authRoutes)

app.get('/', (req, res) => {
  res.send("<h1>Hello World</h1>");
})

// PORT 
const PORT = process.env.PORT || 8081;

app.listen(PORT, () => { console.log(`Server runing on http://localhost:${PORT}`); });