import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageSourcePropType,
  StyleProp,
  ViewStyle
} from "react-native"
import colors from "@/constants/colors"

interface Props {
  image: ImageSourcePropType
  name: string
  description?: string
  smallVariant?: boolean
  style: StyleProp<ViewStyle>
}
const InfoCard: React.FC<Props> = ({
  smallVariant,
  image,
  name,
  style,
  description
}) => {
  return (
    <View style={[style, styles.container]}>
      <Image
        source={image}
        style={
          smallVariant ? styles.smallImageContainer : styles.imageContainer
        }
      />
      <View>
        <Text style={styles.header}>{name}</Text>
        <Text style={styles.subHeader}>{description}</Text>
      </View>
    </View>
  )
}
export default InfoCard
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 50
  },

  smallImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    fontFamily: "sans-serif-condensed"
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.description,
    fontFamily: "sans-serif-condensed"
  }
})
