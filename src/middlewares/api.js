// export const signInApi = (data) =>
//   fetch(`https://loft-taxi.glitch.me/auth`, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((response) => response.json());

export const signInApi = async (data) => {
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

export const getCardApi = (data) =>
  fetch(`https://loft-taxi.glitch.me/card?token=${data}`).then((response) =>
    response.json()
  );
