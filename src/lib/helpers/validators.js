/**
 * @flow
 */
import PhoneNumber from 'awesome-phonenumber';

const emailValidator = (data: string): boolean => {
  // eslint-disable-next-line no-useless-escape
  const regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regexp.test(data);
};

const phoneNumberValidator = (phone: string): boolean => {
  // eslint-disable-next-line no-useless-escape
  const indianPhone = PhoneNumber(phone, 'IND');
  const usPhone = PhoneNumber(phone, 'US');

  const isUs = usPhone.isPossible() && usPhone.isValid() && usPhone.isMobile();
  const isIndian = indianPhone.isPossible() && indianPhone.isValid() && indianPhone.isMobile();

  return isUs || isIndian;
};

// minimum eight characters, at least one uppercase letter, one lowercase letter and one number
const passwordValidator = (password: string): any => {
  // eslint-disable-next-line no-useless-escape
  const regexp = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');

  return regexp.test(password);
};

// validates a US zip code based on both the five digit (12345)
// as well as nine-digit (12345-1234) schemes
const zipCodeUSValidator = (data: string): boolean => {
  const regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
  return regexp.test(data);
};

const notEmptyStringValidator = (data: string): boolean => !!(data && !(data.toString().trim().length < 1));

const minLengthValidator = (data: string, minLength: number, required: boolean = true): boolean => {
  if (required && !data) return false;

  return data.toString().trim().length >= minLength;
};

const maxLengthValidator = (data: string, maxLength: number, required: boolean = true): boolean => {
  if (required && !data) return false;

  return data.toString().trim().length < maxLength;
};

const socialLinkValidator = (data: string, type: string) => {
  switch (type) {
    case 'fb':
      return data.startsWith('https://facebook.com/') && data.length > 21;
    case 'github':
      return data.startsWith('https://github.com/') && data.length > 19;
    case 'linkedin':
      return data.startsWith('https://linkedin.com/') && data.length > 21;
    case 'youtube':
      return data.startsWith('https://youtube.com/') && data.length > 20;
    case 'instagram':
      return data.startsWith('https://instagram.com/') && data.length > 22;
    default:
      // @todo change this logic
      return true;
  }
};

const linkedNetworkSrcValidator = (baseUrl: string, value: string) => {
  const len = baseUrl.length;
  const conditionWithWWW = value.startsWith(`https://www.${baseUrl}`) && value.length > len + 13;
  const conditionWithoutWWW = value.startsWith(`https://${baseUrl}`) && value.length > len + 9;

  return !value || conditionWithWWW || conditionWithoutWWW;
};

const compareTwoValues = (value1: any, value2: any): boolean => value1 === value2;

export const validator = {
  linkedNetworkSrcValidator,
  notEmptyStringValidator,
  phoneNumberValidator,
  socialLinkValidator,
  minLengthValidator,
  maxLengthValidator,
  zipCodeUSValidator,
  passwordValidator,
  compareTwoValues,
  emailValidator
};
