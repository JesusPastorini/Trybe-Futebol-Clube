import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import User from '../database/models/Users.models';

const jwtSecret: string = process.env.JWT_SECRET || '';
class LoginService {
  public static async authenticate(email: string, password: string): Promise<string | null> {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!emailRegex.test(email)) {
      return null;
    }

    const user = await User.findOne({ where: { email } });

    if (!user || password.length < 6) return null;

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ id: user.id, role: user.role }, jwtSecret, { expiresIn: '5d' });
      return token;
    }

    return null; // Senha incorreta
  }
}

export default LoginService;
