import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { instanceLoginAPI } from '../../../api';
import * as S from './styles';

interface IFormInputs {
  email: string;
  password: string;
}

const formSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function LoginForm(): JSX.Element {
  const [formErrorMsg, setFormErrorMsg] = useState('');
  const { handleSubmit, errors, register } = useForm<IFormInputs>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: IFormInputs) => {
    instanceLoginAPI
      .login(data)
      .then(resp => {
        if (resp.status === 200) {
          setFormErrorMsg('');
          handleLogin(resp.data);
        } else {
          throw resp;
        }
      })
      .catch(err => {
        if (err.response) {
          if (err.response.status === 401) {
            setFormErrorMsg('Usuário não autorizado');
          } else {
            setFormErrorMsg(err.message);
          }
        } else {
          setFormErrorMsg(err.message);
        }
      });
  };

  useEffect(() => {
    console.log('errors');
    console.log(errors);
  }, [errors]);

  return (
    <S.LoginForm>
      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <S.Title>Olá, seja bem-vindo!</S.Title>
        <S.Description>
          Para acessar a plataforma, faça seu login.
        </S.Description>
        <S.UIInput>
          <label htmlFor="email">
            <span>E-mail</span>
            <input type="text" name="email" id="email" ref={register} />
            <span />
          </label>
        </S.UIInput>
        <S.UIInput>
          <label htmlFor="email">
            <span>Senha</span>
            <input type="password" name="password" ref={register} />
          </label>
        </S.UIInput>

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
