import React, { useState } from 'react'
import { Video } from 'expo-av'
import { Loading } from '@components/Loading/loading.component'
import { useRoute } from '@react-navigation/native'
import { VideoPlayRouteProps } from '@routes/types/app.routes.types'
import { Container, DotLine } from './video-play.styles'

export const VideoPlay = () => {
  const {
    params: { hls_path }
  } = useRoute<VideoPlayRouteProps>()

  const [loading, setLoading] = useState(true)

  return (
    <Container>
      {loading && (
        <Loading
          style={{ position: 'absolute', top: '50%', left: '50%', marginLeft: -20, marginTop: -20 }}
        />
      )}

      <DotLine />

      <Video
        source={{ uri: hls_path }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        shouldPlay
        isLooping
        useNativeControls
        style={{ width: '100%', height: '100%' }}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
      />
    </Container>
  )
}
