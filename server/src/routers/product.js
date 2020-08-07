const express = require('express');
const Product = require('../models/product');
const Category = require('../models/category');
const auth = require('../auth/auth');

const router = new express.Router();

// GET /products?category=fruits&name=orange
router.get('/products', async (req, res) => {
    const match = {};

    if(req.query.category) match.category = req.query.category;
    if(req.query.name) {
        match.name = {
            $regex: req.query.name,
            $options: 'i'
        }
    }

    const products = await Product.find({ ...match }).populate('category')
    res.send({products})
});

router.post('/products', auth, async (req, res) => {
    let product = new Product({
        ...req.body
    });
    try {
        await product.save();
        const _id = product._id
        product = await Product.findOne({ _id: _id }).populate('category')
        res.status(201).send(product);
    } catch (e) {
        res.status(400).send(e)
    };
});

router.put('/products', auth, async (req, res) => {
    const _id = req.body._id;
    delete req.body._id;
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'description', 'image', 'stock', 'price', 'category'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates' });
    }
    try {
        let product = await Product.findOne({ _id: _id })
        
        if (!product) {
            return res.status(404).send();
        };

        updates.forEach(update => product[update] = req.body[update]);
        
        await product.save()
        product = await Product.findOne({ _id: _id }).populate('category');
        res.send(product);
    } catch (e) {
        res.status(400).send(e);
    };
});

router.delete('/products', auth, async (req, res) => {
    const _id = req.body._id;

    try {
        const product = await Product.findOneAndDelete({_id});

        if(!product){
            return res.status(404).send();
        }

        res.send(product);
    } catch(e){
        return res.state(500).send();
    }
})

router.get('/products/category', async (req, res) => {
    const categories = await Category.find();
    res.send({categories});
})

router.post('/products/category', auth, async (req, res) => {
    const category = new Category({
        ...req.body
    })

    try{
        await category.save()
        res.status(201).send(category);
    } catch(e){
        res.status(400).send(e);
    }
})

module.exports = router