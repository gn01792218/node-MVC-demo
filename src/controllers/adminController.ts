import { Request, Response } from "express";
import { UserLoginRequest, AddUserRequest } from "../types/user.js";
import { UserRepository } from "../repositories/userReposiitory.js";
import bcrypt from 'bcryptjs'
const userReposiitory = new UserRepository()

export const getAdminHomePage = (req: Request, res: Response) => {
  if (!res.locals.isLogin) {
    return res.render("admin/Login", {
      pageTitle: "AdminLogin",
      layout: "layouts/adminLayout",
    });
  }
  res.render("admin", {
    pageTitle: "ADMIN首頁",
    layout: "layouts/adminLayout",
  });
};
export const getLoginPage = (req: Request, res: Response) => {
  if(res.locals.isLogin) return res.redirect('/admin')
  res.render("admin/Login", {
    pageTitle: "AdminLogin",
    layout: "layouts/adminLayout",
  });
};
export const postLogin = async (req: Request, res: Response) => {
  const { account, password }: UserLoginRequest = req.body;
  const user = await userReposiitory.getByWhere({account})
  const vaildPwd = await bcrypt.compare(password, user?.password!)
  if (!vaildPwd) {
    //找不到回登入頁
    return res.render("admin/Login", {
      pageTitle: "AdminLogin",
      layout: "layouts/adminLayout",
    });
  }
  
  req.session.isLogin = true
  req.session.user = user!
  req.session.save(()=>{
    res.status(200).redirect("/admin");
  })
};
export const postLogout = (req:Request, res:Response) => {
  req.session.destroy(()=>res.redirect("/admin"))
}
export const getSignupPage = (req: Request, res: Response) => {
  if(res.locals.isLogin) return res.redirect('/admin')
  res.render("admin/Signup", {
    pageTitle: "AdminSignup",
    layout: "layouts/adminLayout",
  });
};
export const postSignup = async (req: Request, res: Response) => {
  const { name , account, password, email }: AddUserRequest = req.body;
  //1.先檢查account、email是否已經被註冊過了
  const exsitUser = await userReposiitory.getByWhere({email, account})
  if(exsitUser) {
    //已經有人註冊過了，停留在註冊頁面
    return res.render("admin/Signup", {
      pageTitle: "AdminSignup",
      layout: "layouts/adminLayout",
    });
  }
  //2.沒有人註冊過該email就++
  const hashPwd = await bcrypt.hash(password,12)
  await userReposiitory.add({
    name,
    account,
    password:hashPwd,
    email
  })
  res.status(200).render("admin/Login", {
    pageTitle: "AdminLogin",
    layout: "layouts/adminLayout",
  });
};