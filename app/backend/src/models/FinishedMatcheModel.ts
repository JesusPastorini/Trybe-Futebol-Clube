import Matche from '../database/models/Matches.models';
import Team from '../database/models/Team.models';

class FinishedMatcheModel {
  public static async findFinishedMatches() {
    const finishedMatches = await Matche.findAll({
      where: { inProgress: false },
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
    return finishedMatches;
  }
}

export default FinishedMatcheModel;
