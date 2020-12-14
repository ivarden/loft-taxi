export const localStorageToken = (data, action) => {
    const userLocalStorage = JSON.parse(localStorage.getItem("loftTaxi"));
    if (action) {
      localStorage.setItem(
        "loftTaxi",
        JSON.stringify({ ...userLocalStorage, token: data.token, success: true })
      );
    } else {
      localStorage.setItem(
        "loftTaxi",
        JSON.stringify({ ...userLocalStorage, token: null, success: false })
      );
    }
  };