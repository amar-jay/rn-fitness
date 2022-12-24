import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import colors from "@/constants/colors"
interface Props {
  userName: string
  mainCardHeader: string
}
const Header: React.FC<Props> = ({ userName, mainCardHeader }) => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 0,
          marginBottom: 20,
          justifyContent: "center"
        }}
      >
        <Text style={styles.header}>{userName}</Text>
      </View>
      <Text style={styles.subTitle}>{mainCardHeader}</Text>
    </>
  )
}
export default Header

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    marginLeft: 20,
    marginTop: 2,
    letterSpacing: 0.7,
    color: colors.description,
    fontFamily: "sans-serif-medium",
    fontWeight: "600"
  },
  header: {
    fontSize: 40,
    fontFamily: "sans-serif-condensed",
    letterSpacing: 1,
    color: colors.app_color_primary
  }
})
