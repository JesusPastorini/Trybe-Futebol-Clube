import { Router } from 'express';
import MatchesController from '../controllers/MatchesController';
import validateToken from '../middleware/validateToken';
import FinishMatchController from '../controllers/FinishMatchController';

const router = Router();

router.get('/', MatchesController.getAllMatches);
router.patch('/:id/finish', validateToken, FinishMatchController.finishMatch);

export default router;
