import db from "../database.js";
import { Project } from '../../types/project.js'
import { DataTypes, Model, Optional} from "sequelize";

interface UserCreationAttributes extends Optional<Project, "id">{}
interface ProjectModel extends Model<Project, UserCreationAttributes>, Project{}
export default db.define<ProjectModel>("Product", {
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
