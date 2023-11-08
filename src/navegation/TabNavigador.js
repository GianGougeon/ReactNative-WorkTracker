import { View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import ProfileNavigator from "./ProfileNavigator";
import ScheduledHoursNavigator from "./ScheduledHoursNavigator";
import AddNavigator from "./AddNavigator";
import StackNavigator from "./StackNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from "./../assets/styles/TabNavigator.styles";
import Details from "./DetailsNavigator";
const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
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
                name="DetailsMonth"
                component={ScheduledHoursNavigator}
                options={{
                    tabBarButton: () => null,
                }}
            />
            <BottomTab.Screen
                name="Details"
                component={Details}
                options={{
                    tabBarButton: () => null,
                }}
            />
        </BottomTab.Navigator>
    );
};

export default BottomTabNavigator;
