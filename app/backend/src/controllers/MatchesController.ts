import { Request, Response } from 'express';
import MatcheModel from '../models/AllMatcheModel';
import InProgressMatcheModel from '../models/InProgressMatcheModel';
import FinishedMatcheModel from '../models/FinishedMatcheModel';

class MatchesController {
  public static async getAllMatches(req: Request, res: Response): Promise<void> {
    try {
      const { inProgress } = req.query;

      if (inProgress === 'true') {
        const inProgressMatches = await InProgressMatcheModel.findInProgressMatches();
        res.json(inProgressMatches);
      } else if (inProgress === 'false') {
        const finishedMatches = await FinishedMatcheModel.findFinishedMatches();
        res.json(finishedMatches);
      } else {
        const matches = await MatcheModel.findAllMatchesWithTeams();

        res.json(matches);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export default MatchesController;
