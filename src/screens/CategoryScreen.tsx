import {Ionicons} from "@expo/vector-icons";
import {useContext, useLayoutEffect, useState} from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import {RootStackScreenProps} from "../../types";
import {CustomText} from "../components/atoms";
import Colors from "../constants/Colors";
import {MainContext} from "../context/mainContext";

export default function CategoryScreen({
  navigation,
  route,
}: RootStackScreenProps<"Category">) {
  const {category, categoryTitle} = route?.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: categoryTitle,
      headerLeft: () => (
        <Pressable onPress={() => navigation.pop()}>
          <Ionicons name="arrow-back-outline" size={24} color={Colors.white} />
        </Pressable>
      ),
    });
  }, [navigation]);

  console.log("category", category);
  const [products, setProducts] = useState({});
  const context = useContext(MainContext);

  console.log("context", context);

  const renderProduct = ({item}) => {
    return (
      <Pressable
        onPress={() => navigation.navigate("Modal", {product: item})}
        style={{
          width: Dimensions.get("screen").width / 3,
          height: Dimensions.get("screen").height / 3.5,
          borderRadius: 8,
          backgroundColor: "white",
          overflow: "hidden",
          flex: 1,
          margin: 12,
        }}
      >
        <View style={{flex: 3}}>
          <Image
            source={{uri: item.image}}
            style={{flex: 1}}
            resizeMode={"contain"}
          />
        </View>
        <View
          style={{
            flex: 1,
            padding: 3,
            backgroundColor: Colors.mainNight,
            marginTop: 12,
          }}
        >
          <View style={{flex: 2}}>
            <CustomText
              text={item.title}
              type={"medium"}
              textColor={Colors.mainGrey}
              fontSize={12}
              numberOfLines={2}
            />
          </View>

          <View style={{flex: 1}}>
            <CustomText
              text={"$" + item.price}
              type={"bold"}
              textColor={Colors.mainYellow}
              fontSize={12}
              numberOfLines={2}
            />
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={category}
        numColumns={2}
        renderItem={renderProduct}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => String(index)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainGrey,
  },
});
