/**
 * @flow
 */

export const COLORS = {
  ERROR: 'color: red',
  WARNING: 'color: aqua',
  SUCCESS: 'color: green'
};

export const LOGGER_TYPES = {
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
  WARNING: 'WARNING'
};

const { log, group, groupEnd, assert } = console;

class Logger {
  static log(type: string, message: any) {
    if (!LOGGER_TYPES[type]) throw new Error('Unsupported logger type');
    log(`%c ${type.toLocaleLowerCase()}`, COLORS[type], message);
  }

  static assert(cond: boolean, param: Object) {
    assert(cond, { ...param });
  }

  static error(message: any) {
    Logger.log(LOGGER_TYPES.ERROR, message);
  }

  static warn(message: any) {
    Logger.log(LOGGER_TYPES.WARNING, message);
  }

  static success(message: any) {
    Logger.log(LOGGER_TYPES.SUCCESS, message);
  }

  static toGroup(h1: string, type: string, messages: Array<any> = []) {
    group(h1);
    messages.forEach(message => log(message));
    groupEnd();
  }

  static test(cond: boolean, params: Object) {
    Logger.assert(cond, params);
  }
}

export default Logger;
