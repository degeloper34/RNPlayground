import {View} from "react-native";

export function FlexView(props: any) {
  return (
    <View
      style={{
        flex: props.flex || 1,
      }}
    >
      {props.children}
    </View>
  );
}
