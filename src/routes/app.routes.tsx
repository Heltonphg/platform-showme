import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens'
import { RootAppParamList, RootAppRoutes } from './types/app.routes.types'

const { Navigator, Screen } = createNativeStackNavigator<RootAppParamList>()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name={RootAppRoutes.Home}
        component={Home}
        options={{ animation: 'slide_from_right' }}
      />
    </Navigator>
  )
}
