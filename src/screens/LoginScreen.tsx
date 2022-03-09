import {Alert, Pressable, StyleSheet, View} from "react-native";
import {RootStackScreenProps} from "../../types";
import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";
import {memberLogin} from "../api/services/memberService";
import {
  CustomText,
  FlexView,
  Loading,
  CustomTextInput,
  CustomButton,
} from "../components/atoms";
import {useContext, useState} from "react";
import {MainContext} from "../context/mainContext";
import Colors from "../constants/Colors";

export default function LoginScreen({
  navigation,
}: RootStackScreenProps<"Login">) {
  const [username, setUsername] = useState<string>("johnd");
  const [password, setPassword] = useState<string>("m38rmF$");
  const context = useContext(MainContext);
  const version = Constants?.manifest?.version;

  const onPressLoginBtn = async () => {
    context.setAppLoading(true);
    const memberLoginResponse = await memberLogin(username, password);
    console.log("memberLoginResponse", memberLoginResponse);

    context.setAppLoading(false);

    if (memberLoginResponse) {
      await SecureStore.setItemAsync("memberToken", memberLoginResponse.token);
      navigation.navigate("Root");
    }
  };

  const onPressWorkInProgress = () => {
    Alert.alert("Work in progress");
  };

  const onChangeUsername = (text: string) => {
    setUsername(text);
  };

  const onChangePassword = (text: string) => {
    setPassword(text);
  };

  const {
    container,
    panelLogin,
    marginTop,
    btnForgotPassword,
    btnSignUp,
    txtVersion,
  } = styles;

  return (
    <View style={container}>
      <Loading isLoadingActive={context?.appLoading} />
      <FlexView />
      <CustomText
        type={"bold"}
        fontSize={24}
        text={"Hello,"}
        textColor={Colors.mainGrey}
      />
      <CustomText
        type={"bold"}
        fontSize={24}
        text={"Login now"}
        textColor={Colors.mainYellow}
      />

      <View style={panelLogin}>
        <FlexView flex={6}>
          <CustomTextInput
            placeholder="username"
            value={username}
            onChangeText={onChangeUsername}
            maxLength={30}
          />

          <View style={marginTop} />
          <CustomTextInput
            placeholder="password"
            value={password}
            secureTextEntry
            onChangeText={onChangePassword}
            maxLength={30}
          />

          <Pressable onPress={onPressWorkInProgress} style={btnForgotPassword}>
            <FlexView />
            <CustomText
              type={"medium"}
              fontSize={12}
              text={"Forgot password?"}
              textColor={Colors.mainYellow}
            />
          </Pressable>

          <FlexView flex={2} />
        </FlexView>

        <CustomButton text={"Login"} onPress={onPressLoginBtn} />
      </View>
      <Pressable onPress={onPressWorkInProgress} style={btnSignUp}>
        <CustomText
          type={"medium"}
          fontSize={12}
          text={"Don't have an account?"}
          textColor={"white"}
        />
        <CustomText
          type={"medium"}
          fontSize={12}
          text={" Sign up"}
          textColor={Colors.mainYellow}
        />
      </Pressable>

      <View style={txtVersion}>
        <CustomText
          type={"medium"}
          fontSize={10}
          text={"v" + version}
          textColor={Colors.mainGrey}
        />
      </View>

      <FlexView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 48,
    backgroundColor: Colors.mainNight,
  },
  btnForgotPassword: {
    flexDirection: "row",
    marginTop: 12,
  },
  btnSignUp: {
    flexDirection: "row",
    marginVertical: 24,
    justifyContent: "center",
  },
  txtVersion: {
    alignItems: "center",
    marginTop: 36,
  },
  panelLogin: {
    justifyContent: "center",
    borderRadius: 8,
    flex: 1.5,
    marginTop: 24,
  },
  marginTop: {
    marginTop: 12,
  },
});
