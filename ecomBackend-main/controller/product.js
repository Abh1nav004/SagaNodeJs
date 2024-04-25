const Product = require('../models/products');

// function that add new product in database only accessable to admin
async function handleAddProduct(req, res) {
    const { productName, productDescription, productPrice, quantity ,productImageURL} = req.body;
    await Product.create({
        productName: productName,
        productDescription: productDescription,
        productPrice: productPrice,
        quantity: quantity,
        productImageURL: productImageURL,
    })
    return res.redirect('/addProduct');
};

module.exports = {
    handleAddProduct,
}