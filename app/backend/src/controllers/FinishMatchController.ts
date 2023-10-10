import { Request, Response } from 'express';
import Matche from '../database/models/Matches.models';

class FinishMatchController {
  public static async finishMatch(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    // Verifica se a partida existe
    const match = await Matche.findByPk(id);

    if (!match) {
      return res.status(404).json({ message: 'Match not found' });
    }

    // altere o status para finalizado
    await match.update({ inProgress: false });

    return res.status(200).json({ message: 'Finished' });
  }
}

export default FinishMatchController;
