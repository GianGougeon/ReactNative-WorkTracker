import { Home} from "../screens";
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
        </Stack.Navigator>
    );
};

export default StackNavigator;
