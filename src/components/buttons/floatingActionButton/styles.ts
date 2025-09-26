import { StyleSheet } from "react-native";
import { height, width } from "../../../utils/Dimensions";
import Colors from "../../../utils/AppColors";

const styles = StyleSheet.create({
  buttonView: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: Colors.alto,
    borderRadius: 30,
    marginVertical: height(1),
    position: "absolute",
    bottom: height(15),
    right: width(10),
  },
  textStyle: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default styles;
