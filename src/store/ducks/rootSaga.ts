import { all, takeLatest } from 'redux-saga/effects';

import { UserTypes } from './user/types';
import loginUser from './user/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(UserTypes.LOAD_REQUEST, loginUser)]);
}
