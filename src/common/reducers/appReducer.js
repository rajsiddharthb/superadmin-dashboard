import APP_ACTION_TYPES from 'common/actions/app/types';

const initialState = () => ({
  sidebarShow: 'responsive',
  isLoggedIn: null,
  isReady: false
});

export default (state = initialState(), { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest };
    case APP_ACTION_TYPES.CLEAR_APP_STATE:
      return {
        ...state,
        ...initialState()
      };
    case APP_ACTION_TYPES.SET_APPLICATION_IS_READY:
      return {
        ...state,
        isReady: true,
        isLoggedIn: rest.payload
      };
    default:
      return state;
  }
};
