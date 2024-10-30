import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { VideoType } from '@type/video.types'

export enum RootAppRoutes {
  Home = 'Home',
  VIDEO_DETAIL = 'VIDEO_DETAIL'
}

export type RootAppParamList = {
  [RootAppRoutes.Home]: undefined
  [RootAppRoutes.VIDEO_DETAIL]: {
    videoItem: VideoType
  }
}

export type AppNavigationProps = NativeStackNavigationProp<RootAppParamList>

export type VideoDetailRouteProps = RouteProp<RootAppParamList, RootAppRoutes.VIDEO_DETAIL>
