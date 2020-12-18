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
