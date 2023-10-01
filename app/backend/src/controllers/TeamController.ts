import { Request, Response } from 'express';
import TeamService from '../services/TeamService';

class TeamController {
  public static async getAllTeams(req: Request, res: Response): Promise<void> {
    const teams = await TeamService.getAllTeams();
    res.status(200).json(teams);
  }

  public static async getTeamById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const teamId = parseInt(id, 10);

    if (Number.isNaN(teamId)) {
      res.status(400).json({ error: 'Invalid team ID' });
      return;
    }

    const team = await TeamService.getTeamById(teamId);

    if (!team) {
      res.status(404).json({ error: 'Team not found' });
      return;
    }

    res.status(200).json(team);
  }
}

export default TeamController;
