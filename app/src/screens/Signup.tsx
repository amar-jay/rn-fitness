// Login screen

import { useState } from "react";
import { View, SafeAreaView, StyleSheet, TextInput } from "react-native";
import Button from "@/components/Button";
import { ScreenNames } from "@/constants/navigation";
import alert from "@/utils/alert-message";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "types";
import Header from "@/components/Header";
import { hp } from "@/utils/screen-dimension";
import {
  validateEmail,
  validatePassword
} from "@/utils/client-side-validation";
import handleUrl from "@/utils/handle-url";

type Props = NativeStackScreenProps<StackParamList, ScreenNames["Signup"]>;
const Signup: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = () => {
    if (!email) {
      alert("Sign Up", "Please enter email");
      return;
    }
    if (!password) {
      alert("Sign Up", "Please enter password");
      return;
    }

    if (password.length < 6) {
      setPassword("");
      alert("Sign Up", "Password should be at least 6 characters");
      return;
    }

    if (!validatePassword(password)) {
      setPassword("");
      alert("Sign Up", "Invalid password");
      return;
    }

    if (!validateEmail(email)) {
      setEmail("");
      alert("Sign Up", "Invalid email");
      return;
    }

    alert("Sign Up", "Signed Up Successfully");
  };

  async function handleFacebookAuth() {
    await handleUrl("https://www.facebook.com/").catch(err => {
      alert("Sign Up", "Something went wrong");
    });
    return;
  }

  async function handleGoogleAuth() {
    await handleUrl("https://www.facebook.com/").catch(err => {
      alert("Sign Up", "Something went wrong");
    });
    return;
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <Header name={"Signup"} mainCardHeader={""} />
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
          placeholder="password"
          textContentType="password"
          editable
          style={styles.input}
          onChangeText={e => setPassword(e)}
        />

        <Button textName={"Sign Up"} buttonWidth={64} onClick={handleSignUp} />
      </View>
      <View>
        <Button
          icon="facebook"
          inverse
          textName={"Facebook"}
          buttonWidth={64}
          onClick={handleFacebookAuth}
        />

        <Button
          inverse
          textName={"Google"}
          buttonWidth={64}
          onClick={handleGoogleAuth}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: hp(20),
    paddingTop: hp(10),
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

export default Signup;
