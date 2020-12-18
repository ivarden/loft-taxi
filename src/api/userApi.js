// export const fetchSignInApi = async (data) => {
//   const response = await (
//     await fetch(`https://loft-taxi.glitch.me/auth`, {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//   ).json();
//   if (!response.success) throw new Error(response.error);
//   return response;
// };

export const fetchSignInApi = (data) =>
  fetch(`https://loft-taxi.glitch.me/auth`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

export const fetchRegisterUserApi = (data) =>
  fetch("https://loft-taxi.glitch.me/register", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());