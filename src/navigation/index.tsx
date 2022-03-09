import {FontAwesome5} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import * as React from "react";
import {ColorSchemeName} from "react-native";
import Colors from "../constants/Colors";
// import NotFoundScreen from "../screens/NotFoundScreen";
import {RootStackParamList, RootTabParamList} from "../../types";
import CartScreen from "../screens/CartScreen";
import ProductListScreen from "../screens/ProductListScreen";
import LinkingConfiguration from "./LinkingConfiguration";
import GuestNavigator from "./StackNavigators/GuestNavigator";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CategoryScreen from "../screens/CategoryScreen";

export default function Navigation({
  colorScheme,
  memberToken,
}: {
  colorScheme: ColorSchemeName;
  memberToken: string | null;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator memberToken={memberToken} />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator({memberToken}: {memberToken: string | null}) {
  return (
    <Stack.Navigator initialRouteName={!memberToken ? "Guest" : "Root"}>
      <Stack.Screen
        name="Guest"
        component={GuestNavigator}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{headerShown: false, gestureEnabled: false}}
      />

      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          headerStyle: {backgroundColor: Colors.mainNight},
          headerTitleStyle: {
            color: Colors.mainGrey,
          },
        }}
      />
      {/* <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{title: "Oops!"}}
      /> */}
      <Stack.Group
        screenOptions={{presentation: "transparentModal", headerShown: false}}
      >
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors.mainYellow,
        headerStyle: {
          backgroundColor: Colors.mainNight,
        },
        headerTitleStyle: {
          color: Colors.mainYellow,
        },
        tabBarStyle: {
          backgroundColor: Colors.mainNight,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontFamily: "sora-medium",
        },
      }}
    >
      <BottomTab.Screen
        name="TabProductList"
        component={ProductListScreen}
        options={{
          title: "Products",
          tabBarIcon: ({color}) => <TabBarIcon name="home" color={color} />,
          tabBarLabel: "Home",
        }}
      />

      <BottomTab.Screen
        name="TabCart"
        component={CartScreen}
        options={{
          title: "Cart",
          tabBarIcon: ({color}) => (
            <TabBarIcon name="shopping-basket" color={color} />
          ),
          tabBarLabel: "Cart",
        }}
      />
      {/* <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({navigation}: RootTabScreenProps<"TabOne">) => ({
          title: "Tab One",
          tabBarIcon: ({color}) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({pressed}) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{marginRight: 15}}
              />
            </Pressable>
          ),
        })}
      /> */}
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome5>["name"];
  color: string;
}) {
  return <FontAwesome5 size={24} style={{marginBottom: -3}} {...props} />;
}
