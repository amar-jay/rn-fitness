/*
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { useEffect } from "react";
import alert from "../alert-message";

// Endpoint
export const GITHUB_TOKEN = "5ede6ef9c8723496cdbc";
const discovery = {
  authorizationEndpoint: "https://github.com/login/oauth/authorize",
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  revocationEndpoint:
    "https://github.com/settings/connections/applications/" + GITHUB_TOKEN
  //   process.env.GITHUB_TOKEN!
};

export const GithubAuth = () => {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: GITHUB_TOKEN,
      scopes: ["identity"],
      redirectUri: makeRedirectUri({
        scheme: "com.garaj.fitnesstracker"
      })
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
      alert("Success", "Success" + code);
    }
  }, [response]);
  return {
    request,
    promptAsync
  };
};
*/
