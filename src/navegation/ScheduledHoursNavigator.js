import { ScheduledHours } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const ScheduledHoursNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ScheduledHours"
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="ScheduledHours" component={ScheduledHours} />
    </Stack.Navigator>
  )
}

export default ScheduledHoursNavigator
