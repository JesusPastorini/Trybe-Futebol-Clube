import Matche from '../database/models/Matches.models';
import Team from '../database/models/Team.models';

class MatcheModel {
  public static async findAllMatchesWithTeams() {
    const matches = await Matche.findAll({
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

    return matches;
  }
}

export default MatcheModel;
