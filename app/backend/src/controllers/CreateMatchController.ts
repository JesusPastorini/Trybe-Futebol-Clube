import { Request, Response } from 'express';
import CreateMatchModels from '../models/CreateMatchModel';
import Team from '../database/models/Team.models';

class CreateMatchController {
  public static async createMatch(req: Request, res: Response): Promise<Response> {
    const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = req.body;
    if (homeTeamId === awayTeamId) {
      return res.status(422)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }
    const homeTeam = await Team.findByPk(homeTeamId);
    const awayTeam = await Team.findByPk(awayTeamId);

    if (!homeTeam || !awayTeam) {
      return res.status(404).json({ message: 'There is no team with such id!' });
    }

    const match = await CreateMatchModels.createMatch(
      homeTeamId,
      awayTeamId,
      homeTeamGoals,
      awayTeamGoals,
    );

    return res.status(201).json(match);
  }
}
export default CreateMatchController;
