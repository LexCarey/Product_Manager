const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/api/products', ProductController.findAllProducts)
    app.get('/api/products/:id', ProductController.getProduct)
    app.post('/api/products', ProductController.createProduct)
}