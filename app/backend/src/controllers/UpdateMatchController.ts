import { Request, Response } from 'express';
import Matche from '../database/models/Matches.models';

class UpdateMatchController {
  public static async updateMatch(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;

    // Verifica se a partida existe
    const match = await Matche.findByPk(id);

    if (!match) {
      return res.status(404).json({ message: 'Match not found' });
    }

    // Atualiza o resultado da partida
    await match.update({ homeTeamGoals, awayTeamGoals });

    return res.status(200).json({ message: 'Match updated' });
  }
}

export default UpdateMatchController;
