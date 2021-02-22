import styled, { css } from 'styled-components';

interface StyledUIInputProps {
  hasError: boolean;
}

const StyledUIInput = styled.div<StyledUIInputProps>`
  width: 100%;
  position: relative;
  :not(:last-of-type) {
    margin-bottom: 15px;
  }
  label {
    display: flex;
    flex-direction: column;
    span {
      font-size: 10px;
      margin-left: 10px;
      margin-bottom: 8px;
      text-transform: uppercase;
    }
    input {
      height: 48px;
      font-size: 10px;
      padding: 0 15px;
      color: ${props => props.theme.colors.lightPurple};
      border-radius: ${props => props.theme.borderRadius};
      background: ${props => props.theme.colors.offWhitePurple};
      border: 1px solid ${props => props.theme.colors.lightPurple};
      ${props =>
        props.hasError &&
        css`
          border: 1px solid ${props.theme.colors.error};
        `}
    }
    svg {
      top: 37px;
      right: 20px;
      position: absolute;
    }
    .error {
      margin-top: 10px;
      margin-left: 10px;
      text-transform: none;
      color: ${props => props.theme.colors.error};
    }
  }
`;

export default StyledUIInput;
