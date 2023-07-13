import { Sequelize, DataTypes } from "sequelize";
import db from "../database.js";
export default db.define("Product", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  demoUrl: DataTypes.STRING,
  repoUrl: DataTypes.STRING,
  featureDescription: DataTypes.STRING,
  technologyDescription: DataTypes.STRING,
  futureDescription: DataTypes.STRING,
  imgs: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
    defaultValue: [],
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
    defaultValue: [],
  },
});
