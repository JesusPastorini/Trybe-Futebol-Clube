import { Request, Response } from 'express';
import LeaderboardModel from '../models/LeaderboardModel';

class LeaderboardHomeController {
  public static async getHomeTeamLeaderboard(req: Request, res: Response): Promise<void> {
    try {
      const leaderboardData = await LeaderboardModel.getHomeTeamLeaderboard();
      res.json(leaderboardData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export default LeaderboardHomeController;
