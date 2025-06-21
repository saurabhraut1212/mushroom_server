import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


declare module 'express' {
  interface Request {
    user?: {
      id: string | number;
      email: string;
    };
  }
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // 1. Get token from Authorization header
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ 
        success: false,
        message: 'Authorization token is required in format: Bearer <token>' 
      });
    }

    const token = authHeader.split(' ')[1];

    // 2. Verify token exists
    if (!token) {
      return res.status(401).json({ 
        success: false,
        message: 'Malformed authorization token' 
      });
    }

    // 3. Verify and decode token
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not configured');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET) as { id: string | number; email: string };

    // 4. Attach user to request
    req.user = {
      id: decoded.id,
      email: decoded.email
    };

    next();
  } catch (error) {
    console.error('Token verification error:', error);

    // Handle specific JWT errors
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ 
        success: false,
        message: 'Token expired' 
      });
    }

    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ 
        success: false,
        message: 'Invalid token' 
      });
    }

    // Handle other errors
    return res.status(500).json({ 
      success: false,
      message: error instanceof Error ? error.message : 'Authentication failed'
    });
  }
};