import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { call, put } from 'redux-saga/effects';
import wiserAPI from '../../../api';

import { loadSuccessLogin, loadFailureLogin } from './actions';

function* loginUser({ payload }: AnyAction) {
  try {
    const response = yield call(() => wiserAPI.post('/login/', payload));

    yield put(loadSuccessLogin(response.data));
    toast.success('Sucesso ! 😁');
  } catch (err) {
    yield put(loadFailureLogin());
    toast.error('Ops, ocorreu um erro! 😢');
  }
}

export default loginUser;
