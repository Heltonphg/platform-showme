import { FadeIn, FadeInDown } from 'react-native-reanimated'
import { Header } from './components/Header/header.component'
import { ThumbnailGradient } from './components/ThumbnailGradient/thumbnail-gradient.component'
import { useVideoDetail } from './video-detail.hook'
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
  const { formattedDay, onNavigateVideoPlay, videoItem, views } = useVideoDetail()

  return (
    <Container>
      <Header />

      <ThumbnailGradient thumbnail={videoItem.thumbnail} videoId={videoItem.id} />

      <WrapperInfo>
        <AnimatedTitle entering={FadeIn.delay(400)}>{videoItem.title}</AnimatedTitle>

        <AnimatedMetricsInfo entering={FadeInDown.delay(500)}>
          {views} • {formattedDay}
        </AnimatedMetricsInfo>
        {videoItem.description && (
          <AnimatedDescription entering={FadeInDown.delay(600)}>
            {videoItem.description}
          </AnimatedDescription>
        )}

        <AnimatedPlayVideoButton entering={FadeInDown.delay(700)} onPress={onNavigateVideoPlay}>
          <PlayIcon />
          <PlayVideoText>Assistir</PlayVideoText>
        </AnimatedPlayVideoButton>
      </WrapperInfo>
    </Container>
  )
}
