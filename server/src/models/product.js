const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    stock: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: String,
        required: true, 
    },
    image: {
        type: String
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;