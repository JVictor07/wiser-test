import styled from 'styled-components';
import UIButton from './index';

const StyledUIButton = styled(UIButton)`
  width: 100%;
  color: #fff;
  height: 48px;
  font-size: 16px;
  font-weight: 600;
  position: relative;
  text-transform: uppercase;
  border-radius: ${(props) => props.theme.borderRadius};
  background: ${(props) => props.theme.colors.getGradient()};
`;

export default StyledUIButton;
