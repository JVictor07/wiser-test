import * as S from './styles';

export default function LoginForm(): JSX.Element {
  return (
    <S.LoginForm>
      <S.Container>
        <S.Title>Olá, seja bem-vindo!</S.Title>
        <S.Description>Para acessar a plataforma, faça seu login</S.Description>
        <S.UIInput>
          <label htmlFor="email">
            <span>E-mail</span>
            <input type="email" id="email" />
          </label>
        </S.UIInput>
        <S.UIInput>
          <label htmlFor="email">
            <span>Senha</span>
            <input type="password" id="password" />
          </label>
        </S.UIInput>

        <S.Button text="Entrar" />
      </S.Container>
      <S.ForgotPassword>
        <span>Esqueceu seu login ou senha?</span>
        <span>Clique aqui</span>
      </S.ForgotPassword>
    </S.LoginForm>
  );
}
