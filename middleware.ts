// middleware.ts

import { Request, Response, NextFunction } from 'express';

// Mock user roles
const roles = {
    USER: 'user',
    ADMIN: 'admin',
};

// Middleware for checking authentication
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    // Check if the user is authenticated (this is just a mockup)
    const token = req.headers['authorization'];
    if (token) {
        // Logic to verify token and get user info
        // Assuming user is added to request object
        req.user = { id: 1, role: roles.USER }; // Mock user
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
};

// Middleware for role-based access control
export const authorize = (allowedRoles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const userRole = req.user?.role;
        if (allowedRoles.includes(userRole)) {
            next();
        } else {
            res.status(403).send('Forbidden');
        }
    };
};

// Example usage:
// app.get('/admin', authenticate, authorize([roles.ADMIN]), (req, res) => {
//     res.send('Welcome to admin area');
// });
