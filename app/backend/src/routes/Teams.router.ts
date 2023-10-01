import { Router } from 'express';
import TeamController from '../controllers/TeamController';

const router = Router();

router.get('/', TeamController.getAllTeams);

export default router;
