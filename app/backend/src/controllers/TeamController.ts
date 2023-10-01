import { Request, Response } from 'express';
import TeamService from '../services/TeamService';

class TeamController {
  public static async getAllTeams(req: Request, res: Response): Promise<void> {
    const teams = await TeamService.getAllTeams();
    res.status(200).json(teams);
  }
}

export default TeamController;
