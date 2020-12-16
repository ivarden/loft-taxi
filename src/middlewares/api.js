// export const fetchSignInApi = (data) =>
//   fetch(`https://loft-taxi.glitch.me/auth`, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((response) => response.json());

export const fetchSignInApi = async (data) => {
  const response = await (
    await fetch(`https://loft-taxi.glitch.me/auth`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();
  if (!response.success) throw new Error(response.error);
  return response;
};

export const fetchRegisterUserApi = (data) =>
  fetch("https://loft-taxi.glitch.me/register", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

export const fetchGetCardApi = (data) =>
  fetch(`https://loft-taxi.glitch.me/card?token=${data}`).then((response) =>
    response.json()
  );

export const fetchAddCardApi = (data) =>
  fetch(`https://loft-taxi.glitch.me/card`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

export const fetcAddOrderApi = (data) =>
  fetch(
    `https://loft-taxi.glitch.me/route?address1=${data.address1}&address2=${data.address2}`
  ).then((response) => response.json());

export const fetchAddressesApi = (data) =>
  fetch(`https://loft-taxi.glitch.me/addressList`).then((response) =>
    response.json()
  );
