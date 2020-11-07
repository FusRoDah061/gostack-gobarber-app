import React, { useEffect, useState } from 'react';
import { Image, ImageProps, ImageURISource } from 'react-native';

import defaultAvatar from '../../assets/default_avatar.png';

type AvatarImageProps = Omit<Omit<ImageProps, 'defaultSource'>, 'onError'> & {
  source: ImageURISource;
};

const AvatarImage: React.FC<AvatarImageProps> = ({ source, ...rest }) => {
  const [useDefaultAvatar, setUseDefaultAvatar] = useState(false);

  useEffect(() => {
    if (typeof source === 'object') {
      setUseDefaultAvatar(!source.uri);
      return;
    }

    setUseDefaultAvatar(false);
  }, [source]);

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
