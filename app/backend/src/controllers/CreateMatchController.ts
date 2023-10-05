import { Request, Response } from 'express';
import CreateMatchModels from '../models/CreateMatchModel';

class CreateMatchController {
  public static async createMatch(req: Request, res: Response): Promise<void> {
    try {
      const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = req.body;

      const match = await CreateMatchModels.createMatch(
        homeTeamId,
        awayTeamId,
        homeTeamGoals,
        awayTeamGoals,
      );

      res.status(201).json(match);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export default CreateMatchController;
