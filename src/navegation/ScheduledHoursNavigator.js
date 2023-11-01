import { DetailsMonth } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const ScheduledHoursNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="DetailsMonth"
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="DetailsMonth" component={DetailsMonth} />
    </Stack.Navigator>
  )
}

export default ScheduledHoursNavigator
