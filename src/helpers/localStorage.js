export const localStorageToken = (data, action) => {
  const userLocalStorage = JSON.parse(localStorage.getItem("loftTaxi"));
  if (action) {
    localStorage.setItem(
      "loftTaxi",
      JSON.stringify({
        ...userLocalStorage,
        token: data.token,
        success: true,
      })
    );
  } else {
    localStorage.setItem(
      "loftTaxi",
      JSON.stringify({ ...userLocalStorage, token: null, success: false })
    );
  }
};

export const localStorageTokenNewUser = (data, { email, password }) => {
  const userLocalStorage = JSON.parse(localStorage.getItem("loftTaxi"));
  !!data.token &&
    localStorage.setItem(
      "loftTaxi",
      JSON.stringify({
        ...userLocalStorage,
        email: email,
        password: password,
        token: data.token,
        success: true,
      })
    );
};
