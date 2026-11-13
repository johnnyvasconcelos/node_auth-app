import { DataTypes } from 'sequelize';
import { client } from '../db.js';
// import { useState } from 'react';

export const user = client.define('user', {
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// const emailVerified = useState(false);
