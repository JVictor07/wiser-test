/**
 * Action types
 */
export enum UserTypes {
  LOAD_REQUEST = '@user/LOAD_REQUEST',
  LOAD_SUCCCES = '@user/LOAD_SUCCCES',
  LOAD_FAILURE = '@user/LOAD_FAILURE',
}

/**
 * Data types
 */
export interface User {
  id: string;
  accessToken: string;
  refreshToken: string;
}
/**
 * State type
 */
export interface UserState {
  readonly data: User;
  readonly loading: boolean;
  readonly error: boolean;
}
