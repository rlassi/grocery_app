const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const userRouter = require('./routers/user');
const productRouter = require('./routers/product');

dotenv.config();
require('./db/mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(userRouter);
app.use(productRouter);


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve('../client', 'build', 'index.html' ))
    })
}

app.listen(port, () => {
    console.log(`server is up on port ${port}`)
});