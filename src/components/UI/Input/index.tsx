import * as S from './styles';

export default function UIInput() {
  return (
    <S.LoginForm>
      <S.Container>
        <h1>Olá, seja bem-vindo!</h1>
        <span>Para acessar a plataforma, faça seu login</span>
        <input type="text" />
        <input type="text" />
        <button type="button">Entrar</button>
      </S.Container>
      <div>
        <span>Esqueceu seu login ou senha?</span>
        <span>Clique aqui</span>
      </div>
    </S.LoginForm>
  );
}
