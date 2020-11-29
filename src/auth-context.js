import React from "react";
export const AuthContext = React.createContext({});

// export const AuthProvider = ({ childeren }) => {
//   const [isLoggedIn, setIsLoggedIn] = React.useState(false);

//   const logIn = (email, password) => {
//     if (email !== "test@test.com" || password !== "password") {
//       return;
//     }
//     setIsLoggedIn(true);
//   };

//   const logOut = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <AuthContext.Provider value={(isLoggedIn, logIn, logOut)}>
//       {childeren}
//     </AuthContext.Provider>
//   );
// };

// export const withAuth = (WrappedComponent) => {
//   return class extends React.Component {
//     render() {
//       return (
//         <AuthContext.Consumer>
//           {(value) => <WrappedComponent {...value} {...this.props} />}
//         </AuthContext.Consumer>
//       );
//     }
//   };
// };
// export const withAuth = function (WrappedComponent) {
//   return (
//     <AuthContext.Consumer>
//       {(value) => <WrappedComponent {...value} {...this.props} />}
//     </AuthContext.Consumer>
//   );
// };
