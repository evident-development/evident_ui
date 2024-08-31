import { FC } from 'react';
import { EHeaderSizes } from '../types';

interface IPlainHeaderProps {
  label: string;
  size: EHeaderSizes;
}
export const PlainHeader: FC<IPlainHeaderProps> = ({ label, size }) => {
  switch (size) {
    case EHeaderSizes.Big:
      return <h2>{label}</h2>;
    case EHeaderSizes.Middle:
      return <h3>{label}</h3>;
    case EHeaderSizes.Small:
      return <h4>{label}</h4>;
    case EHeaderSizes.Tiny:
      return <h5>{label}</h5>;
    default:
      return <h1>{label}</h1>;
  }
};
