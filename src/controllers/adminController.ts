import { Request, Response } from "express";
import { UserLoginRequest } from "../types/user.js";
import { UserRepository } from "../repositories/userReposiitory.js";
import { User } from '../types/user.js'
const userReposiitory = new UserRepository()
export let adminUser:User | null = null;
export let isLogin = false;

export const getLoginPage = (req: Request, res: Response) => {
  res.render("admin/Login", {
    isLogin,
    pageTitle: "AdminLogin",
    layout: "layouts/adminLayout",
  });
};
export const getAdminHomePage = (req: Request, res: Response) => {
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

  const user = await userReposiitory.getByWhere({account, password})
  if (!user) {
    //找不到回登入頁
    return res.render("admin/Login", {
      isLogin,
      pageTitle: "AdminLogin",
      layout: "layouts/adminLayout",
    });
  }

  isLogin = true;
  adminUser = user
  res.status(200).render("admin", {
    isLogin,
    pageTitle: "Admin首頁",
    layout: "layouts/adminLayout",
  });
};
