import { Request, Response } from "express";
import { UserLoginRequest, AddUserRequest } from "../types/user.js";
import { UserRepository } from "../repositories/userReposiitory.js";
import bcrypt from 'bcryptjs'
const userRepository = new UserRepository()

export const getAdminHomePage = (req: Request, res: Response) => {
  if (!res.locals.isLogin) {
    return res.render("admin/Login", {
      serverMsg:'',
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
    serverMsg:'',
    pageTitle: "AdminLogin",
    layout: "layouts/adminLayout",
  });
};
export const postLogin = async (req: Request, res: Response) => {
  const { account, password }: UserLoginRequest = req.body;
  const user = await userRepository.getByWhere({account})
  if (!user) {
    req.flash('error','找不到該帳號')
    //找不到回登入頁
    return res.render("admin/Login", {
      serverMsg:req.flash('error'),
      pageTitle: "AdminLogin",
      layout: "layouts/adminLayout",
    });
  }
  const vaildPwd = await bcrypt.compare(password, user?.password!)
  if(!vaildPwd){
    req.flash('error','密碼錯誤')
    //找不到回登入頁
    return res.render("admin/Login", {
      serverMsg:req.flash('error'),
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
    serverMsg:'',
    pageTitle: "AdminSignup",
    layout: "layouts/adminLayout",
  });
};
export const postSignup = async (req: Request, res: Response) => {
  const { name , account, password, email }: AddUserRequest = req.body;
  //2.沒有人註冊過該email會自動++
  //在middleware中會去驗證
  const hashPwd = await bcrypt.hash(password,12)
  await userRepository.add({
    name,
    account,
    password:hashPwd,
    email
  })
  res.status(200).render("admin/Login", {
    serverMsg:'',
    pageTitle: "AdminLogin",
    layout: "layouts/adminLayout",
  });
};