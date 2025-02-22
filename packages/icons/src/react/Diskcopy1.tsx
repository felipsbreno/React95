import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Diskcopy1_32x32_4 from '../../png/Diskcopy1_32x32_4.png';
import Diskcopy1_16x16_4 from '../../png/Diskcopy1_16x16_4.png';

export const diskcopy1Data = {
  '32x32_4': {
    imageSrc: Diskcopy1_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Diskcopy1_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Diskcopy1Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Diskcopy1: React.FC<Diskcopy1Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = diskcopy1Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
