/**
 * @flow
 */

/**
 * Closure
 * Returns a function which know provided prefix, that function
 *   will return string prefix + name.
 * @param {String} prefix - prefix
 * @returns {Function} {function(string): string}
 */
const createSymbol: Function = (prefix: string) => (name: string): string => `@@${prefix}//${name}`;

export default createSymbol;
