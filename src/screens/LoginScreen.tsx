import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {RootStackScreenProps} from "../../types";

export default function LoginScreen({
  navigation,
}: RootStackScreenProps<"Login">) {
  const onPressLoginBtn = () => {
    navigation.navigate("Root");
  };
  return (
    <View style={styles.container}>
      <View style={styles.flexView} />
      <Text style={{alignSelf: "center", marginBottom: 12}}>
        Welcome to RNPlayground
      </Text>
      <View
        style={{
          borderWidth: 1,
          borderColor: "blue",
          justifyContent: "center",
          borderRadius: 8,
          flex: 1,
          marginHorizontal: 48,
          padding: 12,
        }}
      >
        <View style={{flex: 5}}>
          <View style={{flex: 1, justifyContent: "center"}}>
            <Text>Email</Text>
            <TextInput placeholder="email" />
          </View>

          <View style={{flex: 1, justifyContent: "center"}}>
            <Text>Password</Text>
            <TextInput placeholder="password" />
          </View>

          <View style={{flex: 2}} />
        </View>

        <Pressable
          onPress={onPressLoginBtn}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "blue",
          }}
        >
          <Text>Login</Text>
        </Pressable>
      </View>

      <View style={styles.flexView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  flexView: {
    flex: 1,
  },
});
