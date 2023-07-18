import { Router } from 'express'
import adminRoute from "../../routes/admin/admin.js";
import userRoute from "../../routes/admin/user.js";
import projectRoute from "../../routes/admin/project.js";
const router = Router()

router.use("/", adminRoute);
router.use("/user", userRoute);
router.use("/project", projectRoute);
export default router