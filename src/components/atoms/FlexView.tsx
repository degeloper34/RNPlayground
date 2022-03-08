import {View} from "react-native";

interface IProps {
  flex?: number;
  children?: React.ReactNode;
}

export function FlexView({flex = 1, children}: IProps) {
  return (
    <View
      style={{
        flex: flex || 1,
      }}
    >
      {children}
    </View>
  );
}
