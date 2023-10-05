import Matche from '../database/models/Matches.models';
import Team from '../database/models/Team.models';

class InProgressMatcheModel {
  public static async findInProgressMatches() {
    const inProgressMatches = await Matche.findAll({
      where: { inProgress: true },
      include: [
        {
          model: Team,
          as: 'homeTeam',
          attributes: ['teamName'],
        },
        {
          model: Team,
          as: 'awayTeam',
          attributes: ['teamName'],
        },
      ],
    });
    return inProgressMatches;
  }
}

export default InProgressMatcheModel;
