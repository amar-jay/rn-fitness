// import { useAuthRequest, makeRedirectUri } from "expo-auth-session";

export const facebook_config = {
  appID: "1929390870741214",
  secret: "3eb4c5c7ac78a0f913119f6e652bcb05",
  redirect_uri: "https://garage-fitness-tracker.firebaseapp.com/__/auth/handler"
};

// // Endpoint
// const discovery = {
//   authorizationEndpoint: "https://www.dropbox.com/oauth2/authorize",
//   tokenEndpoint: "https://www.dropbox.com/oauth2/token"
// };

// const FacebookAuth = () => {
//   return useAuthRequest(
//     {
//       clientId: FACEBOOK_CLIENT_ID,
//       // There are no scopes so just pass an empty array
//       scopes: [],
//       // Dropbox doesn't support PKCE
//       usePKCE: false,
//       // For usage in managed apps using the proxy
//       redirectUri: makeRedirectUri({
//         scheme: "com.garaj.fitnesstracker",
//         useProxy
//       })
//     },
//     discovery
//   );
// };

//const FacebookAuth = FacebookAuthHook;
