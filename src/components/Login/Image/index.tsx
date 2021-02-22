import React from 'react';
import Image from '../../../assets/login-image.jpeg';

import ImageBackground from './styles';

export default function LoginImage(): JSX.Element {
  return (
    <ImageBackground>
      <div />
      <img src={Image} alt="imagem do login" />
    </ImageBackground>
  );
}
