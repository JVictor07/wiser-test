import styled from 'styled-components';
import UIButton from './index';

const StyledUIButton = styled(UIButton)`
  width: 100%;
  height: 48px;
  position: relative;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.colors.getGradient()};
`;

export default StyledUIButton;
