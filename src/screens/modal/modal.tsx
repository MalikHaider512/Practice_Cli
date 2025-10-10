import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, SimpleButton, SimpleModal } from "../../components";
import styles from "./styles";

export default function Modals() {
  const [isSimpleModalVisible, setIsSimpleModalVisible] = useState(false);

  const openSimpleModal = () => {
    setIsSimpleModalVisible(true);
  };
  return (
    <SafeAreaView style={styles.parentView}>
      <Header title={"Modals"} />

      <SimpleButton title="OPen Simple Modal" onPress={openSimpleModal} />

      <SimpleModal
        isVisible={isSimpleModalVisible}
        setIsVisible={setIsSimpleModalVisible}
      />
    </SafeAreaView>
  );
}
