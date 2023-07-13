import { UUID } from "crypto";

export interface Project {
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
export interface ProjectEditReqquest{
  id: UUID;
  title: string;
  demoUrl: string;
  imgs: string[];
  tags: string[];
  repoUrl: string;
  projectFeatureDescription: string;
  projectTechnologyDescription: string;
  projectFutureDescription: string;
}
export interface ProjectCRUDResponse{
    project:Partial<Project> | undefined,
    projects:Partial<Project>[]
}
