import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import User from '../database/models/Users.models';

const jwtSecret: string = process.env.JWT_SECRET || '';
export default function validateToken(req: Request, res: Response, next: NextFunction): void {
  const token = req.headers.authorization?.split(' ')[1]; // Pega o token do cabeçalho

  if (!token) {
    res.status(401).json({ message: 'Token not found' });
    return;
  }

  jwt.verify(token, jwtSecret, async (err, decoded) => {
    if (err) {
      res.status(401).json({ message: 'Token must be a valid token' });
      return;
    }
    const userId = (decoded as { id: number }).id;
    const user = await User.findByPk(userId);
    if (!user) return res.status(401).json({ message: 'User not found' });
    res.locals.userRole = user.role;
    next();
  });
}
