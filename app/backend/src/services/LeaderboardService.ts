import Matche from '../database/models/Matches.models';
import Team from '../database/models/Team.models';
import LeaderboardEntry from '../Interfaces/Leaderboard-int';
import LeaderBoardModel from '../models/LeaderBoardModel';

export default class LeaderboardService {
  private static async getTeamLeaderboardEntry(team: Team): Promise<LeaderboardEntry> {
    const homeMatch = await LeaderBoardModel.getHomeMatches(team.id);
    const totalVictories = await this.calculateTotalVictories(team.id, homeMatch);
    const totalDraws = homeMatch.filter((m) => m.homeTeamGoals === m.awayTeamGoals).length;
    const goalsFavor = await this.calculateGoalsFavor(team.id, homeMatch);
    const goalsOwn = await this.calculateGoalsOwn(team.id, homeMatch);
    const totalPoints = await this.calculateTotalPoints(totalVictories, totalDraws);
    return {
      name: team.teamName,
      totalPoints,
      totalGames: homeMatch.length,
      totalVictories,
      totalDraws,
      totalLosses: homeMatch.length - totalVictories - totalDraws,
      goalsFavor,
      goalsOwn,
      goalsBalance: goalsFavor - goalsOwn,
      efficiency: await this.calculaEfficiency(totalPoints, homeMatch.length),
    };
  }

  private static async calculateTotalVictories(teamId: number, matches: Matche[]): Promise<number> {
    return matches.filter((match) => {
      if (match.homeTeamId === teamId) {
        return match.homeTeamGoals > match.awayTeamGoals;
      }
      return match.awayTeamGoals > match.homeTeamGoals;
    }).length;
  }

  private static async calculateGoalsFavor(teamId: number, matches: Matche[]): Promise<number> {
    return matches.reduce((totalGoals, match) => {
      if (match.homeTeamId === teamId) {
        return totalGoals + match.homeTeamGoals;
      }
      return totalGoals + match.awayTeamGoals;
    }, 0);
  }

  private static async calculateGoalsOwn(teamId: number, matches: Matche[]): Promise<number> {
    return matches.reduce((totalGoals, match) => {
      if (match.homeTeamId === teamId) {
        return totalGoals + match.awayTeamGoals; // Gols sofridos quando o time é o time da casa
      } if (match.awayTeamId === teamId) {
        return totalGoals + match.homeTeamGoals; // Gols sofridos quando o time é o time visitante
      }
      return totalGoals;
    }, 0);
  }

  private static async calculateTotalPoints(victories: number, draws: number): Promise<number> {
    return victories * 3 + draws;
  }

  private static async calculaEfficiency(totalPoints: number, totalGames: number): Promise<number> {
    return parseFloat(((totalPoints / (totalGames * 3)) * 100).toFixed(2));
  }

  public static async getHomeTeamLeaderboard(): Promise<LeaderboardEntry[]> {
    const homeTeams = await Team.findAll();
    const leaderboardDataPromises = homeTeams.map((team) => this.getTeamLeaderboardEntry(team));
    const leaderboardData = await Promise.all(leaderboardDataPromises);
    return leaderboardData;
  }
}
