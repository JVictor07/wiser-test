import styled from 'styled-components';
import { media } from '../../../styles/mediaQuery';

const ImageBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  div {
    width: 100vw;
    height: 386px;
    position: absolute;
    transform: rotate(-180deg);
    background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
  }
  img {
    width: 100%;
    height: 386px;
    object-fit: cover;
  }
  ${media.medium`
    width: 42vw;
    min-width: 42vw;
    position: static;
    div {
      width: 42vw;
      height: 100vh;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `}
  ${media.large`
    width: 56vw;
    min-width: 56vw;
    div {
      width: 56vw;
    }
  `}
`;

export default ImageBackground;
