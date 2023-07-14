import db from "../database.js";
import { User } from '../../types/user.js'
import { DataTypes, Model, Optional} from "sequelize";

interface UserCreationAttributes extends Optional<User, "id">{}
interface UserModel extends Model<User, UserCreationAttributes>, User{}

export default db.define<UserModel>("User", {
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
