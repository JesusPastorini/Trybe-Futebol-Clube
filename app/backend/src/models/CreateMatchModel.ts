import MatchCreation from '../Interfaces/MatchCreation-int ';
import Matche from '../database/models/Matches.models';

class CreateMatchModel {
  public static async createMatch(
    homeTeamId: number,
    awayTeamId: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ): Promise<MatchCreation> {
    // Cria uma nova partida em andamento
    const match = await Matche.create({
      homeTeamId,
      awayTeamId,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true,
    });

    return match;
  }
}

export default CreateMatchModel;
