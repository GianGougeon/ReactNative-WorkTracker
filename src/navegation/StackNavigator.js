import { Home, Details, Profile } from "../screens/index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={({ route, navigation }) => ({
                headerShown: false,
            })}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
            {/* <Stack.Screen name="Profile" component={Profile} /> */}
        </Stack.Navigator>
    );
};

export default StackNavigator;
