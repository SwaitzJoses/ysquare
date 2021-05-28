import path from 'path'
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoute from './routes/userRoute.js'
import colors from "colors";

import morgan from "morgan";

dotenv.config();

connectDB();

const app = express();
app.use(morgan('dev'))
app.use(express.json()); // Accept JSON data in the  body

app.use('/api/users',userRoute)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if ((process.env.NODE_ENV = 'production')) {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} 
else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`.red.inverse);
});
