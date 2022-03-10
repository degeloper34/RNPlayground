import {useContext, useEffect, useLayoutEffect, useState} from "react";
import {FlatList, Pressable, StyleSheet, View} from "react-native";
import {
  Product,
  ProductsWithCategorySignature,
  RootStackScreenProps,
} from "../../types";
import {CustomText, Loading} from "../components/atoms";
import Colors from "../constants/Colors";
import {MainContext} from "../context/mainContext";
import {getAllProducts} from "../api/services/productsService";
import * as SecureStore from "expo-secure-store";
import {ProductCard} from "../components/molecules";

export default function ProductListScreen({
  navigation,
}: RootStackScreenProps<"ProductList">) {
  const [products, setProducts] = useState<ProductsWithCategorySignature>({});
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

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const onPressLogout = async () => {
    await SecureStore.deleteItemAsync("memberToken");
    navigation.reset({
      index: 0,
      routes: [{name: "Guest"}],
    });
  };

  const fetchAllProducts = async () => {
    context?.setAppLoading(true);
    const productsData = await getAllProducts();

    console.log("productsData", productsData);

    let productsByCategory: {[category: string]: Product[]} = {};

    for (let eachProduct of productsData) {
      if (!productsByCategory.hasOwnProperty(eachProduct.category)) {
        productsByCategory[eachProduct.category] = [];
      }

      productsByCategory[eachProduct.category].push(eachProduct);
    }

    context?.setProductListAndProductsByCategory(
      productsData,
      productsByCategory
    );

    setProducts(productsByCategory);

    context?.setAppLoading(false);
  };

  const {
    container,
    productCardStyle,
    categoryView,
    rowAlignedView,
    categoryTitleView,
    btnCategory,
    flatListProducts,
  } = styles;

  const renderProduct = ({item}: {item: Product}) => {
    return (
      <ProductCard
        title={item.title}
        imageUrl={item.image}
        price={item.price}
        onPress={() =>
          navigation.navigate("ProductDetail", {productId: item.id})
        }
        style={productCardStyle}
      />
    );
  };

  const renderCategory = ({item}: {item: string}) => {
    return (
      <View style={categoryView}>
        <View style={rowAlignedView}>
          <View style={categoryTitleView}>
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
                category: item,
                categoryTitle: item,
              })
            }
            style={btnCategory}
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
          style={flatListProducts}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => String(index)}
        />
      </View>
    );
  };

  return (
    <View style={container}>
      <Loading isLoadingActive={context?.appLoading} />
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
  productCardStyle: {
    marginRight: 12,
  },
  categoryView: {
    marginBottom: 12,
  },
  rowAlignedView: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryTitleView: {
    flex: 1,
    padding: 12,
  },
  btnCategory: {
    marginRight: 12,
  },
  flatListProducts: {flex: 1, paddingHorizontal: 12},
});
