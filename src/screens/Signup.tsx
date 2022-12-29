// Login screen

//import colors from "@/constants/colors"
import { colorAtom } from "@/store/atoms/colors"
import { useState } from "react"
import { useAtom} from "jotai";
import { View, SafeAreaView, StyleSheet, TextInput } from "react-native"
import Button from "@/components/Button";
import { ScreenNames } from "@/constants/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "types";
import Header from "@/components/Header";


type Props = NativeStackScreenProps<StackParamList, ScreenNames["Login"]>;
const Login:React.FC<Props> = ({navigation}) => {

	const [colors] = useAtom(colorAtom);

	const handleSignIn = () => {};
	const handleSignUp = () => {};
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	return (
		<SafeAreaView style={[styles.container, {backgroundColor:colors.app_Tint}]}>
			<Header  name={"SignUp"} mainCardHeader={""}/>
			<View>
				<TextInput value={email} editable maxLength={60} onChangeText={e => setEmail(e)}/>
				<TextInput value={password} editable onChangeText={e => setPassword(e)}/>
				<Button textName={"Sign Up"}  buttonWidth={64}  onClick={handleSignIn}/>
			</View>
		</SafeAreaView>
	)

}

const styles = StyleSheet.create({
  container: {
	paddingVertical: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
})

export default Login;