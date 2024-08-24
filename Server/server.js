import express from 'express';
import 'dotenv/config'
import connectDataBase from './Config/database.js'
import cors from 'cors'
import cookieParser  from 'cookie-parser'

const PORT = process.env.PORT || 4000
const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))
app.use(cookieParser())


connectDataBase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})
    .catch((error) => {
        console.error('Database connection error:', error);
    });





