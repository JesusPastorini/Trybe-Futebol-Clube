import { Router } from 'express';
import LeaderboardHomeController from '../controllers/LeaderboardHomeController';

const router = Router();

router.get('/home', LeaderboardHomeController.getHomeTeamLeaderboard);

export default router;
