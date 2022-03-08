import Colors from "../../constants/Colors";
import {Text, TextProps} from "react-native";

interface IProps extends TextProps {
  text: string | number;
  type: "regular" | "medium" | "bold";
  fontSize?: number;
  textColor?: string;
  underline?: boolean;
}

export function CustomText({
  type = "medium",
  fontSize = 12,
  underline = false,
  textColor = Colors.mainNight,
  style,
  text,
  ...attrs
}: IProps) {
  const decideFontFamilyByType = () => {
    switch (type) {
      case "regular":
        return "sora-regular";
      case "medium":
        return "sora-medium";
      case "bold":
        return "sora-bold";
      default:
        return "sora-regular";
    }
  };

  return (
    <Text
      {...attrs}
      allowFontScaling={false}
      style={[
        style,
        {
          fontFamily: decideFontFamilyByType(),
          fontSize: fontSize,
          color: textColor,
          textDecorationLine: underline ? "underline" : "none",
        },
      ]}
    >
      {text}
    </Text>
  );
}
