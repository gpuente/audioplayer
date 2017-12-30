import _ from 'lodash';
import MobileDetect from 'mobile-detect';
import screenOrientation from 'screen-orientation';

const md = new MobileDetect(window.navigator.userAgent);

export function getValidIndex(currentIndex, fix, length, start = false, random = false) {
  let result = currentIndex + fix;
  const lengthFixed = length - 1;

  if (random) {
    return _.random(lengthFixed);
  }

  result = result < 0 ? 0 : result;

  if (result > lengthFixed && start) {
    return result % length;
  }

  if (result > lengthFixed) {
    return lengthFixed;
  }

  return result;
}


export function translateTime(secs) {
  return secs;
}

export function requireLandscapeStyle(isMobile, direction) {
  return isMobile && direction === 'landscape';
}

export function isMobileDevice() {
  return typeof md.mobile() === 'string';
}

export function getOrientation() {
  return screenOrientation().direction;
}
