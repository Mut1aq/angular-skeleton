/**
 * @param param any string to check if it may be null
 * @returns true if is null, false otherwise
 */
export const checkNullability = (param: any) => {
  return param != null &&
    param != '' &&
    param != undefined &&
    param?.length > 0 &&
    param != 'null' &&
    param != 'undefined' &&
    param != 0
    ? isNaN(param)
      ? param
      : +param
    : null;
};

export const checkObjectNullability = (obj: any): boolean => {
  return (
    obj &&
    Object.keys(obj)?.length > 0 &&
    Object.getPrototypeOf(obj) === Object.prototype
  );
};

export const checkArrayNullability = (arr: any): boolean => {
  return arr && arr?.length > 0;
};
