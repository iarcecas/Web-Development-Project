require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productController = require('./controllers/productController');
const categoryController = require('./controllers/categoryController');


const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Marketplace App');
  });

app.post('/products', productController.createProduct);
app.get('/products', productController.getProducts);
app.get('/products/:productId', productController.getProduct);
app.put('/products/:productId', productController.updateProduct);
app.delete('/products/:productId', productController.deleteProduct);
app.delete('/products', productController.deleteAllProducts);
app.get('/products', productController.findProductsByName);

app.post('/categories', categoryController.createCategory);
app.get('/categories', categoryController.getCategories);
app.get('/categories/:categoryId', categoryController.getCategory);
app.put('/categories/:categoryId', categoryController.updateCategory);
app.delete('/categories/:categoryId', categoryController.deleteCategory);
  

mongoose.connect('mongodb+srv://iarcecas:AMdhXwvm9odDA2un@cluster0.b2ctor5.mongodb.net/?retryWrites=true&w=majority',
                { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.listen(5000, () => console.log('Server is running on port 5000'));
