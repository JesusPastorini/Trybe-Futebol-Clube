import { Request, Response } from 'express';
import Matche from '../database/models/Matches.models';

class FinishMatchController {
  public static async finishMatch(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      // Verifica se a partida existe
      const match = await Matche.findByPk(id);

      if (!match) {
        res.status(404).json({ message: 'Match not found' });
        return;
      }

      // altere o status para finalizado
      await match.update({ inProgress: false });

      res.status(200).json({ message: 'Finished' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export default FinishMatchController;
