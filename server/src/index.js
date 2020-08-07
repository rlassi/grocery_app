const express = require('express');
const dotenv = require('dotenv');
const userRouter = require('./routers/user');
const productRouter = require('./routers/product');

dotenv.config();
require('./db/mongoose');

const Product = require('./models/product');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(userRouter);
app.use(productRouter);

app.listen(port, () => {
    console.log(`server is up on port ${port}`)
});