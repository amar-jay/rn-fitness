// import { useAuthRequest, makeRedirectUri } from "expo-auth-session";

import { FacebookAuthHook } from "../firebase/authentication";

export const FACEBOOK_CLIENT_ID = "1929390870741214";

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

export const FacebookAuth = FacebookAuthHook;
