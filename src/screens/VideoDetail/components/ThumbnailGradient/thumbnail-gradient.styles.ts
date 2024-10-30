import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

export const Thumbnail = styled(Animated.Image).attrs({
  resizeMode: 'stretch'
})``

export const ThumbnailWrapper = styled.View`
  position: relative;
`
