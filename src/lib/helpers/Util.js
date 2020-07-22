import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.addLocale(en);

/* eslint-disable no-underscore-dangle */
class Helper {
  /**
   * @param {number} fileSizeInBytes - the size of file
   * @param {number} maxSizeInMB - max limit (MB)
   * @returns {Boolean} - returns true if valid
   */
  static isValidFileSize(fileSizeInBytes, maxSizeInMB) {
    return Math.round(fileSizeInBytes / 1000000) < maxSizeInMB;
  }

  /**
   * @param {String | Date} dob - date of birth;
   * @returns {Number} age
   */
  static getAge(dob: string| Date) {
    let date;
    if (dob instanceof Date) date = dob;
    if (typeof dob === 'string') date = new Date(dob);

    if (!date) throw new Error('The parameter "dob" should be string or instanceof Date');

    return new Date().getFullYear() - date.getFullYear();
  }

  /**
   *
   * Attaches given text to time text,
   * which calculates time deviation from current date
   * @param {String | Date} date - timestamp
   * @param {String} preFixText - timestamp
   * @param {String} postFixText - timestamp
   * @returns {String} - a hour ago, 2 hours ago, a day ago ...
   *  in 5 days, 7 hours ...
   */
  static buildStringWithDateDeviation(date, preFixText = '', postFixText = '') {
    // eslint-disable-next-line
    let _date = date;
    if (!(date instanceof Date)) {
      _date = new Date(date);
    }
    const timeAgo = new TimeAgo('en-US');
    const formatedTime = timeAgo.format(_date);
    return `${preFixText}${formatedTime}${postFixText}`;
  }

  /**
     * @param {String | Date} date -
     * @param {Boolean} withDay -
     * @returns {String} -  Aug 6, 2007
     */
  static buildDate(date, withDay = true) {
    let _date;
    if (date instanceof Date) _date = date;
    if (typeof date === 'string') _date = new Date(date);
    if (!date) throw new Error('The parameter "dob" should be a string or an instance of Date');

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    return `${months[_date.getMonth()]}${withDay ? ` ${_date.getDate()}, ` : ' '}${_date.getFullYear()}`;
  }

  /**
     * @param {String | Null | Undefined | Boolean<false>} path - path of the image
     * @param {String} defaultPath - default path to render
     * @param {Object} options - options for aws image processing options
     * @param {String} s3Url - options for aws image processing options
     * @returns {String | Null} - image's acual url or null
     */
  static buildS3UrlFromPath({
    // eslint-disable-next-line no-unused-vars
    path, defaultPath, options = {}, s3Url
  }: { path: ?string, defaultPath: string, options?: Object }) {
    if (!path) return defaultPath;

    return `${s3Url}${path}`;
  }

  // size = megabyte
  static validateFileSize(file, size = 20) {
    return Math.round(file.size / 1000000) > size;
  }
}

export default Helper;
