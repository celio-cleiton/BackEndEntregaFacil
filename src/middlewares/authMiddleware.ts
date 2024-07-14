import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Definição da interface extendida para incluir a propriedade 'user'
declare global {
  namespace Express {
    interface Request {
      user?: any; // Pode ser ajustado para o tipo correto do usuário
    }
  }
}

// Middleware de autenticação
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    req.user = decoded; // Definindo req.user com os dados decodificados do token
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

export default authMiddleware;
