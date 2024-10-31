import React from 'react'
import { Video } from 'expo-av'
import { Loading } from '@components/Loading/loading.component'
import { useVideoPlay } from './video-play.hook'
import { Container, DotLine } from './video-play.styles'

export const VideoPlay = () => {
  const { hlsPath, loadingVideo, setLoadingVideo } = useVideoPlay()

  return (
    <Container>
      {loadingVideo && (
        <Loading
          style={{ position: 'absolute', top: '50%', left: '50%', marginLeft: -20, marginTop: -20 }}
        />
      )}

      <DotLine />

      <Video
        source={{ uri: hlsPath }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        shouldPlay
        isLooping
        useNativeControls
        style={{ width: '100%', height: '100%' }}
        onLoad={() => setLoadingVideo(false)}
        onError={() => setLoadingVideo(false)}
      />
    </Container>
  )
}
