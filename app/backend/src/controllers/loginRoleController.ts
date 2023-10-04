import { Request, Response } from 'express';

class LoginRoleController {
  public static getRole(req: Request, res: Response): void {
    const { userRole } = res.locals;

    if (!userRole) {
      res.status(401).json({ message: 'User role not found' });
      return;
    }

    res.status(200).json({ role: userRole });
  }
}

export default LoginRoleController;
