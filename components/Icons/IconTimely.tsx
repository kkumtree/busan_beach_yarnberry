import Image from 'next/image';
import React from 'react';
import { IconKey, IconURL } from '$constants/icons';

const IconTimely = ({ iconKey }: { iconKey: IconKey }) => {
  const icon = IconURL[iconKey];
  return <Image src={icon.url} alt={icon.alt} width={18} height={18} />;
};

export default IconTimely;
