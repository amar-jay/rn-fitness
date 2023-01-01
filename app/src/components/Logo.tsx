import { Text, StyleSheet } from "react-native";
export const Logo: React.FC = () => {
  return <Text style={styles.Text}>Trainer</Text>;
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 40,
    fontFamily: "sans-serif-condensed",
    letterSpacing: 1,
    color: "#eee"
  }
});
