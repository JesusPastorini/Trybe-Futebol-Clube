import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import User from '../database/models/Users.models';

class LoginService {
  public static async authenticate(email: string, password: string): Promise<string | null> {
    const user = await User.findOne({ where: { email } });

    if (!user) return null;

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ id: user.id, role: user.role }, 'secreto', { expiresIn: '1h' });
      return token;
    }

    return null; // Senha incorreta
  }
}

export default LoginService;
