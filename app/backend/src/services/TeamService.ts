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
}

export default TeamService;
