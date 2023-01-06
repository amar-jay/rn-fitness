// Login screen
import { useState } from "react";
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

type Props = NativeStackScreenProps<StackParamList, ScreenNames["Login"]>;
const Login: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleGithubAuthSignIn = () => {
    //return gh_auth.promptAsync();
    // alert("Sign In", TOKEN);
  };
  const handleFacebookAuthSignIn = () => {
    return handleUrl("https://www.facebook.com/");
    //   return fb_auth.promptAsync();
  };
  const handleSignUp = () => {
    navigation.navigate(screenNames.Signup);
  };

  const handleSignIn = async () => {
    const valid = () => {
      if (!email) {
        alert("Sign In", "Please enter email");
        return false;
      }
      if (!password) {
        alert("Sign In", "Please enter password");
        return false;
      }

      if (password.length < 6) {
        setPassword("");
        alert("Sign In", "Password should be at least 6 characters");
        return false;
      }

      if (!validateEmail(email)) {
        setEmail("");
        alert("Sign Up", "Invalid email");
        return false;
      }

      if (!validatePassword(password)) {
        setPassword("");
        alert("Sign In", "Invalid password");
        return false;
      }
      return true;
    };
    if (valid()) {
      // const x = await createUserWithEmailAndPasswordAtom( email as Email,password);
      alert("Valid", "valid email and password");
      navigation.navigate(screenNames.Home as any);
    }
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
          //disabled
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
