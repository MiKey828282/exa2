import { DataTypes } from 'sequelize';
import sequelize from '../database';

const Purchase = sequelize.define('Purchase', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  purchaseDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
},
{
  timestamps: false
});

export default Purchase;
