import {Text, TextProps} from "../Themed";

export function CustomText(props: TextProps) {
  const decideFontFamilyByType = () => {
    switch (props.type) {
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
      {...props}
      allowFontScaling={false}
      style={[
        props.style,
        {
          fontFamily: decideFontFamilyByType(),
          fontSize: props.fontSize || 12,
          color: props.textColor,
          textDecorationLine: props.underline ? "underline" : "none",
        },
      ]}
    >
      {props.text}
    </Text>
  );
}
