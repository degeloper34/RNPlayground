import {FontAwesome5} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {RootTabParamList} from "../../types";
import Colors from "../constants/Colors";
import CartScreen from "../screens/CartScreen";
import ProductListScreen from "../screens/ProductListScreen";

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
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome5>["name"];
  color: string;
}) {
  return <FontAwesome5 size={24} style={{marginBottom: -3}} {...props} />;
}
