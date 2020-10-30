import React, { useState } from 'react';
import { Image, ImageProps } from 'react-native';

import defaultAvatar from '../../assets/default_avatar.png';

type AvatarImageProps = Omit<Omit<ImageProps, 'defaultSource'>, 'onError'>;

const AvatarImage: React.FC<AvatarImageProps> = ({ source, ...rest }) => {
  const [useDefaultAvatar, setUseDefaultAvatar] = useState(false);

  return (
    <Image
      source={useDefaultAvatar ? defaultAvatar : source}
      onError={error => {
        setUseDefaultAvatar(true);
      }}
      {...rest}
    />
  );
};

export default AvatarImage;
