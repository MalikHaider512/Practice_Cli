import React from "react";
import { Text, View } from "react-native";
import Modal from "react-native-modal";
import SimpleButton from "../../buttons/simpleButton";

interface SimpleModalProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  message?: string;
  onClose?: () => void;
}

export default function SimpleModal({
  isVisible,
  setIsVisible,
  title = "Modal Title",
  message = "This is a modal message.",
  onClose,
}: SimpleModalProps) {
  return (
    <Modal
      isVisible={isVisible}
      animationIn="zoomIn"
      animationOut="zoomOut"
      onBackdropPress={() => setIsVisible(false)}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18 }}>🚀 Animated Modal</Text>
        <SimpleButton title="Close" onPress={() => setIsVisible(false)} />
      </View>
    </Modal>
  );
}
