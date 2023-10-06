import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';

class LeaderboardHomeController {
  public static async getHomeTeamLeaderboard(req: Request, res: Response): Promise<void> {
    try {
      const leaderboardData = await LeaderboardService.getHomeTeamLeaderboard();
      res.json(leaderboardData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export default LeaderboardHomeController;
