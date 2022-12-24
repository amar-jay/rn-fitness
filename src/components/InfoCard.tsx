import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageSourcePropType,
  StyleProp,
  ViewStyle
} from "react-native"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"

interface Props {
  image: ImageSourcePropType
  name: string
  style: StyleProp<ViewStyle>
}
const InfoCard: React.FC<Props> = ({ image, name, style }) => {
  return (
    <View style={style}>
      <Image source={image} style={styles.imageContainer} />
      <View>
        <Text style={styles.header}>{name}</Text>
        <Text style={styles.subHeader}>Sadere Aude</Text>
      </View>
    </View>
  )
}
export default InfoCard
const styles = StyleSheet.create({
  imageContainer: {
    width: wp("55%"),
    height: hp("25%")
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
    fontFamily: "sans-serif-condensed"
  },
  subHeader: {
    fontSize: 14,
    fontWeight: "700",
    color: "#ccc",
    fontFamily: "sans-serif-condensed"
  }
})
