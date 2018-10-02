import { uncapitalize, capitalize } from './stringUtils';

// eslint-disable-next-line import/prefer-default-export
export const extendsProps = (funcName, propTypes, excludes = []) =>
  Object.keys(propTypes).reduce(
    (obj, prop) =>
      (excludes.indexOf(prop) !== -1
        ? obj
        : {
          ...obj,
          [uncapitalize(funcName).concat(capitalize(prop))]: propTypes[prop],
        }),
    {}
  );
