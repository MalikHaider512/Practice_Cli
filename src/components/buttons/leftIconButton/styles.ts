import { StyleSheet } from "react-native";
import { height, width } from "../../../utils/Dimensions";
import Colors from "../../../utils/AppColors";

const styles = StyleSheet.create({
  buttonView: {
    width: width(90),
    height: height(6),
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    backgroundColor: Colors.alto,
    borderRadius: height(4),
    marginVertical: height(1),
    flexDirection: "row",
    paddingHorizontal: width(5),
  },
  textStyle: {
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
    textAlign: "center",
  },
});

export default styles;
