import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";

// Endpoint
const discovery = {
  authorizationEndpoint: "https://github.com/login/oauth/authorize",
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  revocationEndpoint:
    "https://github.com/settings/connections/applications/" +
    process.env.GITHUB_TOKEN!
};

export const GithubAuth = () => {
  return useAuthRequest(
    {
      clientId: process.env.GITHUB_TOKEN!,
      scopes: ["identity"],
      redirectUri: makeRedirectUri({
        scheme: "exp://e7t2gmq.anonymous.19000.exp.direct:80"
      })
    },
    discovery
  );
};
