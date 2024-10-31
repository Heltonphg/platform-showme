import { FadeInDown } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import { AppNavigationProps, RootAppRoutes } from '@routes/types/app.routes.types'
import { VideoType } from '@type/video.types'
import { Pressable, Thumbnail, Container } from './video-list-item.styles'

type VideoListItemProps = {
  video: VideoType
  index: number
}

export const VideoListItem = ({ video, index }: VideoListItemProps) => {
  const { navigate } = useNavigation<AppNavigationProps>()

  const onNavigateToVideoDetail = () => {
    navigate(RootAppRoutes.VIDEO_DETAIL, { videoItem: video })
  }

  return (
    <Container entering={FadeInDown.delay(200 * index)}>
      <Pressable onPress={onNavigateToVideoDetail}>
        <Thumbnail
          testID={'thumbnail'}
          sharedTransitionTag={video.id}
          source={{ uri: video.thumbnail }}
        />
      </Pressable>
    </Container>
  )
}
