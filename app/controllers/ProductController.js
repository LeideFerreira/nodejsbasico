const mongoose = require('mongoose');
const Product = mongoose.model("Product");

const index = async (req,res)=>{
    const Products = await Product.find();
    return res.json(Products);
};

module.exports = {index}