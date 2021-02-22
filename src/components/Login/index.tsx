import React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import UILoader from '../UI/Loader';
import LoginForm from './Form';
import LoginImage from './Image';

import LoginContainer from './styles';

function Login({ isLoading }: { isLoading: boolean }) {
  if (isLoading) {
    return <UILoader />;
  }

  return (
    <LoginContainer>
      <LoginImage />
      <LoginForm />
    </LoginContainer>
  );
}

const mapStateToProps = (state: ApplicationState) => ({
  isLoading: state.user.loading,
});

export default connect(mapStateToProps, null)(Login);
