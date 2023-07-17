import { UUID } from "crypto";

import { Model, InferAttributes, InferCreationAttributes } from "sequelize";
export interface Project
  extends Model<InferAttributes<Project>, InferCreationAttributes<Project>> {
  id: UUID;
  title: string;
  demoUrl: string;
  imgs: string[];
  tags: string[];
  repoUrl: string;
  featureDescription: string;
  technologyDescription: string;
  futureDescription: string;
}
export interface ProjectCreateRequest {
  title: string;
  demoUrl: string;
  imgs: string[];
  tags: string[];
  repoUrl: string;
  featureDescription: string;
  technologyDescription: string;
  futureDescription: string;
  userId:UUID
} 
export interface ProjectEditRequest {
  id: UUID;
  title: string;
  demoUrl: string;
  imgs: string[];
  tags: string[];
  repoUrl: string;
  featureDescription: string;
  technologyDescription: string;
  futureDescription: string;
}
export interface ProjectCRUDResponse {
  project: Project | null;
  projects: Project[];
}
