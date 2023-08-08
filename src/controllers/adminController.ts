import { Request, Response } from "express";
import { UserLoginRequest } from "../types/user.js";
import { UserRepository } from "../repositories/userReposiitory.js";
const userReposiitory = new UserRepository()

export const getLoginPage = (req: Request, res: Response) => {
  if(req.session.isLogin) return res.redirect('/admin')
  res.render("admin/Login", {
    isLogin:req.session.isLogin,
    pageTitle: "AdminLogin",
    layout: "layouts/adminLayout",
  });
};
export const getAdminHomePage = (req: Request, res: Response) => {
  const { isLogin } = req.session
  if (!isLogin) {
    return res.render("admin/Login", {
      isLogin,
      pageTitle: "AdminLogin",
      layout: "layouts/adminLayout",
    });
  }
  res.render("admin/index", {
    isLogin,
    pageTitle: "ADMIN首頁",
    layout: "layouts/adminLayout",
  });
};
export const postLogin = async (req: Request, res: Response) => {
  const { account, password }: UserLoginRequest = req.body;
  const { isLogin } = req.session
  const user = await userReposiitory.getByWhere({account, password})
  if (!user) {
    //找不到回登入頁
    return res.render("admin/Login", {
      isLogin,
      pageTitle: "AdminLogin",
      layout: "layouts/adminLayout",
    });
  }
  
  req.session.isLogin = true
  req.session.user = user
  res.status(200).render("admin", {
    isLogin,
    pageTitle: "Admin首頁",
    layout: "layouts/adminLayout",
  });
};
