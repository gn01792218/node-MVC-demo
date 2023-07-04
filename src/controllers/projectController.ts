//引入modles和repositpry
import { Project } from "../models/project";
import { ProjectRepository } from "../repositories/projectRepository";
import { Request, Response } from "express";

//初始化
const projectRepository = new ProjectRepository();

export const getProjectHomePage = (req: Request, res: Response) => {
  res.render("admin/project/ProjectHome", {
    pageTitle: "ProjectHome",
    projects: projectRepository.getAll(),
    layout: "layouts/adminLayout",
  });
};

export const getCreateProjectPage = (req: Request, res: Response) => {
  res.render("admin/project/CreateProject", {
    pageTitle: "CreateProject",
    layout: "layouts/adminLayout",
  });
};

export const postCreateProjectPage = (req: Request, res: Response) => {
  const project: Partial<Project> = {
    id: Math.random().toString(),
    ...req.body,
  };
  projectRepository.add(project);
  res.redirect("/admin/project");
};

export const deleteProject = (req: Request, res: Response) => {
  projectRepository.delete(req.params.id);
  res.redirect("/admin/project");
};
