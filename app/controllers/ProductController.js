const mongoose = require('mongoose');
const Product = mongoose.model("Product");

const index = async (req,res)=>{
    const {page = 1} = req.query;
    const product = await Product.paginate({},{page:page,limit:10});
    return res.json(product);
};
const store = async(req,res)=>{
    const product = await Product.create(req.body);//criar um produto a partir do json enviado pelo insomnia
    return res.json(product);
};

const show = async(req,res)=>{
    const product = await Product.findById(req.params.id);
    return res.json(product);
};

const update = async(req,res)=>{
    const product = await Product.findByIdAndUpdate(req.params.id, req.body,{new: true});
    return res.json(product);
};
const destroy = async(req,res)=>{
    const product = await Product.findByIdAndRemove(req.params.id);
    res.send();
};
module.exports = {index,store,show,update,destroy}