//引入modles和repositpry
import { ProjectRepository } from "../repositories/projectRepository.js";
import { Request, Response } from "express";
import { isLogin, adminUser } from "./adminController.js";

//初始化
const projectRepository = new ProjectRepository();

export const getProjectHomePage = async (req: Request, res: Response) => {
  res.render("admin/project/ProjectHome", {
    isLogin,
    pageTitle: "ProjectHome",
    projects: await projectRepository.getAll(),
    layout: "layouts/adminLayout",
  });
};

export const getCreateProjectPage = (req: Request, res: Response) => {
  if (!adminUser) {
    return res.render("admin/Login", {
      isLogin,
      pageTitle: "AdminLogin",
      layout: "layouts/adminLayout",
    });
  }
  res.render("admin/project/CreateProject", {
    isLogin,
    pageTitle: "CreateProject",
    layout: "layouts/adminLayout",
  });
};

export const postCreateProjectPage = async (req: Request, res: Response) => {
if (!adminUser) {
    return res.render("admin/Login", {
      isLogin,
      pageTitle: "AdminLogin",
      layout: "layouts/adminLayout",
    });
  }
  await projectRepository.add(req.body);
  res.redirect("/admin/project");
};

export const getEditPage = async (req: Request, res: Response) => {
  if (!adminUser) {
    return res.render("admin/Login", {
      isLogin,
      pageTitle: "AdminLogin",
      layout: "layouts/adminLayout",
    });
  }
  const project = await projectRepository.getById(req.params.id);
  res.render("admin/project/Edit", {
    isLogin,
    pageTitle: "Edit",
    layout: "layouts/adminLayout",
    project,
  });
};

export const postEditPage = async (req: Request, res: Response) => {
  if (!adminUser) {
    return res.render("admin/Login", {
      isLogin,
      pageTitle: "AdminLogin",
      layout: "layouts/adminLayout",
    });
  }
  await projectRepository.edit(req.body);
  res.redirect("/admin/project");
};

export const deleteProject = async (req: Request, res: Response) => {
  if (!adminUser) {
    return res.render("admin/Login", {
      isLogin,
      pageTitle: "AdminLogin",
      layout: "layouts/adminLayout",
    });
  }
  await projectRepository.delete(req.params.id);
  res.redirect("/admin/project");
};
