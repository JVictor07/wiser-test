import styled from 'styled-components';

const ImageBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  div {
    width: 100vw;
    height: 100vh;
    position: absolute;
    transform: rotate(-180deg);
    background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
  }
  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`;

export default ImageBackground;
