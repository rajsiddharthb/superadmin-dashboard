import { createSelector } from 'reselect';

const getUsersState = state => state.users;

export const usersByTypeSelector = (type) => createSelector(
  getUsersState,
  state => state[type] || {}
);
