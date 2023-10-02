import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddScreen from '../screens/AddScreen/AddScreen';

const Stack = createNativeStackNavigator();

function AddNavigator() {
    return (
        <Stack.Navigator
        initialRouteName="Add"
        screenOptions={() => ({
          headerShown: false,
        })}>
            <Stack.Screen name="Add" component={AddScreen} />
        </Stack.Navigator>
    );
}

export default AddNavigator;
