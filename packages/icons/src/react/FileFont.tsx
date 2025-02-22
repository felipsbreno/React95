import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FileFont_32x32_4 from '../../png/FileFont_32x32_4.png';
import FileFont_16x16_4 from '../../png/FileFont_16x16_4.png';

export const fileFontData = {
  '32x32_4': {
    imageSrc: FileFont_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: FileFont_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface FileFontProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const FileFont: React.FC<FileFontProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = fileFontData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
