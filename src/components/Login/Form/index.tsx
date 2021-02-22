import * as React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as S from './styles';
import UIInput from '../../UI/Input';
import * as UserActions from '../../../store/ducks/user/actions';

interface IFormInputs {
  email: string;
  password: string;
}

const formSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

function LoginForm({ loadRequestLogin }): JSX.Element {
  const { handleSubmit, errors, register } = useForm<IFormInputs>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: IFormInputs) => {
    loadRequestLogin(data);
  };
  return (
    <S.LoginForm>
      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <S.Title>Olá, seja bem-vindo!</S.Title>
        <S.Description>
          Para acessar a plataforma, faça seu login.
        </S.Description>

        <UIInput
          type="text"
          name="email"
          label="E-mail"
          errors={errors}
          register={register}
        />

        <UIInput
          label="Senha"
          name="password"
          errors={errors}
          type="password"
          register={register}
        />

        <S.Button type="submit" text="Entrar" />
      </S.FormContainer>
      <S.ForgotPassword>
        <span>Esqueceu seu login ou senha?</span>
        <span>
          Clique <Link href="/login">aqui</Link>
        </span>
      </S.ForgotPassword>
    </S.LoginForm>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(null, mapDispatchToProps)(LoginForm);
