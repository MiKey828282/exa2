import sequelize from '../database';
import Product from './products';
import Purchase from './purchases';
import User from './users';

// Purchase Model
Purchase.belongsTo(User, { foreignKey: 'userId' });
Purchase.belongsTo(Product, { foreignKey: 'productId' });

// User Model
User.hasMany(Purchase, { foreignKey: 'userId' });

// Product Model
Product.hasMany(Purchase, { foreignKey: 'productId' });


export { sequelize, Product, Purchase, User };
