import { Express } from "express";

export const middlewareIsAdmin = (req, res, next) => {

  if (!req.user.is_admin) return res.status(401).json({ msg: 'Unathorized - Admin Only' });

  next();
};
