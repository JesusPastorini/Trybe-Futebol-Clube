import { Request, Response } from 'express';
import Matche from '../database/models/Matches.models';

class UpdateMatchController {
  public static async updateMatch(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { homeTeamGoals, awayTeamGoals } = req.body;

      // Verifica se a partida existe
      const match = await Matche.findByPk(id);

      if (!match) {
        res.status(404).json({ message: 'Match not found' });
        return;
      }

      // Atualiza o resultado da partida
      await match.update({ homeTeamGoals, awayTeamGoals });

      res.status(200).json({ message: 'Match updated' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export default UpdateMatchController;
