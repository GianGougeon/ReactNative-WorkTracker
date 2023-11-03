import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from '../screens/Details/Details';

const Stack = createNativeStackNavigator();

const DetailsNavigator = () => {
    return (
        <Stack.Navigator
        initialRouteName="Details"
        screenOptions={() => ({
          headerShown: false,
        })}>
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    );
}

export default DetailsNavigator;
