import { StyleSheet } from "react-native";
import { height, width } from "../../../utils/Dimensions";
import Colors from "../../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    width: width(90),
    alignSelf: "center",
    marginVertical: height(1),
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: height(1),
  },
  inputStyles: {
    borderWidth: 1,
    borderColor: Colors.alto,
    borderRadius: 20,
    paddingHorizontal: width(2),
    height: height(5),
  },
  errorText: {
    color: Colors.red,
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  errorBorder: {
    borderColor: Colors.red,
  },
  focusedInput: {
    borderColor: Colors.blueRibbon,
  },
});

export default styles;
