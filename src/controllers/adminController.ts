import { Request, Response } from "express";
import { UserLoginRequest } from "../types/user.js";
import User from "../data/Models/user.js";

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
    res.render("admin/Login", {
      isLogin,
      pageTitle: "AdminLogin",
      layout: "layouts/adminLayout",
    });
  }
  return res.render("admin/index", {
    isLogin,
    pageTitle: "ADMIN首頁",
    layout: "layouts/adminLayout",
  });
};
export const postLogin = async (req: Request, res: Response) => {
  const { account, password }: UserLoginRequest = req.body;

  const user = await User.findOne({
    where: { account, password },
  });

  if (!user) {
    //找不到回登入頁
    res.render("admin/Login", {
      isLogin,
      pageTitle: "AdminLogin",
      layout: "layouts/adminLayout",
    });
  }

  isLogin = true;
  res.status(200).render("admin", {
    isLogin,
    pageTitle: "Admin首頁",
    layout: "layouts/adminLayout",
  });
};
