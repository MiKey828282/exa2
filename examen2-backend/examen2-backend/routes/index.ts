import express from 'express';
import { default as User } from '../db/models/users';  
import { default as Product } from '../db/models/products';  
import { default as Purchase } from '../db/models/purchases'; 

const router = express.Router();

import multer from 'multer';

const upload = multer();

router.post('/products', upload.none(), async (req, res) => {
  const { name, description, price, stock, discount, Image } = req.body;
  try {
    const newProduct = await Product.create({ name, description, price, stock, discount, Image });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating product', error });
  }
});


router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
});

router.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      res.status(200).json(user); 
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error });
  }
});


router.post('/users', async (req, res) => {
  const { name, lastname, phone, email } = req.body;
  try {
    const newUser = await User.create({ name, lastname, phone, email });
    res.status(201).json(newUser); 
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
});


router.get('/products', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
});

router.get('/history/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const purchases = await Purchase.findAll({ where: { userId } });

    if (!purchases || purchases.length === 0) {
      return res.status(404).json({ message: 'No purchases found' });
    }

    res.status(200).json(purchases);
  } catch (error) {
    console.error('Error fetching history:', error);
    res.status(500).json({ message: 'Error fetching purchase history', error: error.message });
  }
});


router.get('/purchases', async (req, res) => {
  try {
    const purchases = await Purchase.findAll({
      include: [
        { model: User, attributes: ['name'] },
        { model: Product, attributes: ['name'] }
      ]
    });
    res.status(200).json(purchases);
  } catch (error) {
    console.error('Error fetching purchases:', error); // Log the error details
    res.status(500).json({ message: 'Error fetching purchases', error: error.message });
  }
});



router.post('/purchases', async (req, res) => {
  const { userId, productId, quantity, totalPrice, purchaseDate } = req.body;

  if (!userId || !productId || !quantity || !totalPrice || !purchaseDate) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const user = await User.findByPk(userId);
    const product = await Product.findByPk(productId);

    if (!user || !product) {
      return res.status(404).json({ message: 'User or product not found' });
    }

    const newPurchase = await Purchase.create({
      userId,
      productId,
      quantity,
      totalPrice,
      purchaseDate,
    });

    res.status(201).json(newPurchase);
  } catch (error) {
    console.error('Error creating purchase:', error);
    res.status(500).json({ message: 'Error creating purchase', error: error.message });
  }
});


router.get('/purchases/with-details', async (req, res) => {
  try {
    const purchases = await Purchase.findAll({
      include: [
        { model: User, attributes: ['id', 'name', 'lastname'] },
        { model: Product, attributes: ['id', 'name', 'price'] }
      ]
    });
    res.status(200).json(purchases);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching purchases with details', error });
  }
});

router.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, lastname, phone, email } = req.body;
  try {
    const userToUpdate = await User.findByPk(id);
    if (userToUpdate) {
      await userToUpdate.update({ name, lastname, phone, email });
      res.status(200).json(userToUpdate); 
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
});

router.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock, image } = req.body;
  try {
    const productToUpdate = await Product.findByPk(id);
    if (productToUpdate) {
      await productToUpdate.update({ name, description, price, stock, image });
      res.status(200).json(productToUpdate);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error });
  }
});



router.put('/purchases/:id', async (req, res) => {
  const { id } = req.params;
  const { userId, productId, quantity } = req.body;
  try {
    const purchaseToUpdate = await Purchase.findByPk(id);
    if (purchaseToUpdate) {
      await purchaseToUpdate.update({ userId, productId, quantity });
      res.status(200).json(purchaseToUpdate);
    } else {
      res.status(404).json({ message: 'Purchase not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating purchase', error });
  }
});

export default router;
