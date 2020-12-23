export const fetchAddressesApi = (data) =>
  fetch(`https://loft-taxi.glitch.me/addressList`).then((response) =>
    response.json()
  );
