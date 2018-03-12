import { FETCH_USERS, FETCH_USER, FETCH_ADMINS } from './types';

export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users');
  dispatch({ type: FETCH_USERS, payload: res.data });
};

export const fetchUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};


export const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get('/admins');
  dispatch({ type: FETCH_ADMINS, payload: res.data });
};
