const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const userRoutes = require('./routes/user.routes');
const { body, validationResult } = require('express-validator');
const connectToDB = require('./config/db');

connectToDB();
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index.routes');


const PORT = 3000;

app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/user', userRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});