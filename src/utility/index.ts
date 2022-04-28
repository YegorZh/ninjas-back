import { Request, Response } from 'express';

const mongoError = (error: any, res: Response) => {
  res.status(500).send(error);
};

export { mongoError };
