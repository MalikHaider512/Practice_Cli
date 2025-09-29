import { StyleSheet } from "react-native";
import { height, width } from "../../../utils/Dimensions";
import Colors from "../../../utils/AppColors";

const styles = StyleSheet.create({
  viewStyles: {
    width: width(90),
    borderRadius: 30,
    borderWidth: 1,
    alignSelf: "center",
    padding: 12,
    height: height(5),
    justifyContent: "center",
    borderColor: Colors.alto,
    marginVertical: height(1),
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    marginLeft: width(2),
  },
});

export default styles;
