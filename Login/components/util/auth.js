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

  console.log(response.data);
};

const createUser = async (email, password) => {
  await authenticate('signUp', email, password);
};

const login = async (email, password) => {
  await authenticate('signInWithPassword', email, password);
};

export { createUser, login };
