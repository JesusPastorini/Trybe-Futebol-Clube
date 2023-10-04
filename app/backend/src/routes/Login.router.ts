import { Router } from 'express';
import LoginController from '../controllers/loginController';
// import LoginRoleController from '../controllers/loginRoleController';
// import authMiddleware from '../middleware/authMiddleware';

const router = Router();

router.post('/', LoginController.login);
// router.get('/role', authMiddleware, LoginRoleController.getRole);

export default router;
