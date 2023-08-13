//引入modles和repositpry
import { ProjectRepository } from "../repositories/projectRepository.js";
import { NextFunction, Request, Response } from "express";
import { customErrorObject } from "../utils/errorUtils.js"

//初始化
const projectRepository = new ProjectRepository();

export const getProjectHomePage = async (req: Request, res: Response, next:NextFunction) => {
  res.render("admin/project/ProjectHome", {
    pageTitle: "ProjectHome",
    projects: await projectRepository.getAll().catch((err)=>next(customErrorObject(err))),
    layout: "layouts/adminLayout",
  });
}

export const getCreateProjectPage = (req: Request, res: Response) => {
  const { user } = req.session;
  if (!user) {
    return res.render("admin/Login", {
      pageTitle: "AdminLogin",
      layout: "layouts/adminLayout",
    });
  }
  res.render("admin/project/CreateProject", {
    pageTitle: "CreateProject",
    layout: "layouts/adminLayout",
  });
}

export const postCreateProjectPage = async (req: Request, res: Response, next:NextFunction) => {
  const { user } = req.session;

  if (!user) {
    return res.render("admin/Login", {
      pageTitle: "AdminLogin",
      layout: "layouts/adminLayout",
    });
  }

  await projectRepository.add(req.body, user)
  .catch((err)=>next(customErrorObject(err)))

  res.redirect("/admin/project");
}

export const getEditPage = async (req: Request, res: Response, next:NextFunction) => {
  const { user } = req.session;

  if (!user) {
    return res.render("admin/Login", {
      pageTitle: "AdminLogin",
      layout: "layouts/adminLayout",
    });
  }
  const project = await projectRepository.getById(req.params.id)
  .catch((err)=>next(customErrorObject(err)))

  res.render("admin/project/Edit", {
    pageTitle: "Edit",
    layout: "layouts/adminLayout",
    project,
  });
}

export const postEditPage = async (req: Request, res: Response, next:NextFunction) => {
  const { user } = req.session;

  if (!user) {
    return res.render("admin/Login", {
      pageTitle: "AdminLogin",
      layout: "layouts/adminLayout",
    });
  }
  await projectRepository.edit(req.body)
  .catch((err)=>next(customErrorObject(err)))
  res.redirect("/admin/project");
}

export const deleteProject = async (req: Request, res: Response, next:NextFunction) => {
  const { user } = req.session

  if (!user) {
    return res.render("admin/Login", {
      pageTitle: "AdminLogin",
      layout: "layouts/adminLayout",
    });
  }
  await projectRepository.delete(req.params.id)
  .catch((err)=>next(customErrorObject(err)))

  res.redirect("/admin/project");
}
