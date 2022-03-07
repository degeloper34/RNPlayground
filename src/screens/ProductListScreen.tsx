import {useEffect, useState} from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {RootStackScreenProps} from "../../types";
import {getAllProducts} from "../service/productsService";

export default function ProductListScreen({
  navigation,
}: RootStackScreenProps<"Login">) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    const abc = await getAllProducts();
    console.log("abc", abc);

    let test: any = {};

    for (let eachProduct of abc) {
      console.log(
        "test[eachProduct.category]",
        test.hasOwnProperty(eachProduct.category)
      );

      if (!test.hasOwnProperty(eachProduct.category)) {
        test[eachProduct.category] = [];
      }

      test[eachProduct.category].push(eachProduct);
    }
    console.log("test", test);

    setProducts(test);
  };

  const renderProduct = ({item}) => {
    return (
      <View
        style={{
          width: Dimensions.get("screen").width / 3,
          height: Dimensions.get("screen").height / 4,
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
        <View style={{flex: 1, padding: 3}}>
          <View style={{flex: 2}}>
            <Text style={{fontSize: 12}} numberOfLines={2}>
              {item.title}
            </Text>
          </View>

          <View style={{flex: 1}}>
            <Text style={{fontSize: 12}} numberOfLines={2}>
              {item.price + " TL"}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderCategory = ({item}) => {
    return (
      <View style={{marginBottom: 12}}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 16, fontWeight: "bold", padding: 12}}>
              {item}
            </Text>
          </View>

          <Text
            style={{
              fontSize: 11,
              textDecorationLine: "underline",
              marginRight: 12
            }}
          >
            Tümünü Gör
          </Text>
        </View>

        <FlatList
          data={products[item]}
          renderItem={renderProduct}
          style={{flex: 1, paddingHorizontal: 12}}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  console.log("products", products);

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.keys(products)}
        renderItem={renderCategory}
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
      />
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
