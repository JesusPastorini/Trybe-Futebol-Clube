import { Request, Response } from 'express';
import MatcheModel from '../models/MatcheModel';

class MatchesController {
  public static async getAllMatches(req: Request, res: Response): Promise<void> {
    try {
      const matches = await MatcheModel.findAllMatchesWithTeams();

      res.json(matches);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export default MatchesController;
