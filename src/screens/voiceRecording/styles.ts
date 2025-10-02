import { StyleSheet } from "react-native";
import Colors from "../../utils/AppColors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.athensGray,
    // justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  recorderControls: {
    marginBottom: 30,
  },
  recBtn: {
    alignItems: "center",
  },
  recText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  card: {
    width: "100%",
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 20,
    shadowColor: Colors.black,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
    color: "#222",
  },
  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    gap: 20,
  },
});

export default styles;
