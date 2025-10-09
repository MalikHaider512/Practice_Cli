import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  BothSideIconInput,
  CustomInput,
  Header,
  LeftIconInput,
  RightIconInput,
  SecureInput,
  SimpleInput,
} from "../../components";
import Feather from "react-native-vector-icons/Feather";
import Colors from "../../utils/AppColors";

export default function Inputs() {
  return (
    <SafeAreaView>
      <Header title={"Inputs"} />
      <SimpleInput placeholder="Enter Text" label="Simple Input" />
      <LeftIconInput
        placeholder="Enter Text"
        label="Left Icon Input"
        icon={<Feather name={"user"} size={18} color={Colors.black} />}
      />

      <RightIconInput
        placeholder="Enter Text"
        label="Right Icon Input"
        icon={<Feather name={"user"} size={18} color={Colors.black} />}
      />

      <SecureInput placeholder="Enter Text" label="Secure Input" />

      <BothSideIconInput
        placeholder="Enter Text"
        label="Both Side Icon Input"
        leftIcon={<Feather name={"user"} size={18} color={Colors.black} />}
        rightIcon={<Feather name={"user"} size={18} color={Colors.black} />}
      />

      <CustomInput
        placeholder="Enter Text"
        label="Custom Input"
        leftIcon={<Feather name={"user"} size={18} color={Colors.black} />}
        rightIcon={<Feather name={"user"} size={18} color={Colors.black} />}
        isSecured={true}
      />
    </SafeAreaView>
  );
}
