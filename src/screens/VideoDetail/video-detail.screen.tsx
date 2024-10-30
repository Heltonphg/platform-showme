import { useWindowDimensions } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { VideoDetailRouteProps } from '@src/routes/types/app.routes.types'
import { Header } from './components/Header/header.component'
import { Container, Thumbnail } from './video-detail.styles'

export const VideoDetail = () => {
  const {
    params: { videoItem }
  } = useRoute<VideoDetailRouteProps>()

  const { width } = useWindowDimensions()

  return (
    <Container>
      <Header />

      <Thumbnail
        sharedTransitionTag={videoItem.id}
        source={{ uri: videoItem.thumbnail }}
        style={{ width: width, height: width }}
      />
    </Container>
  )
}
