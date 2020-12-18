export const fetcAddOrderApi = (data) =>
  fetch(
    `https://loft-taxi.glitch.me/route?address1=${data.address1}&address2=${data.address2}`
  ).then((response) => response.json());