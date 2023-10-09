import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';

class LeaderboardHomeController {
  public static async getHomeTeamLeaderboard(req: Request, res: Response): Promise<Response> {
  
      const data = await LeaderboardService.getHomeTeamLeaderboard();
      data.sort((a, b) => {
        // Primeiro, compare o total de pontos
        if (b.totalPoints !== a.totalPoints) return b.totalPoints - a.totalPoints;

        // Em caso de empate nos pontos, compare o saldo de gols
        if (b.goalsBalance !== a.goalsBalance) {
          return b.goalsBalance - a.goalsBalance;
        }

        // Em caso de empate no saldo de gols, compare os gols marcados a favor
        if (b.goalsFavor !== a.goalsFavor) {
          return b.goalsFavor - a.goalsFavor;
        }

        // Se ainda houver empate, compare o nome dos times (ordem alfabética)
        return a.name.localeCompare(b.name);
      });
      return res.status(200).json(data);
  }
}
export default LeaderboardHomeController;
