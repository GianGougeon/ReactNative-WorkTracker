import { View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import ProfileNavigator from "./ProfileNavigator";
import AddNavigator from "./AddNavigator";
import StackNavigator from "./StackNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from "./../assets/styles/TabNavigator.styles";
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={StackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={focused ? styles.iconContainer : null}>
                            <Feather
                                name="home"
                                size={24}
                                color={focused ? "red" : "white"}
                            />
                        </View>
                    ),
                }}
            />
            <BottomTab.Screen
                name="Add"
                component={AddNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.add}>
                            <View style={focused ? styles.iconContainer : null}>
                                <Feather
                                    name="plus"
                                    size={24}
                                    color={focused ? "red" : "white"}
                                />
                            </View>
                        </View>
                    ),
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Feather
                                name="user"
                                size={24}
                                color={focused ? "red" : "white"}
                            />
                        </View>
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}

export default BottomTabNavigator;
