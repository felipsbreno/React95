import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Regwiz127_32x32_4 from '../../png/Regwiz127_32x32_4.png';

export const regwiz127Data = {
  '32x32_4': {
    imageSrc: Regwiz127_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Regwiz127Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Regwiz127: React.FC<Regwiz127Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = regwiz127Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
