import { FadeIn, FadeInDown } from 'react-native-reanimated'
import dayjs from 'dayjs'
import { useRoute } from '@react-navigation/native'
import { VideoDetailRouteProps } from '@src/routes/types/app.routes.types'
import { Header } from './components/Header/header.component'
import { ThumbnailGradient } from './components/ThumbnailGradient/thumbnail-gradient.component'
import {
  Container,
  AnimatedTitle,
  AnimatedDescription,
  WrapperInfo,
  AnimatedMetricsInfo,
  AnimatedPlayVideoButton,
  PlayVideoText,
  PlayIcon
} from './video-detail.styles'

export const VideoDetail = () => {
  const {
    params: { videoItem }
  } = useRoute<VideoDetailRouteProps>()

  const formattedDay = dayjs(videoItem.created_at).fromNow()
  return (
    <Container>
      <Header />

      <ThumbnailGradient thumbnail={videoItem.thumbnail} videoId={videoItem.id} />

      <WrapperInfo>
        <AnimatedTitle entering={FadeIn.delay(400)}>{videoItem.title}</AnimatedTitle>

        <AnimatedMetricsInfo entering={FadeInDown.delay(500)}>
          {videoItem.views} visualizações • {formattedDay}
        </AnimatedMetricsInfo>

        <AnimatedDescription entering={FadeInDown.delay(600)}>
          {videoItem.description}
        </AnimatedDescription>

        <AnimatedPlayVideoButton entering={FadeInDown.delay(700)}>
          <PlayIcon />
          <PlayVideoText>Assistir</PlayVideoText>
        </AnimatedPlayVideoButton>
      </WrapperInfo>
    </Container>
  )
}
