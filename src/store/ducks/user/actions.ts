import { action } from 'typesafe-actions';
import { UserTypes, User } from './types';

export const loadRequestLogin = data => action(UserTypes.LOAD_REQUEST, data);

export const loadSuccessLogin = (data: User) =>
  action(UserTypes.LOAD_SUCCCES, { data });

export const loadFailureLogin = () => action(UserTypes.LOAD_FAILURE);
