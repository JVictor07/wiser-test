import Image from '../../../assets/login-image.jpeg';

import ImageBackground from './styles';

export default function LoginImage() {
  return (
    <ImageBackground>
      <div />
      <img src={Image} alt="imagem do login" />
    </ImageBackground>
  );
}
