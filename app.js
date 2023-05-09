import express from 'express';
import dotenv from 'dotenv';
import chalk from 'chalk';
import morgan from 'morgan';
import cors from 'cors';

// custom import
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoute from './routes/categoryRoute.js';

// configure dotenv
dotenv.config();

// DB config
connectDB();

// rest object
const app = express();

// middelwares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoute);

app.get('/', (req, res) => {
	res.send('<h1>Hello World</h1>');
});

// PORT
const PORT = process.env.PORT || 5001;

// app.listen(PORT, () => { console.log(`Server runing on http://localhost:${PORT}`); });
app.listen(PORT, () => {
	console.log(
		`${chalk.blue('Server runing on: ')} ${chalk.cyan(
			`http://localhost:${PORT}/`
		)}`
	);
});
