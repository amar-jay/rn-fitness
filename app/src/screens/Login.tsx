// Login screen
import { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet, TextInput } from "react-native";
import Button from "@/components/Button";
import screenNames, { ScreenNames } from "@/constants/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "types";
import alert from "@/utils/alert-message";
import Header from "@/components/Header";
import { hp } from "@/utils/screen-dimension";
import {
  validateEmail,
  validatePassword
} from "@/utils/client-side-validation";
import handleUrl from "@/utils/handle-url";
//import * as WebBrowser from "expo-web-browser";
//import { signInWithEmailAndPassword } from "@/utils/firebase";
import { GithubAuth, FacebookAuth } from "@/utils/auth";
import { maybeCompleteAuthSession } from "expo-web-browser";

maybeCompleteAuthSession();
type Props = NativeStackScreenProps<StackParamList, ScreenNames["Login"]>;
const Login: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const gh_auth = GithubAuth();
  const fb_auth = FacebookAuth();
  const handleGithubAuthSignIn = () => {
    return gh_auth.promptAsync();
    // alert("Sign In", TOKEN);
  };
  const handleFacebookAuthSignIn = () => {
    return handleUrl("https://www.facebook.com/");
    return fb_auth.promptAsync();
  };
  const handleSignUp = () => {
    navigation.navigate(screenNames.Signup);
  };

  const handleSignIn = () => {
    if (!email) {
      alert("Sign In", "Please enter email");
      return;
    }
    if (!password) {
      alert("Sign In", "Please enter password");
      return;
    }

    if (password.length < 6) {
      setPassword("");
      alert("Sign In", "Password should be at least 6 characters");
      return;
    }

    if (!validateEmail(email)) {
      setEmail("");
      alert("Sign Up", "Invalid email");
      return;
    }

    if (!validatePassword(password)) {
      setPassword("");
      alert("Sign In", "Invalid password");
      return;
    }
    // c-> is email
    // c-> is password
    navigation.navigate(screenNames.Home as any);
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <Header name={"Login"} mainCardHeader={""} />
      <View>
        <TextInput
          value={email}
          keyboardType="email-address"
          editable
          maxLength={60}
          style={styles.input}
          onChangeText={e => setEmail(e)}
          placeholder="me@me.me"
        />
        <TextInput
          value={password}
          secureTextEntry
          autoCorrect={false}
          placeholder="password"
          //keyboardType="visible-password"
          editable
          style={styles.input}
          onChangeText={e => setPassword(e)}
        />
        <Button
          textName={"Sign In"}
          disabled
          buttonWidth={64}
          onClick={handleSignIn}
        />
        <Button
          textName={"Github"}
          buttonWidth={64}
          inverse
          onClick={handleGithubAuthSignIn}
        />
        <Button
          textName={"Facebook"}
          icon={"facebook"}
          buttonWidth={64}
          inverse
          onClick={handleFacebookAuthSignIn}
        />
      </View>

      <Button
        textName={"Sign Up"}
        inverse
        buttonWidth={30}
        onClick={handleSignUp}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: hp(10),
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 18,
    backgroundColor: "#ddd"
  }
});

export default Login;
