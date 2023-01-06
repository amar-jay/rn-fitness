import { makeRedirectUri, useAuthRequest } from "expo-auth-session";

// Endpoint
export const TOKEN = "5ede6ef9c8723496cdbc";
const discovery = {
  authorizationEndpoint: "https://github.com/login/oauth/authorize",
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  revocationEndpoint:
    "https://github.com/settings/connections/applications/" + TOKEN
  //   process.env.GITHUB_TOKEN!
};

export const GithubAuth = () => {
  return useAuthRequest(
    {
      clientId: TOKEN,
      scopes: ["identity"],
      redirectUri: makeRedirectUri({
        scheme: "exp://e7t2gmq.anonymous.19000.exp.direct:80"
      })
    },
    discovery
  );
};
