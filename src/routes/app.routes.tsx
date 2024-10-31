import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, VideoDetail, VideoPlay } from '../screens'
import { RootAppParamList, RootAppRoutes } from './types/app.routes.types'

const { Navigator, Screen, Group } = createNativeStackNavigator<RootAppParamList>()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name={RootAppRoutes.Home}
        component={Home}
        options={{ animation: 'slide_from_right' }}
      />
      <Screen
        name={RootAppRoutes.VIDEO_DETAIL}
        component={VideoDetail}
        options={{ animation: 'slide_from_right' }}
      />
      <Group screenOptions={{ presentation: 'modal' }}>
        <Screen name={RootAppRoutes.VIDEO_PLAY} component={VideoPlay} />
      </Group>
    </Navigator>
  )
}
