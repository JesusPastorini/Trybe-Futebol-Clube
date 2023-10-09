import { Op } from 'sequelize';
import Matche from '../database/models/Matches.models';

export default class LeaderBoardModel {
  public static async getHomeMatches(teamId: number): Promise<Matche[]> {
    return Matche.findAll({
      where: {
        [Op.or]: [
          { homeTeamId: teamId, inProgress: false },
        ],
      },
    });
  }
}
