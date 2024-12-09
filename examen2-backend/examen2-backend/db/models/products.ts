import { DataTypes } from 'sequelize';
import sequelize from '../database';

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  discount: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Image: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  timestamps: false 
});

export default Product;
