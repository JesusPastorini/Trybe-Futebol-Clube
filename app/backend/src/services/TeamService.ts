import Team from '../database/models/Team.models';

class TeamService {
  public static async getAllTeams(): Promise<Team[]> {
    try {
      const teams = await Team.findAll();
      return teams;
    } catch (error) {
      throw new Error('Error fetching teams');
    }
  }

  public static async getTeamById(id: number): Promise<Team | null> {
    try {
      const team = await Team.findByPk(id);
      return team;
    } catch (error) {
      throw new Error('Error fetching team by ID');
    }
  }
}

export default TeamService;
