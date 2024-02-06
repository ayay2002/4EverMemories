const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {mongoose} = require('mongoose');
const cookieParser = require('cookie-parser');


const app = express();
// db connection
console.log(process.env.MONGO_URL);
console.log(process.env.JWT_SECRET);
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database Connected!'))
.catch((error) => console.log('Database Not Connected!', error))

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

app.use('/', require('./routes/authRoutes'))

const port = 8000;
app.listen(port, () => console.log(`Server is running on ${port}`));

