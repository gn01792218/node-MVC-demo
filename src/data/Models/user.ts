import db from "../database.js";
import { User } from '../../types/user.js'
import { DataTypes} from "sequelize";

const UserModel = db.define<User>("User", {
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
  password:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false
  },
  isLogin:{
    type: DataTypes.BOOLEAN,
    allowNull:false,
    defaultValue:false
  }
});

export default UserModel
