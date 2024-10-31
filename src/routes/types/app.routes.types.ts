import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { VideoType } from '@type/video.types'

export enum RootAppRoutes {
  Home = 'Home',
  VIDEO_DETAIL = 'VIDEO_DETAIL',
  VIDEO_PLAY = 'VIDEO_PLAY'
}

export type RootAppParamList = {
  [RootAppRoutes.Home]: undefined
  [RootAppRoutes.VIDEO_DETAIL]: {
    videoItem: VideoType
  }
  [RootAppRoutes.VIDEO_PLAY]: {
    hlsPath: string
    videoId: string
  }
}

export type AppNavigationProps = NativeStackNavigationProp<RootAppParamList>
export type VideoDetailRouteProps = RouteProp<RootAppParamList, RootAppRoutes.VIDEO_DETAIL>
export type VideoPlayRouteProps = RouteProp<RootAppParamList, RootAppRoutes.VIDEO_PLAY>
