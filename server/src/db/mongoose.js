const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECTION, (err, db) => {
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