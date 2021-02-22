import React from 'react';
import Head from 'next/head';

import Container from '../styles/pages/Login';
import Login from '../components/Login';

export default function PagesLogin(): JSX.Element {
  return (
    <Container>
      <Head>
        <title>Wiser Educação</title>
      </Head>

      <Login />
    </Container>
  );
}
