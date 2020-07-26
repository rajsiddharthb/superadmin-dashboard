/*
 * @flow
 */

class CacheService {
  static getItem(key: string) {
    return localStorage.getItem(key);
  }

  static setItem(key: string, value: any) {
    return localStorage.setItem(key, value);
  }

  static deleteItem(key: string) {
    return localStorage.removeItem(key);
  }

  static clearStorage() {
    return localStorage.clear();
  }

  static setAuthToken(token: string) {
    return CacheService.setItem('auth_token', token);
  }

  static getAuthToken() {
    return CacheService.getItem('auth_token');
  }
}

export default CacheService;
