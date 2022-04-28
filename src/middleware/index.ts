import { checkImages, typeCheckHero } from '../HeroModel';
import { Response, Request, NextFunction } from 'express';

const validateBody = (req: Request, res: Response, next: NextFunction) => {
  if (!typeCheckHero(req.body))
    return res.status(400).send({
      error: 'Body must contain nickname and images.',
    });
  if (!checkImages(req.body.images))
    return res.status(400).send({
      error:
        'At least one image in images must lead to a url that ends either in' +
        '.png .jpg .jpeg .webp .gif .svg',
    });
  next();
};

export { validateBody };
