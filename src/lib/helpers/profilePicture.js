// @flow
import config from 'config';

export default (path: string, s3BaseUrl: string = config.s3BaseUrl) => {
  let link = '';
  if (!path) {
    link = `${s3BaseUrl}/Profile-Pictures/profile.png`;
  }
  if (path && path.startsWith('Profile-Pictures/')) {
    link = `${s3BaseUrl}/${path}`;
  }

  return link || path;
};
