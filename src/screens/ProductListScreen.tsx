import {useContext, useEffect, useLayoutEffect, useState} from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import {RootStackScreenProps} from "../../types";
import {CustomText, Loading} from "../components/atoms";
import Colors from "../constants/Colors";
import {MainContext} from "../context/mainContext";
import {getAllProducts} from "../api/services/productsService";
import * as SecureStore from "expo-secure-store";

export default function ProductListScreen({
  navigation,
}: RootStackScreenProps<"Login">) {
  const [products, setProducts] = useState({});
  const context = useContext(MainContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={onPressLogout}>
          <CustomText
            text={"Logout"}
            type={"bold"}
            textColor={Colors.white}
            style={{marginLeft: 12}}
          />
        </Pressable>
      ),
    });
  }, [navigation]);

  const onPressLogout = async () => {
    await SecureStore.deleteItemAsync("memberToken");
    navigation.reset({
      index: 0,
      routes: [{name: "Guest"}],
    });
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    context.setAppLoading(true);
    const abc = await getAllProducts();

    let test: any = {};

    for (let eachProduct of abc) {
      if (!test.hasOwnProperty(eachProduct.category)) {
        test[eachProduct.category] = [];
      }

      test[eachProduct.category].push(eachProduct);
    }

    setProducts(test);
    context.setAppLoading(false);
  };

  const renderProduct = ({item}) => {
    return (
      <Pressable
        onPress={() => navigation.navigate("ProductDetail", {product: item})}
        style={{
          width: Dimensions.get("screen").width / 3,
          height: Dimensions.get("screen").height / 3.5,
          marginRight: 12,
          borderRadius: 8,
          backgroundColor: "white",
          overflow: "hidden",
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

  const renderCategory = ({item}) => {
    return (
      <View style={{marginBottom: 12}}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <View style={{flex: 1, padding: 12}}>
            <CustomText
              text={item}
              type={"bold"}
              textColor={Colors.mainNight}
              fontSize={16}
            />
          </View>

          <Pressable
            onPress={() =>
              navigation.navigate("Category", {
                category: products[item],
                categoryTitle: item,
              })
            }
            style={{marginRight: 12}}
          >
            <CustomText
              text={"Show all"}
              type={"regular"}
              textColor={Colors.mainNight}
              underline
            />
          </Pressable>
        </View>

        <FlatList
          data={products[item]}
          renderItem={renderProduct}
          style={{flex: 1, paddingHorizontal: 12}}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => String(index)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Loading isLoadingActive={context.appLoading} />
      <FlatList
        data={Object.keys(products)}
        renderItem={renderCategory}
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
