// @flow

import { history } from 'config/routes';
import CacheService from '../../storage/CacheService';
import settings from '../../../settings';

export default (data: Object) => {
  const { ERRORS } = settings.SERVICES.NETWORK;
  if (data.status === 401) {
    CacheService.clearStorage();
    history.push('/login');
    throw new Error('Your session has expired.');
  }

  if (data.status >= 400) {
    if (ERRORS.DEBUGS[data.error.debug] && data.error.details.message) {
      throw new Error(ERRORS.DEBUGS[data.error.debug][data.error.details.message]);
    }

    // @TODO change typeof checking , it may clear after back-end fix
    if (ERRORS.DEBUGS[data.error.debug] && typeof data.error.details === 'string') {
      throw new Error(ERRORS.DEBUGS[data.error.debug][data.error.details]);
    }
    throw new Error(ERRORS.SOMETHING_WENT_WRONG);
  }
  return data;
};
