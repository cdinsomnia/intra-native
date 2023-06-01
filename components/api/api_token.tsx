let accessToken = null;

export const setAccessToken = (token) => {
  accessToken = token;
};

export const getAccessToken = () => {
  if (accessToken === null) {
    return null;
  }
  return accessToken;
};

export const clearAccessToken = () => {
  accessToken = null;
};