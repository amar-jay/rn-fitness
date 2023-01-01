import { GestureResponderEvent, View } from "react-native"
import { TouchableHighlight, StyleSheet } from "react-native"
import colors from "../constants/colors"
import { Ionicons as Icon } from "@expo/vector-icons"

interface Props {
  exerciseGroup: string
  quit: (e: GestureResponderEvent) => void
  goBack: () => void
}
const ExerciseHeader: React.FC<Props> = ({ exerciseGroup, quit, goBack }) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableHighlight onPress={quit}>
          <Icon name="md-close-outline" size={50} color={colors.app_Tint} />
        </TouchableHighlight>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 10,
    marginRight: 10
  },
  headText: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.app_color_primary
  }
})

export default ExerciseHeader
