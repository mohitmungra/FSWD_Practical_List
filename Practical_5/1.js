const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Choose a port number that is not in use.

// Middleware
app.use(bodyParser.json());

// In-memory database (simulate products collection)
let products = ["Mohit" , "21IT092"];

// Define your routes and handlers here...

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// GET all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// GET a specific product by ID
app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});

// POST to add a new product
app.post('/api/products', (req, res) => {
  const { name, price } = req.body;
  const id = products.length + 1; // Simple auto-incrementing ID for this example

  const newProduct = {
    id,
    name,
    price,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT to update an existing product by ID
app.put('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const { name, price } = req.body;

  product.name = name;
  product.price = price;

  res.json(product);
});

// DELETE to remove a product by ID
app.delete('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  products.splice(productIndex, 1);
  res.status(204).end();
});
