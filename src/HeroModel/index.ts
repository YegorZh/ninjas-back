import { Schema, model } from 'mongoose';

type Hero = {
  nickname: string;
  realName?: string;
  originDescription?: string;
  superpowers?: string[];
  catchPhrase?: string;
  images: string[];
};

const typeCheckHero = (obj: any): obj is Hero => {
  if (!obj?.nickname || !obj?.images) return false;
  return true;
};

const checkImages = (images: string[]) => {
  if (images?.length < 1) return false;

  const imageLinkRegExp = new RegExp(
    /(https?:\/\/.*\.(?:png|jpe?g|gif|svg|webp|))/,
    'i'
  );
  for (let i = 0; i < images.length; i++)
    if (!imageLinkRegExp.test(images[i])) return false;

  return true;
};

const heroSchema = new Schema<Hero>({
  nickname: { type: String, required: true },
  realName: String,
  originDescription: String,
  superpowers: [String],
  catchPhrase: String,
  images: { type: [String], required: true },
});

const HeroModel = model<Hero>('Hero', heroSchema);

export default HeroModel;
export { typeCheckHero, checkImages };
