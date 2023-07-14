
import db from "../database.js";
import { DataTypes } from "sequelize";
export default db.define("User", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  account:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  passward:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false
  }
});
