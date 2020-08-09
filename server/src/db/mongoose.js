const mongoose = require('mongoose');

const devURI = 'mongodb://127.0.0.1:27017'
mongoose.connect(process.env.NODE_ENV === 'production' ? process.env.DB_CONNECTION : devURI, (err, db) => {
    if(err){
        console.log('unable to connect to mongodb')
    } else {
        console.log('connected to mongodb!')
    }
}, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})