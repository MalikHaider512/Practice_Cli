import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimensions";

const styles = StyleSheet.create({
  parentView: {
    width: width(90),
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  titleText: {
    fontSize: 20,
  },
});

export default styles;
