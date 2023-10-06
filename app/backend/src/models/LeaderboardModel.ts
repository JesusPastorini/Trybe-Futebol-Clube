import Matche from '../database/models/Matches.models';
import Team from '../database/models/Team.models';
import LeaderboardEntry from '../Interfaces/Leaderboard-int';

export default class LeaderboardModel {
  private static async getTeamLeaderboardEntry(team: Team): Promise<LeaderboardEntry> {
    const homeMatch = await Matche.findAll({ where: { homeTeamId: team.id, inProgress: false } });

    const totalGames = homeMatch.length;
    const totalVictories = homeMatch.filter((m) => m.homeTeamGoals > m.awayTeamGoals).length;
    const totalDraws = homeMatch.filter((m) => m.homeTeamGoals === m.awayTeamGoals).length;
    const totalLosses = totalGames - totalVictories - totalDraws;
    const goalsFavor = homeMatch.reduce((totalGoals, match) => totalGoals + match.homeTeamGoals, 0);
    const goalsOwn = homeMatch.reduce((totalGoals, match) => totalGoals + match.awayTeamGoals, 0);
    const totalPoints = totalVictories * 3 + totalDraws;

    return {
      name: team.teamName,
      totalPoints,
      totalGames,
      totalVictories,
      totalDraws,
      totalLosses,
      goalsFavor,
      goalsOwn,
    };
  }

  public static async getHomeTeamLeaderboard(): Promise<LeaderboardEntry[]> {
    const homeTeams = await Team.findAll();
    const leaderboardDataPromises = homeTeams.map((team) => this.getTeamLeaderboardEntry(team));
    const leaderboardData = await Promise.all(leaderboardDataPromises);
    return leaderboardData;
  }
}
