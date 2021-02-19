import styled from 'styled-components';
import StyledUIButton from '../../UI/Button/styles';

export const Title = styled.h1`
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  margin-bottom: 16px;
`;

export const Description = styled.h1`
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.lightPurple};
`;

export const LoginForm = styled.div`
  z-index: 1;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 25px 27px 0 27px;
  width: calc(100vw - 66px);
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.colors.offWhitePurple};
`;

export const UIInput = styled.div`
  width: 100%;
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
      color: ${(props) => props.theme.lightPurple};
      border-radius: ${(props) => props.theme.borderRadius};
      background: ${(props) => props.theme.colors.offWhitePurple};
      border: 1px solid ${(props) => props.theme.colors.lightPurple};
    }
  }
`;

export const Button = styled(StyledUIButton)`
  margin-top: 32px;
  margin-bottom: -23px;
`;

export const ForgotPassword = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: calc(24px + 23px);
  span {
    color: #fff;
  }
`;
