const TOKEN_KEY = 'auth_token';

const authentication = {
  getToken: () => {
    return localStorage.getItem(TOKEN_KEY);
  },
  setToken: (token) => {
    localStorage.setItem(TOKEN_KEY, token);
  },
  removeToken: () => {
    localStorage.removeItem(TOKEN_KEY);
  },
  isAuthenticated: () => {
    return !!localStorage.getItem(TOKEN_KEY);
  },
};

export default authentication;
