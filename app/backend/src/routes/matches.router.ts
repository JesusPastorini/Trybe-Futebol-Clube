import { Router } from 'express';
import MatchesController from '../controllers/MatchesController';
import validateToken from '../middleware/validateToken';
import FinishMatchController from '../controllers/FinishMatchController';
import UpdateMatchController from '../controllers/UpdateMatchController';
import CreateMatchController from '../controllers/CreateMatchController';

const router = Router();

router.get('/', MatchesController.getAllMatches);
router.post('/', validateToken, CreateMatchController.createMatch);
router.patch('/:id/finish', validateToken, FinishMatchController.finishMatch);
router.patch('/:id', validateToken, UpdateMatchController.updateMatch);

export default router;
