export interface Project {
  id: string;
  title: string;
  demoUrl: string;
  imgs: string[];
  tags: string[];
  repoUrl: string;
  projectFeatureDescription: string;
  projectTechnologyDescription: string;
  projectFutureDescription: string;
}
export interface ProjectEditReqquest{
  id: string;
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
