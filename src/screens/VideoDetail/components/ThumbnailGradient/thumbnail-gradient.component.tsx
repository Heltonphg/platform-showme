import { useWindowDimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import theme from '@theme/index'
import { Thumbnail, ThumbnailWrapper } from './thumbnail-gradient.styles'

type ThumbnailGradientProps = {
  videoId: string
  thumbnail: string
}

export const ThumbnailGradient = ({ thumbnail, videoId }: ThumbnailGradientProps) => {
  const { width } = useWindowDimensions()

  return (
    <ThumbnailWrapper style={{ width: width, height: width }}>
      <Thumbnail
        sharedTransitionTag={videoId}
        source={{ uri: thumbnail }}
        style={{ width: width, height: width }}
      />

      <LinearGradient
        colors={['transparent', theme.COLORS.DARK[200]]}
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '30%'
        }}
      />
    </ThumbnailWrapper>
  )
}
