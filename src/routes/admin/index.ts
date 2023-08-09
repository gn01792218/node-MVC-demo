import { Router } from 'express'
import adminRoute from "../../routes/admin/admin.js";
import userRoute from "../../routes/admin/user.js";
import projectRoute from "../../routes/admin/project.js";
import { authenticate } from '../../middleware/adminAuthenticate.js'
const router = Router()

router.use("/", adminRoute);
router.use("/user", authenticate, userRoute);
router.use("/project", authenticate, projectRoute);
export default router