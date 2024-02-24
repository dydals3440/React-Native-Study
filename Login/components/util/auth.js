import axios from 'axios';

const API_KEY = 'AIzaSyBOCC24PKRfPT4zetYofX7ILsgI8KrrMdA';

const authenticate = async (mode, email, password) => {
  const url =
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=` + API_KEY;

  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
};

// 위에서 promise가 token을 산출하기 떄문에, 아래의 async await은 필요없음
// const createUser = async (email, password) => {
//   const token = await authenticate('signUp', email, password);
//   return token;
// };

const createUser = (email, password) => {
  return authenticate('signUp', email, password);
};

// const login = async (email, password) => {
//   const token = await authenticate('signInWithPassword', email, password);
//   return token;
// };

const login = (email, password) => {
  return authenticate('signInWithPassword', email, password);
};

export { createUser, login };
