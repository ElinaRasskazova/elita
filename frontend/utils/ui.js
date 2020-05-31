/**
 * Simply creates CSS object with given background image URL
 * @param url {string}
 * @return {{backgroundImage: string}}
 */
export const createBackgroundImage = url => {
  return {
    backgroundImage: `url(${url})`,
  };
};
