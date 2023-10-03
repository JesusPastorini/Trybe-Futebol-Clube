import { Request, Response } from 'express';
import LoginService from '../services/loginService';

class LoginController {
  public static async login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: 'All fields must be filled' });
      return;
    }

    // verificar as credenciais e gerar um token JWT
    const token = await LoginService.authenticate(email, password);

    if (!token) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    res.status(200).json({ token });
  }
}

export default LoginController;
